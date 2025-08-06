<script setup>
// import { inject } from 'vue'
import { useHistoryStore } from '@/stores/counter';
// const history = inject('quizHistory', null)
const history = useHistoryStore()
</script>

<template>
  <div class="max-w-xl mx-auto p-4">
    <h2 class="text-xl font-mono font-bold mb-4">Quiz History</h2>

    <div v-if="history.arr.length">
      <div v-for="(item, index) in history.arr" :key="index">
        Score: {{ item.score }} / {{ item.total }}
      </div>
    </div>
    <p v-else>No quiz attempts yet.</p>
  </div>
</template>
