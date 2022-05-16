import {instance} from "./instanse";


export const authApi = {
    getUserData() {
        return instance.get("auth/me")
    },
    login(data:AuthLoginType) {
        return instance.post<ResponseType,ResponseType>("auth/login",{data})
    }
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
}
type AuthLoginType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean

}