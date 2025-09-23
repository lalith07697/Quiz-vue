<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden"
  >
    <nav v-if="authStore.isAuthenticated" class="p-6 flex justify-between items-center backdrop-blur-sm bg-gray-900/30 border-b border-gray-700/50">
      <router-link class="text-2xl font-mono font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" to="/">
        Brain Storm
      </router-link>
      <div class="flex items-center space-x-6">
        <span class="text-gray-300 font-mono">Welcome, {{ authStore.user?.name }}!</span>
        <div class="flex space-x-4">
        <router-link
          class="nav-link"
          to="/"
        >
          <span v-tooltip="'Home'">Home</span>
        </router-link>
        <router-link
          class="nav-link"
          to="/quiz"
        >
          <span v-tooltip="'Questions'">Quiz</span>
        </router-link>
        <router-link
          class="nav-link"
          to="/history"
        >
          <span v-tooltip="'Attempts'">History</span>
        </router-link>
        <button
          @click="handleLogout"
          class="nav-link text-red-400 hover:text-red-300"
        >
          Logout
        </button>
        </div>
      </div>
    </nav>
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/AuthStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>
