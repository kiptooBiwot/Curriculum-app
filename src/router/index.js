import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateCurriculum from '../views/CreateCurriculum.vue'
import ShowCurriculum from '../views/ShowCurriculum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curriculum',
    name: 'Create',
    component: CreateCurriculum
  },
  {
    path: '/curriculum/show',
    name: 'ShowCurriculum',
    component: ShowCurriculum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
