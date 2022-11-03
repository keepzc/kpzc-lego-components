import vue from 'rollup-plugin-vue'
import css  from 'rollup-plugin-css-only'
import  typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../package.json')
const { name } = config
const overrides ={
    compilerOptions: {
        declaration: true,
    },
    exclude:[
        "node_modules",
        "src/App.vue",
        "src/main.ts"
    ]
}
const file = type => `dist/${config.name}.${type}.js`
 
export { name, file }
 
export default {
    input: 'src/index.ts',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        typescript({ tsconfigOverride: overrides }),
        vue(),
        css({ output: 'bundle.css' })
    ],
    external: ['vue', 'lodash-es']
}