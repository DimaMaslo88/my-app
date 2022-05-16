import {Dispatch} from "redux";
import {authApi} from "../../api/auth_api";

type GeneralType = SetUserDataType


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}


export const authReducer = (state: InitialStateType = initialState, action: GeneralType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.data,isAuth:true}

        }


        default:
            return state
    }

}


type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: number, login: string, email: string) => {
    return {
        type: "SET_USER_DATA",
        data: {
            id,
            login,
            email
        }

    }
}


export const getUserData=()=>(dispatch:Dispatch)=>{ // ThunkCreator
    authApi.getUserData()
        .then((res) => {

            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setUserData(id, login, email))
            }

        })
}
