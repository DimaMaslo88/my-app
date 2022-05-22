import {Dispatch} from "redux";
import {authApi, AuthLoginType} from "../../api/auth_api";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";

type GeneralType = SetUserDataType
    | LoginizationType
    | IsInitializedType
    | SetAppErrorActionType

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isInitialized: false
}

export type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    isInitialized: boolean
}


export const authReducer = (state: InitialStateType = initialState, action: GeneralType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.data, isAuth: true}

        }
        case "SET-LOGIN": {
            return {...state, isAuth: action.value}
        }
        case "IS-INITIALIZED": {
            return {...state, isInitialized: action.isInitialized}
        }
        case "APP/SET-ERROR":{
            return {...state,error:action.error}
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
            email,

        }

    } as const
}

type LoginizationType = ReturnType<typeof loginizationAC>
export const loginizationAC = (value: boolean) => {
    return {
        type: "SET-LOGIN",
        value
    } as const
}

type IsInitializedType = ReturnType<typeof isInitializedAC>
export const isInitializedAC = (isInitialized: boolean) => {
    return {
        type: "IS-INITIALIZED",
        isInitialized
    } as const
}
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

export const createUserData = () => (dispatch: Dispatch) => { // ThunkCreator
    authApi.getUserData()
        .then((res) => {

            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setUserData(id, login, email))
            }

        })
}

export const loginUser = (data: AuthLoginType) => (dispatch: Dispatch) => {
    authApi.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(loginizationAC(true))
                // dispatch(createUserData())
            } else {
                handleServerAppError(res.data,dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error,dispatch)
        })

}
export const logOutUser = () => (dispatch: Dispatch) => {
    authApi.loginOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(loginizationAC(false))
            }
        })
}
export const initializeAppTC = () => (dispatch: Dispatch) => {
    // dispatch(setAppStatusAC('loading'))
    authApi. getUserData()
        .then(res => {

            if (res.data.resultCode === 0) {
                dispatch(loginizationAC(true));
                // dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch);
            }
        })
        .catch(err => {
            handleServerNetworkError(err, dispatch)
        })
        .finally(() => {
            dispatch(isInitializedAC(true))
        })
}