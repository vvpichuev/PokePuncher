import './assets/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import store from './stores/index.js'
const app = createApp(App)

app.use(store)

app.mount('#app')
