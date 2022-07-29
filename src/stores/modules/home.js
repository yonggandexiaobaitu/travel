import { defineStore } from "pinia"
import API from "@/service/modules";

const useHomeStore = defineStore('homestore', {
  state () {
    return {
      hotSuggetsList: [],
      categoryList: [],
      hotHouseList: []
    }
  },
  actions: {
    async getHotSuggets () {
      let res = await API.HomeApi.hotSuggets();
      this.hotSuggetsList = res.data;
    },
    //获取首页分类房列表
    async getCategoryHouse () {
      let res = await API.HomeApi.getCategoryHouse();
      this.categoryList = res.data;
    },
    async getHomehotHouseList (page=1) {
      let res = await API.HomeApi.gethouselist(page);
      this.hotHouseList.push(...res.data);
      console.log('发送请求res.data', res.data,'获取都page',page)
      if (!res.data.length) {
        return {
          finished: true
        }
      } else {
        return {
          finished: false
        }
      }
    }
  },
  getters: {

  }
})
export default useHomeStore;