<template>
  <div class="text-center max-w-6xl mx-auto">
    <div class="mb-12">
      <h2
        class="text-5xl font-mono font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
      >
        Choose Your Challenge
      </h2>
      <div class="glass-card max-w-3xl mx-auto p-8 mb-8">
        <h3 class="font-mono font-bold text-2xl mb-4 text-cyan-400">Instructions</h3>
        <p class="font-mono text-gray-300 leading-relaxed">
          Test your knowledge with quick multiple-choice questions. Select the correct option to
          score points. You have <span class="text-cyan-400 font-bold">5 minutes</span> to complete
          each quiz. Explanations are provided after each answer, and your results are saved for
          future reference.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <!-- JavaScript -->
      <router-link to="/quiz/javascript" class="topic-card group text-center">
        <div class="topic-icon text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            class="w-20 h-20 object-contain rounded-full mx-auto border-2 border-yellow-400 shadow-lg bg-white p-2"
            alt="JavaScript"
          />
        </div>
        <h3 class="text-xl font-bold text-yellow-400 mb-2">JavaScript</h3>
        <p class="text-gray-400 text-sm">Test your JS fundamentals</p>
        <div class="topic-overlay">
          <span class="text-white font-semibold">Start Quiz →</span>
        </div>
      </router-link>

      <!-- HTML -->
      <router-link to="/quiz/html" class="topic-card group text-center">
        <div class="topic-icon text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            class="w-20 h-20 object-contain rounded-full mx-auto border-2 border-orange-400 shadow-lg bg-white p-2"
            alt="HTML"
          />
        </div>
        <h3 class="text-xl font-bold text-orange-400 mb-2">HTML</h3>
        <p class="text-gray-400 text-sm">Master markup language</p>
        <div class="topic-overlay">
          <span class="text-white font-semibold">Start Quiz →</span>
        </div>
      </router-link>

      <!-- CSS -->
      <router-link to="/quiz/css" class="topic-card group text-center">
        <div class="topic-icon text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj7-gq11u-a8ebYdxnDF-fIy6cBIJ-Mn2Lg&s"
            class="w-20 h-20 object-contain rounded-full mx-auto border-2 border-blue-400 shadow-lg bg-white p-2"
            alt="CSS"
          />
        </div>
        <h3 class="text-xl font-bold text-blue-400 mb-2">CSS</h3>
        <p class="text-gray-400 text-sm">Style and design concepts</p>
        <div class="topic-overlay">
          <span class="text-white font-semibold">Start Quiz →</span>
        </div>
      </router-link>

      <!-- Vue.js -->
      <router-link to="/quiz/vue" class="topic-card group text-center">
        <div class="topic-icon text-center">
          <img
            src="https://vuejs.org/images/logo.png"
            class="w-20 h-20 object-contain rounded-full mx-auto border-2 border-green-400 shadow-lg bg-white p-2"
            alt="Vue.js"
          />
        </div>
        <h3 class="text-xl font-bold text-green-400 mb-2">Vue.js</h3>
        <p class="text-gray-400 text-sm">Progressive framework</p>
        <div class="topic-overlay">
          <span class="text-white font-semibold">Start Quiz →</span>
        </div>
      </router-link>

      <!-- React -->
      <router-link to="/quiz/react" class="topic-card group text-center">
        <div class="topic-icon text-center">
          <img
            src="https://reactjs.org/logo-og.png"
            class="w-20 h-20 object-contain rounded-full mx-auto border-2 border-cyan-400 shadow-lg bg-white p-2"
            alt="React.js"
          />
        </div>
        <h3 class="text-xl font-bold text-cyan-400 mb-2">React</h3>
        <p class="text-gray-400 text-sm">Component-based library</p>
        <div class="topic-overlay">
          <span class="text-white font-semibold">Start Quiz →</span>
        </div>
      </router-link>

      <!-- Angular -->
      <router-link to="/quiz/angular" class="topic-card group text-center">
        <div class="topic-icon text-center">
          <img
            src="https://angular.io/assets/images/logos/angular/angular.png"
            class="w-20 h-20 object-contain rounded-full mx-auto border-2 border-red-400 shadow-lg bg-white p-2"
            alt="Angular"
          />
        </div>
        <h3 class="text-xl font-bold text-red-400 mb-2">Angular</h3>
        <p class="text-gray-400 text-sm">Full-featured framework</p>
        <div class="topic-overlay">
          <span class="text-white font-semibold">Start Quiz →</span>
        </div>
      </router-link>
    </div>

    <div class="glass-card p-6">
      <div class="relative overflow-hidden">
        <div class="animate-marquee text-lg font-bold font-mono text-cyan-400">
          🚀 Ready to test your skills? Choose a topic and start your coding journey! Good luck! 🎯
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
