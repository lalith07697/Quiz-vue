import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const storedUser = localStorage.getItem('quizUser')
  const user = ref(storedUser ? JSON.parse(storedUser) : null)
  const isAuthenticated = ref(!!storedUser)

  watch(
    user,
    (newUser) => {
      if (newUser) {
        localStorage.setItem('quizUser', JSON.stringify(newUser))
        isAuthenticated.value = true
      } else {
        localStorage.removeItem('quizUser')
        isAuthenticated.value = false
      }
    },
    { deep: true }
  )

  const login = (userData) => {
    user.value = {
      name: userData.name,
      loginTime: new Date().toISOString()
    }
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
})