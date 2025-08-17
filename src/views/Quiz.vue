<!-- <script setup>
import { ref, computed, watch, provide } from 'vue'
import questions from '../data/jsQuestions.js'
import { useHistoryStore } from '@/stores/HistoryStore.js'
const currentIndex = ref(0)
const score = ref(0)
const selectedAnswer = ref('')
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
    HistoryStore.arr.push(('quizHistory', latestScore))
  }
})
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
        <div
          @click="selectAnswer(option)"
          :class="{
            'bg-purple-600 text-white': selectedAnswer === option,
            'bg-blue-100 text-black': selectedAnswer !== option,
          }"
          v-for="(option, index) in currentQuestion.options"
          class="flex items-center gap-2 w-full bg-blue-100 font-mono text-black px-4 py-2 rounded text-left hover:bg-purple-600 hover:text-white hover:shadow-lg hover:scale-103 transform transition-all duration-300 ease-in-out"
        >
          <input
            v-model="selectedAnswer"
            type="radio"
            name="answer"
            :value="option"
            :id="`option-${index}`"
          />
          <label :for="`option-${index}`" class="cursor-pointer">{{ option }}</label>
        </div>
      </div>
      <div v-if="showNext" class="flex justify-between mt-4 text-right">
        <span class="mr-4 text-center font-mono font-bold"
          ><span class="text-gray-500">Explanation:-</span> {{ currentQuestion.explanation }}</span
        >
        <button @click="nextQuestion" class="css-button-gradient--9 ml-4 font-mono">Next</button>
      </div>
    </div>

    <div v-else class="mt-6 font-mono">
      <h3 class="text-lg font-bold mb-2 text">Quiz Finished</h3>
      <p class="font-bold">Your score: {{ score }} / {{ questions.length }}</p>
      <div class="flex items-center justify-between">
        <div class="mt-4 flex flex-col gap-2">
          <button @click="restartQuiz" class="css-button-sliding-to-top--green">Try Again</button>
          <button>
            <a
              class="font-mono css-button-sliding-to-top--green"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              >Want to learn JS</a
            >
          </button>
        </div>
        <button class="mt-4">
          <router-link to="/history" class="css-button-sliding-to-top--green mt-4 font-mono"
            >View History</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.css-button-retro--green {
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
  border: 1px solid #585858;
  color: #fff;
  background: transparent;
  z-index: 0;
}
.css-button-retro--green:hover:after {
  top: 0;
  left: 0;
}
.css-button-retro--green:after {
  content: '';
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 5px;
  left: 5px;
  transition: 0.2s;
  background-color: #80ed99;
}
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
  content: '';
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
</style> -->

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { questions } from '../data/jsQuestions.js'
import { useHistoryStore } from '@/stores/HistoryStore.js'

const route = useRoute()
const topic = route.params.topic // get selected topic
const quizQuestions = questions[topic] || [] // load topic-based questions

const currentIndex = ref(0)
const score = ref(0)
const selectedAnswer = ref('')
const showNext = ref(false)

const currentQuestion = computed(() => quizQuestions[currentIndex.value])
const isQuizFinished = computed(() => currentIndex.value >= quizQuestions.length)

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
    const latestScore = { topic, score: score.value, total: quizQuestions.length }
    HistoryStore.arr.push(latestScore)
  }
})
</script>

<template>
  <div
    class="max-w-xl mx-auto p-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 rounded shadow-xl"
  >
    <h2 v-if="!isQuizFinished" class="text-xl font-bold mb-4 font-mono">
      {{ topic.toUpperCase() }} Quiz - Question {{ currentIndex + 1 }}/{{ quizQuestions.length }}
    </h2>

    <div v-if="!isQuizFinished">
      <p class="mb-4 font-mono">{{ currentQuestion.question }}</p>
      <div class="space-y-2">
        <div
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          @click="selectAnswer(option)"
          :class="{
            'bg-purple-600 text-white': selectedAnswer === option,
            'bg-blue-100 text-black': selectedAnswer !== option,
          }"
          class="cursor-pointer px-4 py-2 rounded font-mono hover:scale-105 transition-all"
        >
          {{ option }}
        </div>
      </div>

      <div v-if="showNext" class="flex justify-between mt-4 text-right">
        <span class="font-mono text-sm text-white"><span class="font-extrabold text-gray-800">Explanation:-</span> {{ currentQuestion.explanation }}</span>

        <button @click="nextQuestion" class="css-button-gradient--9 ml-6">Next</button>
      </div>
    </div>

    <div v-else class="mt-6 text-center font-mono">
      <span class="text-xl font-bold mb-2">Quiz Finished (</span><span class="">Topic: {{ topic }}</span>)
      <p class="font-bold">Your score: {{ score }} / {{ quizQuestions.length }}</p>
      <p class="">Percentage: {{ ((score / quizQuestions.length) * 100) }}%</p>
      <div class="flex justify-center gap-4 mt-4">
        <button @click="restartQuiz" class="css-button-sliding-to-top--green">Try Again</button>
        <router-link to="/history" class="css-button-sliding-to-top--green"
          >View History</router-link
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.css-button-retro--green {
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
  border: 1px solid #585858;
  color: #fff;
  background: transparent;
  z-index: 0;
}
.css-button-retro--green:hover:after {
  top: 0;
  left: 0;
}
.css-button-retro--green:after {
  content: '';
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 5px;
  left: 5px;
  transition: 0.2s;
  background-color: #80ed99;
}
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
  content: '';
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
