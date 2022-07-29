

import tab_home from "@/assets/img/tabbar/tab_home.png";
import tab_favor from "@/assets/img/tabbar/tab_favor.png";
import tab_order from "@/assets/img/tabbar/tab_order.png";
import tab_message from "@/assets/img/tabbar/tab_message.png";
import tab_home_active from "@/assets/img/tabbar/tab_home_active.png";
import tab_favor_active from "@/assets/img/tabbar/tab_favor_active.png";
import tab_order_active from "@/assets/img/tabbar/tab_order_active.png";

const data = [
 {
  path:'/home',
  title:'首页',
  img:tab_home,
  activeimg:tab_home_active
 },
 {
  path:'/favor',
  title:'收藏',
  img:tab_favor,
  activeimg:tab_favor_active
 },
 {
  path:'/order',
  title:'订单',
  img:tab_order,
  activeimg:tab_order_active
 },
 {
  path:'/message',
  title:'消息',
  img:tab_message,
  activeimg:tab_message
 },
]

export default data;