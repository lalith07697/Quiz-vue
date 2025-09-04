<template>
  <div
    class="min-h-screen bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 dark:text-white overflow-X-hidden"
  >
    <nav class="p-4 flex justify-between items-center">
      <router-link class="text-xl font-mono font-bold" to="/">Brain strom</router-link>
      <div class="flex space-x-4">
        <router-link
          class="mx-2 font-mono hover:text-green-300 transition-colors duration-300 ease-in-out"
          to="/"
          ><span v-tooltip="'Home'">Home</span></router-link
        >
        <router-link
          class="mx-2 font-mono hover:text-green-300 transition-colors duration-300 ease-in-out"
          to="/quiz"
          ><span v-tooltip="'Questions'">Quiz</span></router-link
        >
        <router-link
          class="mx-2 font-mono hover:text-green-300 transition-colors duration-300 ease-in-out"
          to="/history"
          ><span v-tooltip="'Attempts'">History</span></router-link
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>
