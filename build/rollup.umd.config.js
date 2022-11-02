const basicConfig = require('./rollup.config')

module.exports = {
    ...basicConfig,
    output: {
        name: basicConfig.name,
        file: basicConfig.file('umd'),
        format: 'umd'
    }
};