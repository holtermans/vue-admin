import Vue from 'vue'
import VueRouter from 'vue-router'


// 1.使用模块
Vue.use(VueRouter)  //告诉vue，我使用vueroute这个模块，给我加载，
//官方描述：安装 Vue.js 插件。如果插件是一个对象，它必须暴露一个 install 方法。如果它本身是一个函数，它将被视为安装方法。
// 2.定义路由，写路由
const routes = [
  {
    path: '/system',
    name: 'System',
    component: () => import(/* webpackChunkName: "about" */"../views/System.vue")
  },
  {
    path: '/aritcle',
    name: 'Aritcle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
  }
]
// 3.定义路由器变量
const router = new VueRouter({  
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 4.导出路由器
export default router
