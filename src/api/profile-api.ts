import {instance} from "./instanse";


export const profileApi = {
    getProfyles(userId: number) {
        return instance.get(`profile/${userId}`,)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put<ResponseStatusType>('profile/status',{status})
    }
}



type ResponseStatusType={
    resultCode: number
    messages: string[],
    data: {}
}