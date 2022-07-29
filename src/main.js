import { createApp } from 'vue'
//引入样式重置css
import 'normalize.css/normalize.css'
//引入css入口文件
import "./assets/css/index.css"
//引入全局状态管理库
import pinia from "./stores"
//引入路由
import router from "./router"
// 注册全局api
import API from   "./service/modules/index";



import App from './App.vue'
const app=createApp(App);
app.config.globalProperties.$api=API;
app.use(pinia);
app.use(router);
app.mount('#app');


