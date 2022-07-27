import React, {useRef} from 'react';
import style from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {addNewPostAC, changePostAC, PostType} from "../../redux/profile-reducer";


export function MyPosts(props: any) {

    let postElements = props.post.map((m: PostType) => <Posts key={m.id} message={m.message} likesCount={m.likesCount}/>)
    let newPostMessage = React.createRef<HTMLTextAreaElement>();
    let onNewPost = () => {
        props.addPost()
        // let text = newPostMessage.current?.value;
        // props.dispatch(addNewPostAC());


    }
    let onChangePost = () => {
        let text = newPostMessage.current?.value;
        props.newTextInPost(text)

    }
    return (
        <div>
            <div className={style.Title}>
                My Post
            </div>
            <div>
                <div>
                    <textarea
                        placeholder={'Enter text'}
                        ref={newPostMessage}
                        value={props.newPostText}
                        onChange={onChangePost}
                    />
                </div>
                <button onClick={onNewPost}> New Post</button>


            </div>

            {postElements}
        </div>
    )


}

export default MyPosts;