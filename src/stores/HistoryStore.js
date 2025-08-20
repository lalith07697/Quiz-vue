// import { ref } from 'vue'
// import { defineStore } from 'pinia'

// export const useHistoryStore = defineStore('history', () => {
//   const arr = ref([])
//   return {arr}
// })

import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', () => {
  const storedData = localStorage.getItem('historyArr')
  const arr = ref(storedData ? JSON.parse(storedData) : [])

  watch(
    arr,
    (newVal) => {
      localStorage.setItem('historyArr', JSON.stringify(newVal))
    },
    { deep: true },
  )

  return { arr }
})
