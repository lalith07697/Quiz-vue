<script setup>
import { ref, computed, watch, provide } from 'vue'
import questions from '../data/jsQuestions.js'
import { useHistoryStore } from '@/stores/counter.js'
const currentIndex = ref(0)
const score = ref(0)
const selectedAnswer = ref(null)
const showNext = ref(false)
const currentQuestion = computed(() => questions[currentIndex.value])
const isQuizFinished = computed(() => currentIndex.value >= questions.length)

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
}
const HistoryStore = useHistoryStore()
watch(isQuizFinished, (finished) => {
  if (finished) {
    const latestScore = { score: score.value, total: questions.length }
    HistoryStore.arr.push(('quizHistory',latestScore))
  }
})
// provide('quizHistory',arrHis)
</script>

<template>
  <div
    class="max-w-xl mx-auto p-4 bg-gradient-to-r from-orange-400 to-yellow-00 rounded shadow-2xl transition-all duration-600 ease"
  >
    <div v-if="questions.length - 1 >= currentIndex">
      <h2 class="text-xl font-bold font-mono mb-4">
        Question {{ currentIndex + 1 }}/{{ questions.length }}
      </h2>
    </div>
    <div v-if="!isQuizFinished">
      <p class="mb-4 font-mono">{{ currentQuestion.question }}</p>

      <div class="space-y-2">
        <button
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          @click="selectAnswer(option)"
          class="w-full bg-blue-100 font-mono text-black px-4 py-2 rounded text-left hover:bg-purple-600 hover:text-white hover:shadow-lg hover:scale-103 transform transition-all duration-300 ease-in-out"
        >
          {{ option }}
        </button>
      </div>
      <div v-if="showNext" class="flex justify-between mt-4 text-right">
        <span class="mr-4 text-center">{{ currentQuestion.explanation }}</span>
        <button @click="nextQuestion" class="css-button-gradient--9 ml-4 font-mono">Next</button>
      </div>
    </div>

    <div v-else class="mt-6 font-mono">
      <h3 class="text-lg font-bold">Quiz Finished</h3>
      <p>Your score: {{ score }} / {{ questions.length }}</p>
      <button @click="restartQuiz" class="mt-2 css-button-sliding-to-top--green">
        Try Again
      </button>
    </div>
  </div>
</template>

<style scoped>
.css-button-sliding-to-top--green {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  z-index: 0;
  background: #fff;
  overflow: hidden;
  border: 2px solid #57cc99;
  color: #57cc99;
}
.css-button-sliding-to-top--green:hover {
  color: #fff;
}
.css-button-sliding-to-top--green:hover:after {
  height: 100%;
}
.css-button-sliding-to-top--green:after {
  content: "";
  position: absolute;
  z-index: -1;
  transition: all 0.3s ease;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background: #57cc99;
}
.css-button-gradient--9 {
  min-width: 110px;
  height: 35px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  background-size: 120% auto;
  background-image: linear-gradient(315deg, #833ab4 0%, #fd1d1d 50%, #fcb045);
  padding-right: 24px;
  overflow: hidden;
}

.css-button-gradient--9:hover {
  padding-right: 24px;
  padding-left: 8px;
}

.css-button-gradient--9:after {
  content: '\00BB';
  position: absolute;
  opacity: 0;
  font-size: 20px;
  line-height: 35px;
  top: 0;
  right: -20px;
  transition: 0.4s;
}

.css-button-gradient--9:hover:after {
  opacity: 1;
  right: 10px;
}
</style>
