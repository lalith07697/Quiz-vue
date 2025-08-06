<template>
  <div class="text-center py-15">
    <h2 class="text-3xl font-mono font-bold mb-1">Welcome to the JavaScript Quiz!</h2>
  </div>
  <div class="text-center">
    <h1 class="font-mono font-bold text-2xl mb-4">Instructions:</h1>
    <p class="max-w-xl mx-auto mb-6 font-mono text-gray-600 dark:text-gray-300">
      Test your JavaScript knowledge with quick multiple-choice questions. Each question has a
      15-second timer. Select the correct option to score points. Explanations are provided after
      you choose an answer. Your results are saved to view later!
    </p>
    <router-link to="/quiz" class="css-button-gradient--9 font-mono">Start Quiz</router-link>
  </div>
  <div class="relative overflow-hidden w-full h-10 mt-6">
    <div class="animate-marquee text-lg font-bold font-mono">
      All the best for the Quiz, make sure you attempt all the questions.
    </div>
  </div>
</template>
<style scoped>
.css-button-gradient--9 {
  min-width: 130px;
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
