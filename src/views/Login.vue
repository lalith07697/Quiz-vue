<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="glass-card w-full max-w-md p-8 text-center">
      <div class="mb-8">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Brain Storm
        </h1>
        <p class="text-gray-300 font-mono">Enter your name to begin the quiz journey</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div class="relative">
          <input
            v-model="userName"
            type="text"
            placeholder="Enter your name"
            required
            class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
          />
          <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 transition-opacity duration-300 pointer-events-none" :class="{ 'opacity-100': userName }"></div>
        </div>

        <button
          type="submit"
          :disabled="!userName.trim()"
          class="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          Start Quiz Adventure
        </button>
      </form>

      <div class="mt-8 text-sm text-gray-400">
        <p>Test your knowledge across multiple technologies</p>
        <div class="flex justify-center space-x-4 mt-4">
          <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">JavaScript</span>
          <span class="px-2 py-1 bg-orange-500/20 text-orange-400 rounded">HTML</span>
          <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded">CSS</span>
          <span class="px-2 py-1 bg-green-500/20 text-green-400 rounded">Vue</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/AuthStore'

const router = useRouter()
const authStore = useAuthStore()
const userName = ref('')

const handleLogin = () => {
  if (userName.value.trim()) {
    authStore.login({ name: userName.value.trim() })
    router.push('/')
  }
}
</script>