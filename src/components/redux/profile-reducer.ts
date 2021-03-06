import {MessagePostDataType} from "./store";
import {Dispatch} from "redux";
import {profileApi} from "../../api/profile-api";
import photo from '../../images/new2.jpg'

type GeneralActionType = ChangePostType
    | AddNewPostType
    | GetProfileType
    | SetUserStatus
    | AddLikesCount

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
const initialState = {

    messagePostData:
        [{id: '1', message: 'Hello,my dear friend', likesCount: 15},
            {id: '2', message: 'How are you?', likesCount: 20},
            {id: '3', message: 'My name is Dima', likesCount: 2},],
    newPostText: "",
    profile: {
        aboutMe: "я крутой чувак 1001%",

        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "https://github.com/DimaMaslo88/todolist",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "Ищу работу frontend-developer",
        fullName: "Dmitry Maslo",
        userId: 22176,
        photos: {
            small: photo,
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    status: "Ищу работу разрабом)))"
}
type InitialStateType = {
    messagePostData: PostType[]
    newPostText: string
    profile: ProfileType
    status: string

}
export const profileReducer = (state: InitialStateType = initialState, action: GeneralActionType): InitialStateType => {
    switch (action.type) {
        case "NEW-POST": {
            let newP = {
                id: '4',
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                messagePostData: [...state.messagePostData, newP],
                newPostText: ''
            }
            // let newState = {...state}
            // newState.messagePostData = [...state.messagePostData]
            // newState.messagePostData.push(newP)
            // newState.newPostText = ''
            // return newState
        }
        case "CHANGE-POST": {
            return {...state, newPostText: action.newText}

        }
        case "GET_PROFILE": {
            return {...state, profile: action.profile}
        }

        case "GET_STATUS": {
            return {...state, status: action.status}
        }
        case "NEW-LIKES-COUNT":{
            return {...state,messagePostData:state.messagePostData.map(m=>m.id===action.id?{...m,likesCount:action.likes+1}:m)}
        }
        default:
            return state
    }
}
type AddNewPostType = ReturnType<typeof addNewPostAC>
export const addNewPostAC = () => {
    return {
        type: "NEW-POST",

    } as const
}
type AddLikesCount = ReturnType<typeof addLikesCountAC>
export const addLikesCountAC = (likes: number,id:string) => {
    return {
        type: "NEW-LIKES-COUNT",
        likes,
        id

    } as const
}
type ChangePostType = ReturnType<typeof changePostAC>
export const changePostAC = (newText: string) => {
    return {
        type: "CHANGE-POST",
        newText
    } as const
}

type GetProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "GET_PROFILE",

        profile
    } as const
}

type SetUserStatus = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => {
    return {
        type: "GET_STATUS",
        status
    } as const
}


export const getProfyles = (userId: number) => (dispatch: Dispatch) => { //ThunkCreator
    profileApi.getProfyles(userId)
        .then((res) => {

            dispatch(setUserProfile(res.data))
        })
}
export const getStatus = (userId: number | null) => (dispatch: Dispatch) => { // ThunkCreator
    profileApi.getStatus(userId)
        .then((res) => {

            dispatch(setUserStatus(res.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0)
                dispatch(setUserStatus(status))
        })
}


