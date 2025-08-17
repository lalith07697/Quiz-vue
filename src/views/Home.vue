<template>
  <div class="text-center h-auto">
    <h2 class="text-3xl font-mono font-bold mb-4">Welcome to the Quiz App!</h2>
    <div class="text-center">
      <h1 class="font-mono font-bold text-2xl mb-4">Instructions:</h1>
      <p class="max-w-xl mx-auto mb-6 font-mono text-gray-600 dark:text-gray-300">
        Test your knowledge with quick multiple-choice questions. Select the correct option to score
        points. Explanations are provided after you choose an answer. Your results (score) are saved
        to view later!
      </p>
    </div>
    <p class="text-gray-600 font-mono dark:text-gray-300 mb-6">
      Choose a topic to get started(Just click on the topic you want)
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl h-auto mx-auto">
      <router-link
        to="/quiz/javascript"
        class="p-6 rounded-xl hover:scale-105 transition-transform duration-300 font-mono font-bold text-xl"
      >
        <span v-tooltip="'JavaScript Quiz'"
          ><img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            class="img"
            alt="JavaScript"
        /></span>
      </router-link>
      <router-link
        to="/quiz/html"
        class="p-6 rounded-xl hover:scale-105 transition-transform duration-300 font-mono font-bold text-xl"
      >
        <span v-tooltip="'HTML Quiz'"
          ><img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            class="img"
            alt="HTML"
        /></span>
      </router-link>
      <router-link
        to="/quiz/css"
        class="p-6 rounded-xl hover:scale-105 transition-transform duration-300 font-mono font-bold text-xl"
      >
        <span v-tooltip="'CSS Quiz'"
          ><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj7-gq11u-a8ebYdxnDF-fIy6cBIJ-Mn2Lg&s"
            class="img"
            alt="CSS"
        /></span>
      </router-link>
      <router-link
        to="/quiz/vue"
        class="p-6 rounded-xl hover:scale-105 transition-transform duration-300 font-mono font-bold text-xl"
      >
        <span v-tooltip="'Vue Quiz'"
          ><img src="https://vuejs.org/images/logo.png" class="img" alt="Vue.js"
        /></span>
      </router-link>
      <router-link
        to="/quiz/react"
        class="p-6 rounded-xl hover:scale-105 transition-transform duration-300 font-mono font-bold text-xl"
      >
        <span v-tooltip="'React Quiz'"
          ><img src="https://reactjs.org/logo-og.png" class="img" alt="React.js"
        /></span>
      </router-link>
      <router-link
        to="/quiz/angular"
        class="p-6 rounded-xl hover:scale-105 transition-transform duration-300 font-mono font-bold text-xl"
      >
        <span v-tooltip="'Angular Quiz'"
          ><img
            src="https://angular.io/assets/images/logos/angular/angular.png"
            class="img"
            alt="Angular"
        /></span>
      </router-link>
    </div>
    <div class="relative overflow-hidden w-full h-10 mt-2">
      <div class="animate-marquee text-lg font-bold font-mono">
        All the best for the Quiz, make sure you attempt all the questions.
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style>
.img {
  width: 130px;
  height: 130px;
  border-radius: 30px;
}
</style>
