import axios from "axios";
import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false
});
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    NProgress.start();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    NProgress.done();
    return response;
  },
  error => {
    NProgress.done();
    return Promise.reject(error);
  }
);

export default request;