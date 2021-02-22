import axios from 'axios'
import { ElMessage } from 'element-plus'

// allow use http client without Vue instance
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000
})

// 添加请求拦截器
http.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
  }, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
http.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response.data
  },
    function(error) {
    // 对响应错误做点什么
    console.log(error.response)
    switch (error.response.status) {
      case 400:
        ElMessage.error('content')
        break;
      default:
        ElMessage.error('content')

    }

    return Promise.reject(error)
  });


export default http