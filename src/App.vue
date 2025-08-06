<template>
  <div
    class="min-h-screen bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 dark:text-white"
  >
    <nav class="p-4 flex justify-between items-center">
      <router-link class="text-xl font-mono font-bold" to="/">JavaScript Quiz</router-link>
      <div>
        <router-link class="mx-2 font-mono hover:text-green-300 transition-colors duration-300 ease-in-out" to="/">Home</router-link>
        <router-link class="mx-2 font-mono hover:text-green-300 transition-colors duration-300 ease-in-out" to="/quiz">Quiz</router-link>
        <router-link class="mx-2 font-mono hover:text-green-300 transition-colors duration-300 ease-in-out" to="/history">History</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>
