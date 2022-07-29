// 封装城市模块下，所有的api模块请求
import request from "../request/request"
export default class CityApi {
  //获取国内港澳台和海外城市列表
  static getcityall () {
    return request.get({
      url: "/city/all"
    })
  }

}

