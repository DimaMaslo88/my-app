
import { instance } from "./instanse"



export const usersApi = {
    getUsers(currentPage:number,pageSize:number) {
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}`)
    }
}




