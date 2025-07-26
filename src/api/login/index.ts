import request from '@/api/request';
import {GetUserLogoutResponseData, GetUserInfoApiResponseData} from './types/login';

/** 获取用户信息 */
export const getUserInfoApi = () => {
    return request<GetUserInfoApiResponseData>({
        url: '/web/api/system/user'
    });
};

/** 退出 */
export const userLogoutApi = () => {
    return request<GetUserLogoutResponseData>({
        url: '/web/uuap_single_logout'
    });
};
