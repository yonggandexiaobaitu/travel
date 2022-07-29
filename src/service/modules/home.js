import request from "../request/request";

export default  class HomeAPI {
  //首页模块的请求列表
  static hotSuggets () {
    return request.get({
      url: '/home/hotSuggests'
    })
  }
  //获取首页分类房列表
  static getCategoryHouse () {
    return request.get({
      url: "/home/categories"
    })
  }
  //获取热门精选列表 http://123.207.32.32:1888/api/home/houselist?page=1
  static gethouselist (page = 1) {
    return request.get({
      url: "/home/houselist",
      params: {
        page: page
      },
    })
  }
}



