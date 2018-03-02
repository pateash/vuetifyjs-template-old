import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/home'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
  ]
})
