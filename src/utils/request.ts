import axios from 'axios';
import { ElMessage } from 'element-plus';

const url = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  baseURL: url,
  timeout: 3000,
  timeoutErrorMessage: 'Request Timeout!',
  withCredentials: true, // 默认不发送cookie
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const { data, status } = response;
    if (status === 200) {
      if (data.code === 401) {
        window.location.href = '/login';
      } else if (data.code !== 200) {
        ElMessage.error(data.msg);
      }
    } else {
      ElMessage.error(data.msg);
    }
    return data.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// export default instance
export default {
  get: (url: string, params?: object) => {
    return instance.get(url, { params });
  },
  post: (url: string, data?: object) => {
    return instance.post(url, data);
  },
  put: (url: string, data?: object) => {
    return instance.put(url, data);
  },
  delete: (url: string) => {
    return instance.delete(url);
  }
};
