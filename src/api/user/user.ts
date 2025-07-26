/**
 * 获取用户信息模块
 */
import request from '@/api/request';
interface IResponseType<data = {}> {
    code?: number;
    status: number;
    msg: string;
    data: data;
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
