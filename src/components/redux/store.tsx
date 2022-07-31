import {profileReducer} from "./profile-reducer";
import {messagePageReducer} from "./messagepage-reducer";




const store:any = {

    _state: {
        profilePage: {
            messagePostData:
                [{id: '1', message: 'Hallo,my dear friend', likesCount: 15},
                    {id: '2', message: 'How are you?', likesCount: 20},
                    {id: '3', message: 'My name is Dima', likesCount: 2},],
            newPostText: ""

        },
        messagesPage: {
            dialogData: [
                {id: '1', name: 'Dimon'},
                {id: '2', name: 'Sasha'},
                {id: '3', name: 'Veronika'},
                {id: '4', name: 'Sofia'},
            ],
            messageItemData: [
                {id: '1', message: 'Hallo,my dear friend'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'Do you like travelling?'},
                {id: '4', message: ' I like foto'},
            ],
            newMessageText: ''
        }


    },
    getState() {

        return this._state;
    },
    _callSubscriber(state: any) {
        console.log("Ho-ho-ho")
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    //



}






  // type ActionType = {
  //   type: "NEW-POST" | "CHANGE-POST" | "NEW_MESSAGE" | "SEND_MESSAGE"
  //   newText: string
  //   newText2: string
// }
export type MessagePostDataType = {
    id: string
    message: string
    likesCount: number
}
export type DialogDataType = {

    id: string
    name: string
}
export type messageItemDataType = {
    id: string
    message: string
}


export type  ProfilePageType = {
    messagePostData: Array<MessagePostDataType>
    newPostText: string


}
export type  MessagesPageType = {
    dialogData: Array<DialogDataType>
    messageItemData: Array<messageItemDataType>
    newMessageText:string
}


export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType

}

 export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}



export default store;