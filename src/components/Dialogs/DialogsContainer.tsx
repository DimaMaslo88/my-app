import React from 'react';
import {InitialStateType, sendNewMessageAC, updateNewMessageAC} from "../redux/messagepage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";

let mapStateToProps=(state: AppRootStateType):MapStateToPropsType=>{

    return{
        messagesPage:state.messagesPage,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps=(dispatch:Dispatch): MapDispatchToPropsType=>{
    return{
        newMessageBody:(text:any)=>{ dispatch(updateNewMessageAC(text))},
        sendNewMessages:()=>{dispatch(sendNewMessageAC())}
    }
}

type MapDispatchToPropsType={
    newMessageBody:(text:any)=>void
    sendNewMessages:()=>void
}
type MapStateToPropsType={
    messagesPage:InitialStateType
    isAuth:boolean
}


 const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)






export default DialogsContainer;