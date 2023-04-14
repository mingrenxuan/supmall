import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

var About = () => import( '../views/About.vue')
var news = () => import( '../views/news.vue')
var vid = () => import( '../views/vid.vue')
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About
  },{
    path: '/news',
    name: 'news',
    component: news
  }, {
    path: '/vid',
    name: 'vid',
    component: vid
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
