export interface LoginRes {
    userNickname: string;
    token: string;
    refreshToken: string;
    isLogin: boolean;
}