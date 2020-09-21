import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

import HomePage from './components/HomePage'
import WebPage from './components/WebPage'
import CalcPage from './components/CalcPage'
import Constructor from './components/Constructor'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import '../node_modules/nprogress/nprogress.css'
import ToggleButton from 'vue-js-toggle-button'
import VueTheMask from 'vue-the-mask'
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueTheMask)
Vue.use(ToggleButton)
Vue.use(VueRouter)
Vue.use(VueFullPage);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'web', component: WebPage },
    { path: '/constructor', name: 'home', component: HomePage},
    { path: '/calc', component: CalcPage},
    { path: '/editor', component: Constructor},
    { path: '/contact', component: Contact},
    { path: '/404', component: NotFound},
    { path: '*', redirect:'/404'}
  ],
  scrollBehavior (to, from, savedPosition) {
   if (to.name !== 'web'){
	 return new Promise((resolve, reject) => {
	    setTimeout(() => {
	      resolve({ x: 0, y: 0 })
	    }, 450)
	  })
   }
	}
})

const app = new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
      NProgress.done()
})
NProgress.configure({ ease: 'ease-out', speed: 800});