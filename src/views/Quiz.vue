<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { questions } from '../data/jsQuestions.js'
import { useHistoryStore } from '@/stores/HistoryStore.js'

const route = useRoute()
const topic = route.params.topic
const quizQuestions = questions[topic] || []

const currentIndex = ref(0)
const score = ref(0)
const selectedAnswer = ref('')
const showNext = ref(false)
const timeLeft = ref(300) // 5 minutes in seconds
const timerInterval = ref(null)
const isTimerActive = ref(true)

const currentQuestion = computed(() => quizQuestions[currentIndex.value])
const isQuizFinished = computed(() => currentIndex.value >= quizQuestions.length || timeLeft.value <= 0)

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
  const seconds = timeLeft.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const timerColor = computed(() => {
  if (timeLeft.value > 120) return 'text-green-400'
  if (timeLeft.value > 60) return 'text-yellow-400'
  return 'text-red-400'
})

const startTimer = () => {
  timerInterval.value = setInterval(() => {
    if (timeLeft.value > 0 && isTimerActive.value) {
      timeLeft.value--
    } else {
      clearInterval(timerInterval.value)
    }
  }, 1000)
}

const stopTimer = () => {
  isTimerActive.value = false
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})

function selectAnswer(option) {
  if (!showNext.value) {
    selectedAnswer.value = option
    if (option === currentQuestion.value.answer) {
      score.value++
    }
    showNext.value = true
  }
}

function nextQuestion() {
  currentIndex.value++
  selectedAnswer.value = null
  showNext.value = false
}

function restartQuiz() {
  currentIndex.value = 0
  score.value = 0
  selectedAnswer.value = null
  showNext.value = false
  timeLeft.value = 300
  isTimerActive.value = true
  startTimer()
}

const HistoryStore = useHistoryStore()
watch(isQuizFinished, (finished) => {
  if (finished) {
    stopTimer()
    const latestScore = { topic, score: score.value, total: quizQuestions.length }
    HistoryStore.arr.push(latestScore)
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- Quiz Header -->
    <div v-if="!isQuizFinished" class="glass-card p-6 mb-8">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {{ topic.toUpperCase() }} Quiz
        </h2>
        <div class="flex items-center space-x-6">
          <div class="text-right">
            <div class="text-sm text-gray-400">Time Remaining</div>
            <div :class="['text-2xl font-mono font-bold', timerColor]">
              {{ formattedTime }}
            </div>
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-400">Progress</div>
            <div class="text-xl font-bold text-cyan-400">
              {{ currentIndex + 1 }} / {{ quizQuestions.length }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Progress Bar -->
      <div class="w-full bg-gray-700 rounded-full h-2">
        <div 
          class="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          :style="{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }"
        ></div>
      </div>
    </div>

    <!-- Quiz Content -->
    <div v-if="!isQuizFinished" class="glass-card p-8">
      <div class="mb-8">
        <h3 class="text-xl font-mono text-white leading-relaxed">
          {{ currentQuestion.question }}
        </h3>
      </div>
      
      <div class="grid gap-4 mb-8">
        <div
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          @click="selectAnswer(option)"
          class="option-card"
          :class="getOptionClass(option)"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono">{{ option }}</span>
            <div v-if="showNext && selectedAnswer === option" class="flex items-center">
              <span v-if="option === currentQuestion.answer" class="text-green-400">✓</span>
              <span v-else class="text-red-400">✗</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Explanation and Next Button -->
      <div v-if="showNext" class="space-y-6">
        <div class="p-4 bg-gray-800/50 rounded-xl border border-gray-600">
          <h4 class="text-cyan-400 font-bold mb-2">Explanation:</h4>
          <p class="text-gray-300 font-mono text-sm leading-relaxed">
            {{ currentQuestion.explanation }}
          </p>
        </div>
        
        <div class="flex justify-end">
          <button 
            @click="nextQuestion" 
            class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
          >
            Next Question →
          </button>
        </div>
      </div>
    </div>

    <!-- Quiz Results -->
    <div v-else class="glass-card p-8 text-center">
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Quiz Complete!
        </h2>
        <div class="text-6xl mb-4">
          {{ timeLeft <= 0 ? '⏰' : '🎉' }}
        </div>
        <p v-if="timeLeft <= 0" class="text-red-400 font-mono mb-4">Time's up!</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="p-4 bg-gray-800/50 rounded-xl">
          <div class="text-2xl font-bold text-cyan-400">{{ topic.toUpperCase() }}</div>
          <div class="text-gray-400">Topic</div>
        </div>
        <div class="p-4 bg-gray-800/50 rounded-xl">
          <div class="text-2xl font-bold text-green-400">{{ score }} / {{ quizQuestions.length }}</div>
          <div class="text-gray-400">Score</div>
        </div>
        <div class="p-4 bg-gray-800/50 rounded-xl">
          <div class="text-2xl font-bold text-purple-400">{{ Math.round((score / quizQuestions.length) * 100) }}%</div>
          <div class="text-gray-400">Accuracy</div>
        </div>
      </div>
      
      <div class="flex justify-center gap-4">
        <button 
          @click="restartQuiz" 
          class="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
        >
          Try Again
        </button>
        <router-link 
          to="/history" 
          class="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 inline-block"
        >
          View History
        </router-link>
        <router-link 
          to="/" 
          class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 inline-block"
        >
          Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getOptionClass(option) {
      const baseClass = 'option-card cursor-pointer p-4 rounded-xl border transition-all duration-300 hover:scale-105'
      
      if (!this.showNext) {
        return `${baseClass} bg-gray-800/50 border-gray-600 hover:border-cyan-400 hover:bg-gray-700/50`
      }
      
      if (this.selectedAnswer === option) {
        if (option === this.currentQuestion.answer) {
          return `${baseClass} bg-green-500/20 border-green-400 text-green-400`
        } else {
          return `${baseClass} bg-red-500/20 border-red-400 text-red-400`
        }
      }
      
      if (option === this.currentQuestion.answer) {
        return `${baseClass} bg-green-500/20 border-green-400 text-green-400`
      }
      
      return `${baseClass} bg-gray-800/30 border-gray-600 text-gray-400`
    }
  }
}
</script>
