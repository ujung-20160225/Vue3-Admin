import request from '@/utils/request';

interface UserLoginParams {
  username: string;
  password: string;
}
export function userLoginApi(data: UserLoginParams) {
  return request.post('/users/login', data);
}
