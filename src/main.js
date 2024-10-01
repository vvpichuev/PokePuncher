import './assets/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import store from './stores/index.js'
import router from './router/index.js'
const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
