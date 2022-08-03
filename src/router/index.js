import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name:"home",//首页
    path: "/home",
    component: () => import('@/views/home/index.vue')
  },
  {
    name:"favor",//收藏
    path: "/favor",
    component: () => import('@/views/favor/index.vue')
  },
  {
    name:"message",//消息
    path: "/message",
    component: () => import('@/views/message/index.vue')
  },
  {
    name:"order",//订单
    path: "/order",
    component: () => import('@/views/order/index.vue')
  },
  {
    name:"city",
    path:"/city",
    component:()=>import('@/views/city/index.vue'),
    meta:{
      hiddenTarBar:true
    }
  },
  {
    name:'detail',
    path:"/detail/:houseId",
    component:()=>import('@/views/detail/index.vue'),
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;