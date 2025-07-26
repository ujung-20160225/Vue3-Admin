export interface userInfo {
    name: string;
    username: string;
}

export interface GetUserInfoApiResponseData {
    code: number;
    data: userInfo;
}
export interface GetUserLogoutResponseData {
    code: number;
}
