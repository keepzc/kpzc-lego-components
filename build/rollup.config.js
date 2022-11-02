
const vue = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const typescript = require('rollup-plugin-typescript2')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { name } = require('../package.json') 
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
const file = type => `dist/${name}.${type}.js`
exports.file = file
exports.name = name
module.exports = {
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