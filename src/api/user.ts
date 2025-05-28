import request from "@/utils/request";

export function storeUserLogin(params: any) {
  return request({
    url: "/user/login",
    method: "POST",
    params: params,
  });
}
