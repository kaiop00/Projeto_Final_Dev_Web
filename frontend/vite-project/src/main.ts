import { createApp } from 'vue'
import vue from 'vue'
import router from './router'
import './style.css'
// import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
const app = createApp(App)


app.use(router)

app.mount('#app')





 
// new vue({
//     render: h => h(App),
//     router
// }).$mount('#app')
