import React, {useRef} from 'react';
import style from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {addNewPostAC, changePostAC, PostType} from "../../redux/profile-reducer";
import {TextArea} from "../../Dialogs/TextArea/TextArea";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";


export function MyPosts(props: any) {
    const dispatch = useDispatch()
    const postMessage = useSelector<AppRootStateType, string>(state => state.profilePage.newPostText)
    let postElements = props.post.map((m: PostType) => <Posts key={m.id} message={m.message}
                                                              likesCount={m.likesCount}/>)

    let onNewPost = () => {
        props.addPost()



    }
    let onChangePost = (text: string) => {


        dispatch(changePostAC(text))
    }
    return (
        <div>
            <div className={style.Title}>
                My Post
            </div>
            <div>
                <div>
                    <TextArea messageText={postMessage} sendText={onNewPost} updateText={onChangePost}/>
                </div>


            </div>

            {postElements}
        </div>
    )


}

export default MyPosts;