import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateCurriculum from '../views/CreateCurriculum.vue'
import DisplayCurriculum from '../views/DisplayCurriculum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curriculum/upsert',
    name: 'Create',
    component: CreateCurriculum
  },
  {
    path: '/curriculum',
    name: 'DisplayCurriculum',
    component: DisplayCurriculum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
