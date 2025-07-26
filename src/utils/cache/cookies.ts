/** 统一处理 Cookie */
import CacheKey from '@/constants/cache-key';

export const getToken = () => {
    return 'xxxx';
};
export const setToken = (token: string) => {
    console.log('setToken', token);
};
export const removeToken = () => {
    console.log('remove', CacheKey.TOKEN);
};
