import axios, { AxiosRequestConfig } from "axios";
import { message, Modal } from "ant-design-vue";

// 创建一个axios实例
const api = axios.create({
  withCredentials: true, // 在跨域请求时，携带cookie
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 600000,
  params: {},
});
let methodValue = "";
// 请求拦截
api.interceptors.request.use(
  async (config: AxiosRequestConfig | any) => {
    methodValue = config.method;
    config.params.t = new Date().getTime();
    config.headers = {
      "Content-Type":
        config.url.indexOf("/user/login") > -1
          ? "application/x-www-form-urlencoded; charset=UTF-8;"
          : "application/json",
      // 'X-Requested-With': 'XMLHttpRequest'
    };
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["X-Access-Token"] = token;
    }
    const nd_login_token = localStorage.getItem("nd_login_token");
    if (nd_login_token) {
      config.headers["Nd_Login_Token"] = nd_login_token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
api.interceptors.response.use(
  (res) => {
    // console.log(res)
    if (res.headers[`x-access-atoken`]) {
      localStorage.setItem("token", res.headers[`x-access-atoken`]);
    }
    if (res.headers[`x-access-rtoken`]) {
      localStorage.setItem("refreshToken", res.headers[`x-access-rtoken`]);
    }
    if (res.data.type || res.data.retcode === undefined) {
      // 下载，返回结果为文件流时
      return res;
    } else {
      if (res.data.retcode !== 200) {
        //status200且retcode不是200时显示msg
        if (methodValue != "get") {
          if (res.request.responseURL.indexOf("/user/mfa") > -1) {
          } else {
            message.error(res.data.msg);
          }
        }
        if (res.data.retcode === -10004) {
          //异处登录，强制下线
          if (localStorage.getItem("token")) {
            Modal.warning({
              title: "提示",
              content: res.data.msg,
              centered: true,
              onOk: () => {
                localStorage.clear();
                window.location.href = "/login";
              },
            });
            localStorage.clear();
          }
        } else if (res.data.retcode === -10003) {
          //token过期，退出登录
          localStorage.clear();
          window.location.href = "/login";
        } else if (res.data.retcode === -10011) {
          //激活页
          localStorage.clear();
          window.location.href = "/activate";
        }
        return res.data;
      }
    }
    return res.data;
  },
  (error) => {
    if (error.response) {
      if (error.response.data.retcode !== 200) {
        if (error.response.data.retcode === -10004) {
          if (localStorage.getItem("token")) {
            Modal.warning({
              title: "提示",
              content: error.response.data.msg,
              centered: true,
              onOk: () => {
                localStorage.clear();
                window.location.href = "/login";
              },
            });
            localStorage.clear();
          }
        } else if (error.response.data.retcode === -10003) {
          localStorage.clear();
          window.location.href = "/login";
        } else if (error.response.data.retcode === -10011) {
          localStorage.clear();
          window.location.href = "/activate";
        } else {
          console.error(error.response.data.message);
        }
      }
    } else {
      console.error(error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
