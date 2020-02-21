import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../home/HomePage.vue'
import DetaljeradKontroll from '../detaljer/DetaljeradKontroll.vue'
import Information from '../info/Information.vue'
import MoreInfo from '../info/MoreInfo.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/detaljeradkontroll',
    name: 'DetaljeradKontroll',
    component: DetaljeradKontroll
  }, {
    path: '/information',
    name: 'Information',
    component: Information
  }, {
    path: '/information/:more',
    name: 'MoreInfo',
    component: MoreInfo
  }
]

const router = new VueRouter({
  routes
})

export default router