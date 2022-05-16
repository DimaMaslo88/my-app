import axios from "axios";

 export const instance=axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    withCredentials:true,
    headers:{
        "api-key":"fa8931a8-22a7-4bff-b6ab-ea726820bdf8"
    }
})