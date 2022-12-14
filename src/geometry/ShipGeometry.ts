import { Geometry } from '../four'

export class ShipGeometry extends Geometry {
  constructor() {
    super({
      position: {
        size: 3,
        data: new Float32Array([
          0, -0.2, -1.34, 0.07, -0.24, -0.88, -0.07, -0.24, -0.88, 0, -0.2, -1.34, -0.07, -0.24, -0.88, -0.07, -0.06,
          -0.88, 0, -0.2, -1.34, -0.07, -0.06, -0.88, 0.07, -0.06, -0.88, 0, -0.2, -1.34, 0.07, -0.06, -0.88, 0.07,
          -0.24, -0.88, -0.25, -0.24, 0.35, 0.25, -0.24, 0.35, 0.08, -0.09, 1.04, -0.25, -0.24, 0.35, 0.08, -0.09, 1.04,
          -0.08, -0.09, 1.04, 0.25, 0.07, -0.18, 0.28, 0.15, 0.08, 0.29, -0.13, 0.08, -0.18, 0.21, 0.08, -0.25, 0.21,
          0.35, 0.25, 0.21, 0.35, -0.18, 0.21, 0.08, 0.25, 0.21, 0.35, 0.18, 0.21, 0.08, -0.25, 0.07, -0.18, -0.07,
          -0.06, -0.88, -0.07, -0.24, -0.88, -0.2, -0.19, -0.18, -0.07, -0.24, -0.88, 0.07, -0.24, -0.88, -0.2, -0.19,
          -0.18, 0.07, -0.24, -0.88, 0.2, -0.19, -0.18, -0.17, 0.2, -0.18, 0.17, 0.2, -0.18, 0.15, 0.18, -0.27, -0.17,
          0.2, -0.18, 0.15, 0.18, -0.27, -0.15, 0.18, -0.27, 0.08, 0.06, 1.04, 0.08, -0.09, 1.04, 0.14, -0.03, 0.86,
          0.08, 0.06, 1.04, 0.14, -0.03, 0.86, 0.14, 0.01, 0.86, 0.25, -0.24, 0.35, 0.3, -0.15, 0.35, 0.14, -0.03, 0.86,
          0.25, -0.24, 0.35, 0.33, -0.13, 0.27, 0.3, -0.15, 0.35, 0.28, 0.15, 0.08, 0.33, 0.1, 0.27, 0.33, -0.13, 0.27,
          0.28, 0.15, 0.08, 0.25, 0.21, 0.35, 0.33, 0.1, 0.27, 0.25, 0.21, 0.35, 0.08, 0.06, 1.04, 0.14, 0.01, 0.86,
          -0.08, -0.09, 1.04, -0.08, 0.06, 1.04, -0.14, 0.01, 0.86, -0.08, -0.09, 1.04, -0.14, 0.01, 0.86, -0.14, -0.03,
          0.86, -0.25, 0.21, 0.35, -0.3, 0.12, 0.35, -0.14, 0.01, 0.86, -0.25, 0.21, 0.35, -0.28, 0.15, 0.08, -0.33,
          0.1, 0.27, -0.28, 0.15, 0.08, -0.29, -0.13, 0.08, -0.33, -0.13, 0.27, -0.29, -0.13, 0.08, -0.25, -0.24, 0.35,
          -0.33, -0.13, 0.27, -0.25, -0.24, 0.35, -0.08, -0.09, 1.04, -0.14, -0.03, 0.86, 0.14, 0.01, 0.86, 0.14, -0.03,
          0.86, 0.41, -0.03, 1.04, 0.14, 0.01, 0.86, 0.41, -0.03, 1.04, 0.41, 0.01, 1.04, 0.14, -0.03, 0.86, 0.3, -0.15,
          0.35, 0.54, -0.15, 0.53, 0.14, -0.03, 0.86, 0.54, -0.15, 0.53, 0.41, -0.03, 1.04, 0.33, -0.13, 0.27, 0.53,
          -0.07, 0.45, 0.54, -0.15, 0.53, 0.33, -0.13, 0.27, 0.33, 0.1, 0.27, 0.53, 0.04, 0.45, 0.33, -0.13, 0.27, 0.53,
          0.04, 0.45, 0.53, -0.07, 0.45, 0.33, 0.1, 0.27, 0.3, 0.12, 0.35, 0.54, 0.12, 0.53, 0.3, 0.12, 0.35, 0.14,
          0.01, 0.86, 0.41, 0.01, 1.04, 0.3, 0.12, 0.35, 0.41, 0.01, 1.04, 0.54, 0.12, 0.53, -0.14, -0.03, 0.86, -0.14,
          0.01, 0.86, -0.41, 0.01, 1.04, -0.14, -0.03, 0.86, -0.41, 0.01, 1.04, -0.41, -0.03, 1.04, -0.14, 0.01, 0.86,
          -0.3, 0.12, 0.35, -0.54, 0.12, 0.53, -0.14, 0.01, 0.86, -0.54, 0.12, 0.53, -0.41, 0.01, 1.04, -0.3, 0.12,
          0.35, -0.33, 0.1, 0.27, -0.54, 0.12, 0.53, -0.33, 0.1, 0.27, -0.33, -0.13, 0.27, -0.53, -0.07, 0.45, -0.33,
          0.1, 0.27, -0.53, -0.07, 0.45, -0.53, 0.04, 0.45, -0.33, -0.13, 0.27, -0.54, -0.15, 0.53, -0.53, -0.07, 0.45,
          -0.3, -0.15, 0.35, -0.14, -0.03, 0.86, -0.41, -0.03, 1.04, -0.3, -0.15, 0.35, -0.41, -0.03, 1.04, -0.54,
          -0.15, 0.53, 0.18, 0.21, 0.08, 0.25, 0.07, -0.18, 0.17, 0.2, -0.18, 0.25, 0.07, -0.18, 0.07, -0.06, -0.88,
          0.15, 0.18, -0.27, -0.15, 0.18, -0.27, 0.15, 0.18, -0.27, 0.07, -0.06, -0.88, -0.15, 0.18, -0.27, 0.07, -0.06,
          -0.88, -0.07, -0.06, -0.88, -0.25, 0.07, -0.18, -0.18, 0.21, 0.08, -0.17, 0.2, -0.18, -0.18, 0.21, 0.08, 0.18,
          0.21, 0.08, 0.17, 0.2, -0.18, -0.18, 0.21, 0.08, 0.17, 0.2, -0.18, -0.17, 0.2, -0.18, 0.03, -0.04, 1.04, 0.03,
          0.02, 1.04, -0.03, 0.02, 1.04, 0.03, -0.04, 1.04, -0.03, 0.02, 1.04, -0.03, -0.04, 1.04, 0.28, 0.15, 0.08,
          0.18, 0.21, 0.08, 0.25, 0.21, 0.35, -0.28, 0.15, 0.08, -0.25, 0.21, 0.35, -0.18, 0.21, 0.08, 0.53, -0.07,
          0.45, 0.53, 0.04, 0.45, 0.54, 0.12, 0.53, 0.53, -0.07, 0.45, 0.54, 0.12, 0.53, 0.54, -0.15, 0.53, -0.54,
          -0.15, 0.53, -0.54, 0.12, 0.53, -0.53, 0.04, 0.45, -0.54, -0.15, 0.53, -0.53, 0.04, 0.45, -0.53, -0.07, 0.45,
          0.41, 0.01, 1.04, 0.41, -0.03, 1.04, 0.54, -0.03, 1.08, 0.41, 0.01, 1.04, 0.54, -0.03, 1.08, 0.54, 0.01, 1.08,
          -0.41, -0.03, 1.04, -0.41, 0.01, 1.04, -0.54, 0.01, 1.08, -0.41, -0.03, 1.04, -0.54, 0.01, 1.08, -0.54, -0.03,
          1.08, 0.54, 0.01, 1.08, 0.54, 0.12, 0.53, 0.41, 0.01, 1.04, -0.41, 0.01, 1.04, -0.54, 0.12, 0.53, -0.54, 0.01,
          1.08, -0.41, -0.03, 1.04, -0.54, -0.03, 1.08, -0.54, -0.15, 0.53, 0.54, -0.03, 1.08, 0.41, -0.03, 1.04, 0.54,
          -0.15, 0.53, 1.26, -0.03, 1.07, 1.26, -0, 1.07, 1.26, -0.01, 1.12, 1.26, -0.03, 1.07, 1.26, -0.01, 1.12, 1.26,
          -0.02, 1.12, -1.26, -0.01, 1.12, -1.26, -0, 1.07, -1.26, -0.03, 1.07, -1.26, -0.01, 1.12, -1.26, -0.03, 1.07,
          -1.26, -0.02, 1.12, 0.54, -0.03, 1.08, 0.54, -0.15, 0.53, 1.02, -0.06, 0.91, 0.54, -0.03, 1.08, 1.02, -0.06,
          0.91, 1.02, -0.02, 1.11, 0.58, -0.12, 0.49, 0.58, 0.09, 0.49, 1, 0.02, 0.82, 0.58, -0.12, 0.49, 1, 0.02, 0.82,
          1, -0.04, 0.82, 0.54, 0.12, 0.53, 0.54, 0.01, 1.08, 1.02, -0.01, 1.11, 0.54, 0.12, 0.53, 1.02, -0.01, 1.11,
          1.02, 0.04, 0.91, 0.54, 0.01, 1.08, 0.54, -0.03, 1.08, 1.02, -0.02, 1.11, 0.54, 0.01, 1.08, 1.02, -0.02, 1.11,
          1.02, -0.01, 1.11, -0.54, -0.03, 1.08, -0.54, 0.01, 1.08, -1.02, -0.01, 1.11, -0.54, -0.03, 1.08, -1.02,
          -0.01, 1.11, -1.02, -0.02, 1.11, -0.54, 0.01, 1.08, -0.54, 0.12, 0.53, -1.02, 0.04, 0.91, -0.54, 0.01, 1.08,
          -1.02, 0.04, 0.91, -1.02, -0.01, 1.11, -0.58, 0.09, 0.49, -0.58, -0.12, 0.49, -1, -0.04, 0.82, -0.58, 0.09,
          0.49, -1, -0.04, 0.82, -1, 0.02, 0.82, -0.54, -0.15, 0.53, -0.54, -0.03, 1.08, -1.02, -0.02, 1.11, -0.54,
          -0.15, 0.53, -1.02, -0.02, 1.11, -1.02, -0.06, 0.91, 1.02, -0.02, 1.11, 1.02, -0.06, 0.91, 1.26, -0.03, 1.07,
          1.02, -0.02, 1.11, 1.26, -0.03, 1.07, 1.26, -0.02, 1.12, 1.05, -0.03, 0.86, 1.05, 0.01, 0.86, 1.24, -0.01,
          0.99, 1.02, 0.04, 0.91, 1.02, -0.01, 1.11, 1.26, -0.01, 1.12, 1.02, 0.04, 0.91, 1.26, -0.01, 1.12, 1.26, -0,
          1.07, 1.02, -0.01, 1.11, 1.02, -0.02, 1.11, 1.26, -0.02, 1.12, 1.02, -0.01, 1.11, 1.26, -0.02, 1.12, 1.26,
          -0.01, 1.12, -1.02, -0.02, 1.11, -1.02, -0.01, 1.11, -1.26, -0.01, 1.12, -1.02, -0.02, 1.11, -1.26, -0.01,
          1.12, -1.26, -0.02, 1.12, -1.02, -0.01, 1.11, -1.02, 0.04, 0.91, -1.26, -0, 1.07, -1.02, -0.01, 1.11, -1.26,
          -0, 1.07, -1.26, -0.01, 1.12, -1.05, 0.01, 0.86, -1.05, -0.03, 0.86, -1.24, -0.01, 0.99, -1.02, -0.06, 0.91,
          -1.02, -0.02, 1.11, -1.26, -0.02, 1.12, -1.02, -0.06, 0.91, -1.26, -0.02, 1.12, -1.26, -0.03, 1.07, -0.08,
          -0.09, 1.04, 0.08, -0.09, 1.04, 0.06, -0.07, 1.1, -0.08, -0.09, 1.04, 0.06, -0.07, 1.1, -0.06, -0.07, 1.1,
          0.08, -0.09, 1.04, 0.08, 0.06, 1.04, 0.06, 0.04, 1.1, 0.08, -0.09, 1.04, 0.06, 0.04, 1.1, 0.06, -0.07, 1.1,
          0.08, 0.06, 1.04, -0.08, 0.06, 1.04, -0.06, 0.04, 1.1, 0.08, 0.06, 1.04, -0.06, 0.04, 1.1, 0.06, 0.04, 1.1,
          -0.08, 0.06, 1.04, -0.08, -0.09, 1.04, -0.06, -0.07, 1.1, -0.08, 0.06, 1.04, -0.06, -0.07, 1.1, -0.06, 0.04,
          1.1, -0.06, -0.07, 1.1, 0.06, -0.07, 1.1, 0.04, -0.05, 1.1, -0.06, -0.07, 1.1, 0.04, -0.05, 1.1, -0.04, -0.05,
          1.1, 0.06, -0.07, 1.1, 0.06, 0.04, 1.1, 0.04, 0.02, 1.1, 0.06, -0.07, 1.1, 0.04, 0.02, 1.1, 0.04, -0.05, 1.1,
          0.06, 0.04, 1.1, -0.06, 0.04, 1.1, -0.04, 0.02, 1.1, 0.06, 0.04, 1.1, -0.04, 0.02, 1.1, 0.04, 0.02, 1.1,
          -0.06, 0.04, 1.1, -0.06, -0.07, 1.1, -0.04, -0.05, 1.1, -0.06, 0.04, 1.1, -0.04, -0.05, 1.1, -0.04, 0.02, 1.1,
          -0.04, -0.05, 1.1, 0.04, -0.05, 1.1, 0.03, -0.04, 1.04, -0.04, -0.05, 1.1, 0.03, -0.04, 1.04, -0.03, -0.04,
          1.04, 0.04, -0.05, 1.1, 0.04, 0.02, 1.1, 0.03, 0.02, 1.04, 0.04, -0.05, 1.1, 0.03, 0.02, 1.04, 0.03, -0.04,
          1.04, 0.04, 0.02, 1.1, -0.04, 0.02, 1.1, -0.03, 0.02, 1.04, 0.04, 0.02, 1.1, -0.03, 0.02, 1.04, 0.03, 0.02,
          1.04, -0.04, 0.02, 1.1, -0.04, -0.05, 1.1, -0.03, -0.04, 1.04, -0.04, 0.02, 1.1, -0.03, -0.04, 1.04, -0.03,
          0.02, 1.04, -0.22, -0.27, 0.07, 0.22, -0.27, 0.07, 0.25, -0.24, 0.35, -0.22, -0.27, 0.07, 0.25, -0.24, 0.35,
          -0.25, -0.24, 0.35, -0.07, -0.06, -0.88, -0.25, 0.07, -0.18, -0.15, 0.18, -0.27, -0.33, 0.1, 0.27, -0.53,
          0.04, 0.45, -0.54, 0.12, 0.53, -0.33, -0.13, 0.27, -0.3, -0.15, 0.35, -0.54, -0.15, 0.53, 0.54, 0.12, 0.53,
          0.53, 0.04, 0.45, 0.33, 0.1, 0.27, 0.54, -0.15, 0.53, 0.3, -0.15, 0.35, 0.33, -0.13, 0.27, -0.29, -0.13, 0.08,
          -0.28, 0.15, 0.08, -0.25, 0.07, -0.18, 0.07, -0.24, -0.88, 0.07, -0.06, -0.88, 0.25, 0.07, -0.18, 0.25, 0.07,
          -0.18, 0.15, 0.18, -0.27, 0.17, 0.2, -0.18, -0.17, 0.2, -0.18, -0.15, 0.18, -0.27, -0.25, 0.07, -0.18, -0.05,
          0.13, 0.91, 0.05, 0.13, 0.91, 0.15, 0.22, 0.48, -0.05, 0.13, 0.91, 0.15, 0.22, 0.48, -0.15, 0.22, 0.48, -0.28,
          0.33, 1.14, -0.23, 0.29, 1.34, -0.22, 0.31, 1.3, -0.28, 0.33, 1.14, -0.22, 0.31, 1.3, -0.25, 0.33, 1.18,
          -0.08, 0.06, 1.04, 0.08, 0.06, 1.04, 0.05, 0.13, 0.91, -0.08, 0.06, 1.04, 0.05, 0.13, 0.91, -0.05, 0.13, 0.91,
          0.23, 0.29, 1.34, 0.28, 0.33, 1.14, 0.25, 0.33, 1.18, 0.23, 0.29, 1.34, 0.25, 0.33, 1.18, 0.22, 0.31, 1.3,
          0.25, 0.21, 0.35, -0.25, 0.21, 0.35, -0.15, 0.22, 0.48, 0.25, 0.21, 0.35, -0.15, 0.22, 0.48, 0.15, 0.22, 0.48,
          0.29, -0.13, 0.08, 0.25, -0.24, 0.35, 0.31, -0.33, 0.17, 0.25, -0.24, 0.35, 0.22, -0.27, 0.07, 0.31, -0.33,
          0.17, -0.29, -0.13, 0.08, -0.2, -0.19, -0.18, -0.31, -0.33, 0.01, -0.25, -0.24, 0.35, -0.29, -0.13, 0.08,
          -0.31, -0.33, 0.17, -0.25, 0.21, 0.35, -0.08, 0.06, 1.04, -0.23, 0.29, 1.34, -0.25, 0.21, 0.35, -0.23, 0.29,
          1.34, -0.28, 0.33, 1.14, -0.08, 0.06, 1.04, -0.05, 0.13, 0.91, -0.22, 0.31, 1.3, -0.08, 0.06, 1.04, -0.22,
          0.31, 1.3, -0.23, 0.29, 1.34, -0.05, 0.13, 0.91, -0.15, 0.22, 0.48, -0.25, 0.33, 1.18, -0.05, 0.13, 0.91,
          -0.25, 0.33, 1.18, -0.22, 0.31, 1.3, -0.15, 0.22, 0.48, -0.25, 0.21, 0.35, -0.28, 0.33, 1.14, -0.15, 0.22,
          0.48, -0.28, 0.33, 1.14, -0.25, 0.33, 1.18, 0.08, 0.06, 1.04, 0.25, 0.21, 0.35, 0.28, 0.33, 1.14, 0.08, 0.06,
          1.04, 0.28, 0.33, 1.14, 0.23, 0.29, 1.34, 0.25, 0.21, 0.35, 0.15, 0.22, 0.48, 0.25, 0.33, 1.18, 0.25, 0.21,
          0.35, 0.25, 0.33, 1.18, 0.28, 0.33, 1.14, 0.15, 0.22, 0.48, 0.05, 0.13, 0.91, 0.22, 0.31, 1.3, 0.15, 0.22,
          0.48, 0.22, 0.31, 1.3, 0.25, 0.33, 1.18, 0.05, 0.13, 0.91, 0.08, 0.06, 1.04, 0.23, 0.29, 1.34, 0.05, 0.13,
          0.91, 0.23, 0.29, 1.34, 0.22, 0.31, 1.3, 0.28, 0.15, 0.08, 0.25, 0.07, -0.18, 0.18, 0.21, 0.08, -0.18, 0.21,
          0.08, -0.25, 0.07, -0.18, -0.28, 0.15, 0.08, -0.14, 0.01, 0.86, -0.08, 0.06, 1.04, -0.25, 0.21, 0.35, 0.14,
          0.01, 0.86, 0.3, 0.12, 0.35, 0.25, 0.21, 0.35, -0.33, 0.1, 0.27, -0.3, 0.12, 0.35, -0.25, 0.21, 0.35, 0.25,
          0.21, 0.35, 0.3, 0.12, 0.35, 0.33, 0.1, 0.27, 0.14, -0.03, 0.86, 0.08, -0.09, 1.04, 0.25, -0.24, 0.35, -0.14,
          -0.03, 0.86, -0.3, -0.15, 0.35, -0.25, -0.24, 0.35, -0.25, -0.24, 0.35, -0.3, -0.15, 0.35, -0.33, -0.13, 0.27,
          0.25, -0.24, 0.35, 0.29, -0.13, 0.08, 0.33, -0.13, 0.27, 0.54, -0.15, 0.53, 0.54, 0.12, 0.53, 0.58, 0.09,
          0.49, 0.54, -0.15, 0.53, 0.58, 0.09, 0.49, 0.58, -0.12, 0.49, 0.54, 0.12, 0.53, 1.02, 0.04, 0.91, 1, 0.02,
          0.82, 0.54, 0.12, 0.53, 1, 0.02, 0.82, 0.58, 0.09, 0.49, 1.02, 0.04, 0.91, 1.02, -0.06, 0.91, 1, -0.04, 0.82,
          1.02, 0.04, 0.91, 1, -0.04, 0.82, 1, 0.02, 0.82, 1.02, -0.06, 0.91, 0.54, -0.15, 0.53, 0.58, -0.12, 0.49,
          1.02, -0.06, 0.91, 0.58, -0.12, 0.49, 1, -0.04, 0.82, -0.54, 0.12, 0.53, -0.54, -0.15, 0.53, -0.58, -0.12,
          0.49, -0.54, 0.12, 0.53, -0.58, -0.12, 0.49, -0.58, 0.09, 0.49, -0.54, -0.15, 0.53, -1.02, -0.06, 0.91, -1,
          -0.04, 0.82, -0.54, -0.15, 0.53, -1, -0.04, 0.82, -0.58, -0.12, 0.49, -1.02, -0.06, 0.91, -1.02, 0.04, 0.91,
          -1, 0.02, 0.82, -1.02, -0.06, 0.91, -1, 0.02, 0.82, -1, -0.04, 0.82, -1.02, 0.04, 0.91, -0.54, 0.12, 0.53,
          -0.58, 0.09, 0.49, -1.02, 0.04, 0.91, -0.58, 0.09, 0.49, -1, 0.02, 0.82, 1.02, -0.06, 0.91, 1.02, 0.04, 0.91,
          1.05, 0.01, 0.86, 1.02, -0.06, 0.91, 1.05, 0.01, 0.86, 1.05, -0.03, 0.86, 1.02, 0.04, 0.91, 1.26, -0, 1.07,
          1.24, -0.01, 0.99, 1.02, 0.04, 0.91, 1.24, -0.01, 0.99, 1.05, 0.01, 0.86, 1.26, -0, 1.07, 1.26, -0.03, 1.07,
          1.24, -0.01, 0.99, 1.26, -0.03, 1.07, 1.02, -0.06, 0.91, 1.05, -0.03, 0.86, 1.26, -0.03, 1.07, 1.05, -0.03,
          0.86, 1.24, -0.01, 0.99, -1.02, 0.04, 0.91, -1.02, -0.06, 0.91, -1.05, -0.03, 0.86, -1.02, 0.04, 0.91, -1.05,
          -0.03, 0.86, -1.05, 0.01, 0.86, -1.02, -0.06, 0.91, -1.26, -0.03, 1.07, -1.24, -0.01, 0.99, -1.02, -0.06,
          0.91, -1.24, -0.01, 0.99, -1.05, -0.03, 0.86, -1.26, -0.03, 1.07, -1.26, -0, 1.07, -1.24, -0.01, 0.99, -1.26,
          -0, 1.07, -1.02, 0.04, 0.91, -1.05, 0.01, 0.86, -1.26, -0, 1.07, -1.05, 0.01, 0.86, -1.24, -0.01, 0.99, -0.2,
          -0.19, -0.18, 0.2, -0.19, -0.18, 0.22, -0.27, 0.07, -0.2, -0.19, -0.18, 0.22, -0.27, 0.07, -0.22, -0.27, 0.07,
          -0.22, -0.27, 0.07, -0.25, -0.24, 0.35, -0.31, -0.33, 0.17, 0.25, 0.07, -0.18, 0.2, -0.19, -0.18, 0.07, -0.24,
          -0.88, -0.07, -0.24, -0.88, -0.2, -0.19, -0.18, -0.25, 0.07, -0.18, 0.29, -0.13, 0.08, 0.2, -0.19, -0.18,
          0.25, 0.07, -0.18, -0.25, 0.07, -0.18, -0.2, -0.19, -0.18, -0.29, -0.13, 0.08, 0.31, -0.33, 0.01, 0.2, -0.19,
          -0.18, 0.29, -0.13, 0.08, 0.29, -0.13, 0.08, 0.31, -0.33, 0.17, 0.31, -0.33, 0.01, 0.22, -0.27, 0.07, 0.2,
          -0.19, -0.18, 0.31, -0.33, 0.01, -0.31, -0.33, 0.01, -0.2, -0.19, -0.18, -0.22, -0.27, 0.07, -0.31, -0.33,
          0.01, -0.22, -0.27, 0.07, -0.31, -0.33, 0.17, 0.31, -0.33, 0.17, 0.22, -0.27, 0.07, 0.31, -0.33, 0.01, -0.31,
          -0.33, 0.17, -0.29, -0.13, 0.08, -0.31, -0.33, 0.01, 0.33, -0.13, 0.27, 0.29, -0.13, 0.08, 0.28, 0.15, 0.08,
          -0.33, -0.13, 0.27, -0.33, 0.1, 0.27, -0.28, 0.15, 0.08,
        ]),
      },
    })
  }
}
