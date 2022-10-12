import { Vector2, Vector4 } from 'three'

const CreateMetaballMaterial = (NUM_METABALLS) => ({
  uniforms: {
    metaballs: {
      type: 'vec3',
      value: [new Vector4(0, 0, 100)]
    },
    resolution: { type: 'vec2', value: new Vector2(0, 0) },
    red: { type: 'f', value: 0.0 }
  },
  transparent: true,
  depthWrite: false,
  vertexShader: `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,

  fragmentShader: `
  precision highp float;
  uniform vec4 metaballs[${NUM_METABALLS}];
  uniform vec2 resolution;
  uniform float red;

  void main(){
      float x = gl_FragCoord.x - .5 * resolution.x;
      float y = -gl_FragCoord.y + .5 * resolution.y;
      float v = 0.0;
      float enabled = 1.0;
      #pragma unroll_loop_start
      for (int i = 0; i < ${NUM_METABALLS}; i++) {
          vec4 mb = metaballs[i];
          float dx = mb.x - x;
          float dy = mb.y - y;
          float r = mb.z;
          v += r*r/(dx*dx + dy*dy);
      }
      #pragma unroll_loop_end

      float a = smoothstep(0.97, 0.99, v);       
      gl_FragColor = vec4(red, 0.2, 0.6, a - 0.4);
  }
`
})

export default CreateMetaballMaterial
