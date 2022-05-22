import {instance} from "./instanse";
import {Axios, AxiosResponse} from "axios";


export const authApi = {
    getUserData() {
        return instance.get("auth/me")
    },
    login(data:AuthLoginType) {
        return instance.post<AuthLoginType,AxiosResponse<ResponseType<{ userId: number }>>>("auth/login",data)
    },
    loginOut(){
        return instance.delete("auth/login")
    }
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
}
export type AuthLoginType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean

}