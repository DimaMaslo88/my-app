import React, {useRef} from 'react';

import {addNewPostAC, changePostAC, PostType} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType={
    post:PostType[]
    newPostText:string
}
type MapDispatchToPropsType={
    newTextInPost:(newText:string)=>void
    addPost:()=>void
}

let mapStateToProps=(state:AppRootStateType):MapStateToPropsType=> {

    return {

        post:state.profilePage.messagePostData,
        newPostText:state.profilePage.newPostText,

    }
}

let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=> {
    return {
        newTextInPost:(newText:string)=>{dispatch(changePostAC(newText))},
        addPost:()=>{dispatch(addNewPostAC())}
    }
}
 const  MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)




// export function MyPostsContainer(props: any) {
//
//     let state = props.store.getState()
//     let newPost = () => {
//         // let text = newPostMessage.current?.value;
//         props.store.dispatch(addNewPostAC());
//
//
//     }
//     let ChangePost = (text: any) => {
//
//         props.store.dispatch(changePostAC(text))
//     }



//     return (
//         <MyPosts newTextInPost={ChangePost}
//                  addPost={newPost}
//                  post={state.profilePage.messagePostData}
//                  newPostText={state.profilePage.newPostText}
//         />
//     )
//
//
// }

export default MyPostsContainer;