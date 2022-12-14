import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { userStore } from './stores/user'

import App from './App.vue'
import router from './router'
import { api } from './baseConfig'

import './assets/main.css'

api.interceptors.response.use(response => response, error => {
    const { response } = error
    if (response) {
      if (response.status === 403) {
        router.replace('/forbiden')
      } else if (response.status === 404) {
        router.replace('/notfound')
      } 
    }
    return Promise.reject(error)
});
  
router.beforeEach((to, from) => {
if(to.meta.requiresAdmin) {
    const store = userStore()
    if(!store.isAdmin) {
    return '/'
    }
}
})


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
