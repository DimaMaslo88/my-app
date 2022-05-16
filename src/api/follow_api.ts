
import { instance } from "./instanse";




export const followApi ={
   createPost(userId:string){
        return instance.post<UniversalPostType>(`follow/${userId}`)
    },

    deletePost(userId:string){
       return instance.delete<UniversalPostType>(`follow/${userId}`)
    }
}

export type UniversalPostType={
    resultCode: number
    messages: Array<number>,
    data: {}
}