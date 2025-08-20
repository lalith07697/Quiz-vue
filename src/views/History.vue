<script setup>
import { useHistoryStore } from '@/stores/HistoryStore'
const history = useHistoryStore()

function getResultFeedback(score, total) {
  const percentage = (score / total) * 100
  if (percentage === 100) return { emoji: '🏆', label: 'Perfect!' }
  if (percentage >= 80) return { emoji: '🎉', label: 'Great Job!' }
  if (percentage >= 50) return { emoji: '😊', label: 'Not Bad!' }
  if (percentage > 0) return { emoji: '🤔', label: 'Keep Practicing!' }
  return { emoji: '😴', label: 'Try Again!' }
}

function clearHistory() {
  history.arr = []
  localStorage.removeItem('quizHistory')
}
</script>

<template>
  <div class="max-w-xl mx-auto p-4 font-mono">
    <h2 class="text-2xl font-bold mb-6 text-center">📜 Quiz History</h2>

    <div v-if="history.arr.length" class="grid gap-4">
      <div
        v-for="(item, index) in history.arr"
        :key="index"
        class="p-4 rounded-xl shadow-md bg-gradient-to-r from-indigo-100 to-purple-100 hover:scale-105 transition"
      >
        <div class="flex justify-between items-center">
          <span class="text-3xl">{{ getResultFeedback(item.score, item.total).emoji }}</span>
          <span class="text-lg font-bold text-black">{{ item.score }} / {{ item.total }}</span>
        </div>
        <p class="text-gray-700 font-bold mt-2">Topic: {{ item.topic }}</p>
        <p class="text-sm text-gray-600">{{ getResultFeedback(item.score, item.total).label }}</p>
      </div>
    </div>

    <p v-else class="text-center font-extrabold text-gray-200">No quiz attempts yet!!</p>

    <div class="flex justify-end" v-if="history.arr.length">
      <button
        @click="clearHistory"
        class="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-xl shadow-lg hover:bg-red-600 transition-all"
      >
        Clear History
      </button>
    </div>

    <router-link
      to="/"
      class="mt-4 inline-block px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-1000 ease-in-out"
    >
      Start a New Quiz
    </router-link>
  </div>
</template>
