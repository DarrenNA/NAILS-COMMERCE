import { createApp } from 'vue'
import routes from './router'
import store from './store'
import './index.css'
import App from './App.vue'
import router from './router'

createApp(App)
.use(store)
.use(router)
.mount('#app')
