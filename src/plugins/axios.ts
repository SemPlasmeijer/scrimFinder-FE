import type {App} from 'vue'
import axios from 'axios'

interface AxiosOptions {
    baseUrl?: string
    token?: string
}

export default {
    install: (app: App, options: AxiosOptions) => {
        app.config.globalProperties.$axios = axios.create({
            baseURL: options.baseUrl,
            headers: {
                Authorization: options.token ? `Bearer ${options.token}` : '',
            }
        })
    }
}