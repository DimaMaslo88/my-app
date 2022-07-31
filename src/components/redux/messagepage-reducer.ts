import {MessagesPageType} from "./store";

  export type GeneralActionType=SendNewMessageType|UpdateNewMessageType
const initialState = {

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
 export type InitialStateType=MessagesPageType


export const messagePageReducer = (state = initialState, action: GeneralActionType):InitialStateType => {
    switch (action.type) {
        case "NEW_MESSAGE": {
            return  {...state, newMessageText: state.newMessageText= action.text}

        }

        case "SEND_MESSAGE": {
            let newMes = state.newMessageText
            return  {
                ...state,
                newMessageText: '',
                messageItemData: [...state.messageItemData, {id: '5', message: newMes}]

            }
        }

        default:
            return state;


    }
}
type SendNewMessageType=ReturnType<typeof sendNewMessageAC>
export const sendNewMessageAC = () => {
    return {
        type: "SEND_MESSAGE"
    }as const
}
type UpdateNewMessageType=ReturnType<typeof updateNewMessageAC>
export const updateNewMessageAC = (text: any) => {
    return {
        type: "NEW_MESSAGE",
       text
    }as const
}