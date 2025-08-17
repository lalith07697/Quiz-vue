// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import Quiz from '../views/Quiz.vue'
// import History from '../views/History.vue'

// const routes = [
//   { path: '/', name: 'Home', component: Home },
//   { path: '/quiz', name: 'Quiz', component: Quiz },
//   { path: '/history', name: 'History', component: History },
// ]

// export default createRouter({
//   history: createWebHistory(),
//   routes,
// })

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import History from '../views/History.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quiz/:topic', 
    name: 'Quiz',
    component: Quiz,
    props: true, 
  },
  {
    path: '/quiz',
    name: 'QuizDefault',
    redirect: '/quiz/javascript',
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
