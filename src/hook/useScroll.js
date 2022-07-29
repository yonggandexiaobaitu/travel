import { onMounted, onUnmounted, ref } from "vue"
export default function useScroll () {
  const scrollHeight = ref(0);//页面滚动的实际高度
  const clientHeight = ref(0);//客户端高度
  const scrollTop = ref(0);//滚上去的高度
  const isGoBack=ref(false);//是否达到底部
  const onscroll = function () {
    
    scrollHeight.value = document.documentElement.scrollHeight;//页面滚动的实际高度
    clientHeight.value = document.documentElement.clientHeight;//客户端高度
    scrollTop.value = document.documentElement.scrollTop;//滚上去的高度
    console.log('开始滚动了',clientHeight.value,scrollTop.value,scrollHeight.value)
    if(scrollTop.value+clientHeight.value>=scrollHeight.value){
      console.log('滚动到底部了');
      isGoBack.value=true;
    }
  }
  onMounted(()=>{
    window.addEventListener('scroll', onscroll)
  })
  onUnmounted(()=>{
    window.removeEventListener('scroll',onscroll)
  })
  
  return {
    scrollHeight,clientHeight,scrollTop,isGoBack
  }

}