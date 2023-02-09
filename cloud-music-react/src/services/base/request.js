import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
    // 2.配置token
    // 3.params/data序列化的操作
    return config;
  },
  (err) => {
    console.error("request err", err);
  }
);

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err && err.response) {
      switch (err.request.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权");
          break;
        default:
          console.log("其他错误");
          break;
      }
      return err;
    }
  }
);

export default instance;
