import {ref,onMounted} from "vue"

export default function useScroll(elRef){
  let el=window;
  const scrollTop=ref(0);//页面向上滚动了多少
  const clientHeight=ref(0);//客户端高度
  const scrollHeight=ref(0);//总体高度
  const onScroll=function(){
    if(el===window){
      scrollTop.value=document.documentElement.scrollTop;
      clientHeight.value=document.documentElement.clientHeight;
      scrollHeight.value=document.documentElement.scrollHeight;
    }else{
      scrollTop.value= el.scrollTop;
      clientHeight.value=el.clientHeight;
      scrollHeight.value=el.scrollHeight;
    }
 

    //  console.log('当前向上滚动的值',scrollTop.value,'客户端高度',clientHeight.value,'总体高度',scrollHeight.value);
  }
  onMounted(()=>{
 
 
     
    if(elRef){
      //如果有传,那么在挂载之后赋值
      el=elRef.value;
    }
    //所以他可能是window或者是传进来的元素
    el.addEventListener('scroll',onScroll)

    
  })
  return {
    scrollTop
  }
}