import request  from "../request/request";
export default class Default{
  static getHouseDetail(houseId){
   return request.get({
    url:"/detail/infos",
    params:{
      houseId
    }
   })
  }
}