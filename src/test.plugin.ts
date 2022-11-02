import { App } from 'vue'
const plugins = {
    install:(app: App) => {
        app.config.globalProperties.$echo = () => {
            console.log('a plugins')
        }
        app.provide('test',{message:'from plugins'})
    }
}

export default plugins