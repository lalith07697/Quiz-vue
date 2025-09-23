<script setup>
import { useHistoryStore } from '@/stores/HistoryStore'
const history = useHistoryStore()

function getResultFeedback(score, total) {
  const percentage = (score / total) * 100
  if (percentage === 100) return { label: 'Perfect!', color: 'text-green-400', emoji: '🏆' }
  if (percentage >= 80) return { label: 'Great Job!', color: 'text-blue-400', emoji: '🎉' }
  if (percentage >= 50) return { label: 'Not Bad!', color: 'text-yellow-400', emoji: '👍' }
  if (percentage > 0) return { label: 'Keep Practicing!', color: 'text-orange-400', emoji: '💪' }
  return { label: 'Try Again!', color: 'text-red-400', emoji: '🔄' }
}

function clearHistory() {
  history.arr = []
  localStorage.removeItem('historyArr')
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        📜 Quiz History
      </h2>
      <p class="text-gray-400 font-mono">Track your progress and achievements</p>
    </div>

    <div v-if="history.arr.length" class="space-y-6">
      <div
        v-for="(item, index) in history.arr"
        :key="index"
        class="glass-card p-6 hover:scale-105 transition-all duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div class="flex items-center space-x-4">
            <div class="text-3xl">{{ getResultFeedback(item.score, item.total).emoji }}</div>
            <div>
              <h3 class="text-xl font-bold text-white capitalize">{{ item.topic }}</h3>
              <p :class="['font-semibold', getResultFeedback(item.score, item.total).color]">
                {{ getResultFeedback(item.score, item.total).label }}
              </p>
            </div>
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-cyan-400">{{ item.score }} / {{ item.total }}</div>
            <div class="text-sm text-gray-400">Score</div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div class="p-3 bg-gray-800/50 rounded-lg">
            <div class="text-lg font-bold text-purple-400">{{ Math.round((item.score / item.total) * 100) }}%</div>
            <div class="text-xs text-gray-400">Accuracy</div>
          </div>
          <div class="p-3 bg-gray-800/50 rounded-lg">
            <div class="text-lg font-bold text-green-400">{{ item.total }}</div>
            <div class="text-xs text-gray-400">Questions</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="glass-card p-12 text-center">
      <div class="text-6xl mb-4">📊</div>
      <h3 class="text-2xl font-bold text-gray-300 mb-2">No Quiz History Yet</h3>
      <p class="text-gray-400 font-mono mb-6">Start taking quizzes to see your progress here!</p>
      <router-link
        to="/"
        class="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
      >
        Take Your First Quiz
      </router-link>
    </div>

    <div class="flex justify-between items-center mt-8" v-if="history.arr.length">
      <router-link
        to="/"
        class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
      >
        Take Another Quiz
      </router-link>
      <button
        @click="clearHistory"
        class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
      >
        Clear History
      </button>
    </div>
  </div>
</template>
