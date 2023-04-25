import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/service/http';

export const userAuth = defineStore('auth', () => {
  const token = ref(localStorage.getItem('jwt'));
  const user = ref(localStorage.getItem('user'));

  function setToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
    token.value = tokenValue;
  }
  function setuser(userValue: any) {
    localStorage.setItem('user', JSON.stringify(userValue));
    user.value = userValue;
  }

  // async function checkToken(){
  //   try {
  //     const tokenAtuth = 'Bearer ' + token;
  //     const { data } = await api.get("/auth/local/callback")
  //     console.log('data', data)
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return {
    setToken,
    setuser,
    token,
    user,
  }
})
