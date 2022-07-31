import {Dispatch} from "redux";
import {usersApi} from "../../api/users_api";
import {followApi} from "../../api/follow_api";


type GeneralType = FollowType
    | UnFollowType
    | SetUsersType
    | SetCurrentPage
    | setTotalUsersCount
    | ToggleIsFetchingType
    | ToggleIsTouchingType
    | SetPageSizeCount

export type UsersType = {
    id: string,
    followed: boolean,
    name: string,
    status: string,
    photos: {
        small: string
        large: string
    }
    uniqueUrlName: string

}


export type initialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    touchingProgress: Array<string>

}
const initialState: initialStateType = {

    users: [],
    pageSize: 4,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false,
    touchingProgress: [],


}
export const usersReducer = (state = initialState, action: GeneralType): initialStateType => {
    switch (action.type) {
        case "FOLLOW_USER": {
            return {...state, users: state.users.map((m: any) => m.id === action.userId ? {...m, followed: true} : m)}
        }
        case "UNFOLLOW_USER": {
            return {...state, users: state.users.map((m: any) => m.id === action.userId ? {...m, followed: false} : m)}

        }
        case "SET_USERS": {
            return {...state, users: action.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_IS_TOUCHING": {
            return {
                ...state,
                touchingProgress: action.isFetching
                    ? [...state.touchingProgress, action.userId]
                    : state.touchingProgress.filter(f => f !== action.userId)
            }
        }
        case "SET_PAGE_SIZE_COUNT":{
            return {...state,pageSize:action.pageSize}
        }

        default:
            return state
    }
}
type FollowType = ReturnType<typeof follow>
export const follow = (userId: string) => {
    return {
        type: "FOLLOW_USER",
        userId,
    } as const
}
type UnFollowType = ReturnType<typeof unFollow>
export const unFollow = (userId: string) => {
    return {
        type: "UNFOLLOW_USER",
        userId,
    } as const
}
type SetUsersType = ReturnType<typeof setUser>
export const setUser = (users: UsersType[]) => {
    return {
        type: "SET_USERS",
        users,
    } as const
}
type SetCurrentPage = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage,
    } as const
}
type setTotalUsersCount = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        totalUsersCount,
    } as const
}
type SetPageSizeCount = ReturnType<typeof setPageSizeCount>
export const setPageSizeCount = (pageSize: number) => {
    return {
        type: "SET_PAGE_SIZE_COUNT",
        pageSize,
    } as const
}
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}

type ToggleIsTouchingType = ReturnType<typeof toggleIsTouching>
export const toggleIsTouching = (isFetching: boolean, userId: string) => {
    return {
        type: "TOGGLE_IS_TOUCHING",
        isFetching,
        userId
    } as const
}


export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => { // ThunkCreator
    dispatch(toggleIsFetching(true))

    usersApi.getUsers(currentPage, pageSize)
        .then(response => {
                dispatch(toggleIsFetching(false))
                dispatch(setUser(response.data.items));
                dispatch(setTotalUsersCount(response.data.totalCount));
            }
        )
}
export const createPost = (userId: string) => (dispatch: Dispatch) => {   //Thunk
    dispatch(toggleIsTouching(true, userId))
    followApi.createPost(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleIsTouching(false, userId))
        })
}
export const deletePost = (userId: string) => (dispatch: Dispatch) => {    //Thunk
    dispatch(toggleIsTouching(true, userId))
    followApi.deletePost(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(unFollow(userId))

            }
            dispatch(toggleIsTouching(false, userId))

        })
}

