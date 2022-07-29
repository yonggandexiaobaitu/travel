// 封装城市模块下面，api的调度统一在这里调用

import {defineStore} from "pinia"
import  API from "../../service/modules"
import { formarDate, addday, diff } from "@/utils/format_date"
const useCityStore=defineStore('cityStore',{
  state(){
    return {
      //当前所在的位置城市信息
      currentCityInfo:{
         cityName:'广州'
      },
      // 用户搜索信息
      searchInfo:{
        startTime:'',//住店时间
        endTime:'',//离店时间

      },
      //所有城市列表数据
      allCitys:{
       
      }
    }
  },
  getters:{
    com_range(){
      console.log('响应式依赖发生变化',this.searchInfo.startTime,this.searchInfo.endTime)
      return diff(this.searchInfo.startTime,this.searchInfo.endTime)
    }
  },
  actions:{
    setSearchInfo(){
      this.searchInfo.startTime= formarDate(new Date().getTime(), 'MM月DD日');
      this.searchInfo.endTime = addday(1, 'MM月DD日')
    },
    async  getallcity(){
     let res= await API.CityApi.getcityall();
     this.allCitys=res.data;
     console.log('获取城市列表数据', this.allCitys)
    }
  },
});
export default useCityStore;