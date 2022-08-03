import { defineStore } from "pinia"
import DetailApi from "@/service/modules/detail"
const useDetail=defineStore('detail', {
  state () {
     return {
      houseDetail:{

      }
     }
  },
  getters:{
    
    getswiperData(){
      return this.houseDetail?.mainPart?.topModule?.housePicture?.housePics ?? []
    },
    getposition(){
      return {
        longitude:this.houseDetail?.mainPart?.dynamicModule.positionModule.longitude,
        latitude:this.houseDetail?.mainPart?.dynamicModule.positionModule.latitude,
      }
    },
    getpositionModule(){
      return this.houseDetail?.mainPart?.dynamicModule?.positionModule
    },
    getDetailInfo(){
      return this.houseDetail?.mainPart?.topModule 
    },
    getDetailfacility(){
      return   this.houseDetail?.mainPart?.dynamicModule?.facilityModule?.houseFacility  ?? {}
    },
    getlandlord(){
      return  this.houseDetail?.mainPart?.dynamicModule?.landlordModule
    },
    getcomment(){
      return  this.houseDetail?.mainPart?.dynamicModule?.commentModule
    },
    getorderRules(){
      return  this.houseDetail?.mainPart?.dynamicModule?.rulesModule?.orderRules
    },
    getIntro(){
      return this.houseDetail?.mainPart?.introductionModule
    }
 
  },
  actions: {
    async gethouseDetail (houseId) {
      let houseDetail = await DetailApi.getHouseDetail(houseId);
      this.houseDetail=houseDetail.data;
      console.log('获取到房屋详情',this.houseDetail);
    }
  }
})
export default useDetail;

