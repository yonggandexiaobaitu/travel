import axios from "axios"
import useMainStore from "@/stores/modules/main";
//导入axios相关配置
import { BASEURL, TIMEOUT } from "./config"

const mainStore=useMainStore();

class Myaxios {
  /**
   * 
   * @param {axios的自定义配置} config 
   */
  constructor(config) {
    this.axiosinstance = axios.create(Object.assign({
      timeout: 1000,//超时时间
    }, config))

    // 添加请求拦截器
     this.axiosinstance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      mainStore.isLoading=true;
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器


     this.axiosinstance.interceptors.response.use(function (response) {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      mainStore.isLoading=false;
      return response;
    }, function (error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么

      //隐藏loading弹窗
      mainStore.isLoading=false;
      return Promise.reject(error);
    });
  }
  request (config) {
    return new Promise((resolve, reject) => {
      this.axiosinstance.request(config).then(res => {
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

  get (config) {
    return this.request(Object.assign(config, {
      method: 'get'
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
  post (config) {
    return this.request(Object.assign(config, {
      method: 'post'
    }))
  }
}
export default new Myaxios({
  baseURL: BASEURL,
  timeout: TIMEOUT
})