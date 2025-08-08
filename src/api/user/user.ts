/**
 * 获取用户信息模块
 */
import request from '@/api/request';
interface IResponseType {
  code?: number;
  status: number;
  msg: string;
  data: any;
}
interface IUser {
  name: string;
  age: number;
}
export const getData = () => {
  return request<IResponseType<IUser>>({
    url: '/api/list/user',
    method: 'get'
  });
};
