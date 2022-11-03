import basicConfig,{name, file} from './rollup.config'

module.exports = {
    ...basicConfig,
    output: {
        name: name,
        file: file('umd'),
        format: 'umd'
    }
};