import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import axios from './plugins/axios'

const app = createApp(App)

app.use(router)
app.use(axios, {
    baseUrl: 'http://localhost:8082/',
    //timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
})



app.mount('#app')
