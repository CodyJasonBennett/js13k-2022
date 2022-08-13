import { mat4, quat, vec3, mat3 } from 'gl-matrix'

export class Object3D {
  readonly matrix = mat4.create()
  readonly quaternion = quat.create()
  readonly position = vec3.create()
  readonly scale = vec3.set(vec3.create(), 1, 1, 1)
  readonly children: Object3D[] = []
  public parent: Object3D | null = null
  public matrixAutoUpdate = true
  public visible = true

  updateMatrix(): void {
    if (this.matrixAutoUpdate)
      mat4.fromRotationTranslationScale(this.matrix, this.quaternion, this.position, this.scale)
    if (this.parent) mat4.multiply(this.matrix, this.matrix, this.parent.matrix)
    for (const child of this.children) child.updateMatrix()
  }

  add(...children: Object3D[]): void {
    for (const child of children) {
      this.children.push(child)
      child.parent = this
    }
  }

  remove(...children: Object3D[]): void {
    for (const child of children) {
      const childIndex = this.children.indexOf(child)
      if (childIndex !== -1) this.children.splice(childIndex, 1)
      child.parent = null
    }
  }

  traverse(callback: (object: Object3D) => boolean | void): void {
    if (callback(this)) return
    for (const child of this.children) child.traverse(callback)
  }
}

export class Camera extends Object3D {
  public fov: number
  public aspect: number
  public near: number
  public far: number
  readonly projectionMatrix = mat4.create()
  readonly viewMatrix = mat4.create()

  constructor(fov = 45, aspect = 1, near = 0.1, far = 1000) {
    super()

    this.fov = fov
    this.aspect = aspect
    this.near = near
    this.far = far
  }

  updateMatrix(): void {
    super.updateMatrix()
    if (this.matrixAutoUpdate) mat4.perspectiveNO(this.projectionMatrix, this.fov, this.aspect, this.near, this.far)
    mat4.copy(this.viewMatrix, this.matrix)
    mat4.invert(this.viewMatrix, this.viewMatrix)
  }
}

export interface Attribute {
  data: Float32Array | Uint32Array
  size: number
}

export class Geometry {
  readonly attributes: Record<string, Attribute>

  constructor(attributes: Record<string, Attribute>) {
    this.attributes = attributes
  }
}

export type Uniform = number | number[] | Float32Array

export interface MaterialOptions {
  uniforms?: Record<string, Uniform>
  vertex: string
  fragment: string
}

export class Material implements MaterialOptions {
  readonly uniforms: Record<string, Uniform> = {}
  readonly vertex!: string
  readonly fragment!: string

  constructor(options: MaterialOptions) {
    Object.assign(this, options)
  }
}

export class Mesh extends Object3D {
  readonly geometry: Geometry
  readonly material: Material
  readonly modelViewMatrix = mat4.create()
  readonly normalMatrix = mat3.create()

  constructor(geometry: Geometry, material: Material) {
    super()
    this.geometry = geometry
    this.material = material
  }
}

const lineNumbers = (source: string, offset = 0): string => source.replace(/^/gm, () => `${offset++}:`)

export interface Compiled {
  program: WebGLProgram
  VAO: WebGLVertexArrayObject
}

export class Renderer {
  readonly canvas: HTMLCanvasElement
  readonly gl: WebGL2RenderingContext
  public autoClear = true
  private _compiled = new WeakMap<Mesh, Compiled>()

  constructor(canvas: HTMLCanvasElement = document.createElement('canvas')) {
    this.canvas = canvas
    this.gl = canvas.getContext('webgl2', { antialias: true, powerPreference: 'high-performance' })!
    this.gl.enable(this.gl.CULL_FACE)
    this.gl.cullFace(this.gl.BACK)
    this.gl.enable(this.gl.DEPTH_TEST)
    this.gl.depthFunc(this.gl.LESS)
  }

  setSize(width: number, height: number): void {
    this.canvas.width = width
    this.canvas.height = height
    this.gl.viewport(0, 0, width, height)
  }

  setUniform(program: WebGLProgram, name: string, value: Uniform): void {
    const location = this.gl.getUniformLocation(program, name)
    if (location === -1) return

    if (typeof value === 'number') return this.gl.uniform1f(location, value)
    switch (value.length) {
      case 2:
        return this.gl.uniform2fv(location, value)
      case 3:
        return this.gl.uniform3fv(location, value)
      case 4:
        return this.gl.uniform4fv(location, value)
      case 9:
        return this.gl.uniformMatrix3fv(location, false, value)
      case 16:
        return this.gl.uniformMatrix4fv(location, false, value)
    }
  }

  compile(mesh: Mesh, camera?: Camera): Compiled {
    mesh.material.uniforms.modelMatrix = mesh.matrix

    if (camera) {
      mesh.material.uniforms.projectionMatrix = camera.projectionMatrix
      mesh.material.uniforms.viewMatrix = camera.viewMatrix
      mesh.material.uniforms.normalMatrix = mesh.normalMatrix
      mesh.material.uniforms.modelViewMatrix = mesh.modelViewMatrix

      mat4.copy(mesh.modelViewMatrix, camera.viewMatrix)
      mat4.multiply(mesh.modelViewMatrix, mesh.modelViewMatrix, mesh.matrix)

      mat4.copy(mesh.modelViewMatrix, camera.viewMatrix)
      mat4.multiply(mesh.modelViewMatrix, mesh.modelViewMatrix, mesh.matrix)
      mat3.normalFromMat4(mesh.normalMatrix, mesh.modelViewMatrix)
    }

    let compiled = this._compiled.get(mesh)
    if (!compiled) {
      const program = this.gl.createProgram()!
      const VAO = this.gl.createVertexArray()!

      const vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER)!
      this.gl.shaderSource(vertexShader, mesh.material.vertex)
      this.gl.compileShader(vertexShader)
      this.gl.attachShader(program, vertexShader)

      const fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER)!
      this.gl.shaderSource(fragmentShader, mesh.material.fragment)
      this.gl.compileShader(fragmentShader)
      this.gl.attachShader(program, fragmentShader)

      this.gl.linkProgram(program)

      // @ts-expect-error Only validate in development
      if (process.env.NODE_ENV === 'development') {
        for (const shader of [vertexShader, fragmentShader]) {
          const error = this.gl.getShaderInfoLog(shader)
          if (error) throw `Error compiling shader: ${error}\n${lineNumbers(this.gl.getShaderSource(shader)!)}`
        }

        const error = this.gl.getProgramInfoLog(program)
        if (error) throw `Error compiling program: ${this.gl.getProgramInfoLog(program)}`
      }

      this.gl.deleteShader(vertexShader)
      this.gl.deleteShader(fragmentShader)

      this.gl.bindVertexArray(VAO)

      for (const key in mesh.geometry.attributes) {
        const { data, size } = mesh.geometry.attributes[key]

        const buffer = this.gl.createBuffer()!
        const type = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER
        this.gl.bindBuffer(type, buffer)
        this.gl.bufferData(type, data, this.gl.STATIC_DRAW)

        const location = this.gl.getAttribLocation(program, key)
        if (location !== -1) {
          this.gl.enableVertexAttribArray(location)
          this.gl.vertexAttribPointer(location, size, this.gl.FLOAT, false, 0, 0)
        }
      }

      compiled = { program, VAO }
      this._compiled.set(mesh, compiled)
    }

    this.gl.bindVertexArray(compiled.VAO)
    this.gl.useProgram(compiled.program)

    for (const key in mesh.material.uniforms) this.setUniform(compiled.program, key, mesh.material.uniforms[key])

    return compiled
  }

  clear(bits = this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT) {
    this.gl.clear(bits)
  }

  render(scene: Object3D, camera?: Camera): void {
    if (this.autoClear) this.clear()

    camera?.updateMatrix()
    scene.updateMatrix()

    scene.traverse((node) => {
      if (!node.visible) return true
      if (!(node instanceof Mesh)) return

      this.compile(node, camera)

      const { index, position } = node.geometry.attributes
      if (index) this.gl.drawElements(this.gl.TRIANGLES, index.data.length / index.size, this.gl.UNSIGNED_INT, 0)
      else this.gl.drawArrays(this.gl.TRIANGLES, 0, position.data.length / position.size)
    })
  }
}