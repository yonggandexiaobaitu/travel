import axios from "axios"
//导入axios相关配置
import { BASEURL,TIMEOUT } from "./config"

 class Myaxios{
  /**
   * 
   * @param {axios的自定义配置} config 
   */
  constructor(config) {
    this.axiosinstance=axios.create(Object.assign({
      timeout: 1000,//超时时间
    },config))
  }
  request(config){
    return new Promise((resolve,reject)=>{
      this.axiosinstance.request(config).then(res=>{
        resolve(res.data)
      })
    })
    
  }
  //封装get方法，还是直接传递一个config配置，但是config配置因为我是get方法，所以我就直接写死config的属性method为get
  /**
   * 
   * @param {*} config 
   * @returns 
   * 调用的时候 xx.get({
   *     url:'xx',
   * 
   * })
   */
  
  get(config){
    return this.request(Object.assign(config,{
      method:'get'
    }))
  }
    //封装post方法，还是直接传递一个config配置，但是config配置因为我是post方法，所以我就直接写死config的属性method为post
  /**
   * 
   * @param {*} config 
   * @returns 
   * 调用的时候 xx.post({
   *     url:'xx',
   * 
   * })
   */
  post(config){
    return this.request(Object.assign(config,{
      method:'post'
    }))
  }
}
export default new Myaxios({
  baseURL:BASEURL   ,
  timeout:TIMEOUT
})