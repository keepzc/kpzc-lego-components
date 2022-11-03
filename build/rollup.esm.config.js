import basicConfig, { name, file } from './rollup.config'
console.log(file)
export default {
    ...basicConfig,
    output: {
        name: name,
        file: file('esm'),
        format: 'es'
    }
};