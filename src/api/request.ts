import Axios from 'axios';
const BASE_URL = ''; //请求接口url 如果不配置 则默认访问链接地址
const TIME_OUT = 5000; // 接口超时时间
const instance = Axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        originalUrl: window.location.href
    }
});
// instance.defaults.headers.post = {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     locale: localStorage.getItem('SITE_LANG') || 'zh-tw'
// };
// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 可以在此处添加一些共有的请求拦截
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// 添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        const res = response.data;
        const {code, redirectUrl, errorData} = res;
        // 用户未授权
        if (code === 90001) {
            window.location.href = errorData;
        }
        // uuap登录
        if (code === 40001) {
            window.location.href = redirectUrl;
        }
        // 在此处添加一些响应拦截
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default instance;
