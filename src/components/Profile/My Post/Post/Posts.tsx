import React, {useState} from 'react';
import style from './Posts.module.css';
import {useDispatch} from "react-redux";
import {addLikesCountAC} from "../../../redux/profile-reducer";


type PostsPropsType = {
    postId:string
    message: string
    likesCount: number

}

function Posts(props: PostsPropsType) {
    const dispatch=useDispatch()
const onChangeLikesCount=()=>{
dispatch(addLikesCountAC(props.likesCount,props.postId))
}
//     const [value,setValue]=useState(props.likesCount)
//     const onChangeLikesCount=()=>{
//         setValue(value +1)
//     }
    return (
        <div>
            <div className={style.item}>
                <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>
                {props.message}

                <div>

                    <div className={style.like}>

                        <img
                            src='https://cdn.pixabay.com/photo/2017/08/17/15/49/like-2651767__480.png'
                            onClick={onChangeLikesCount}
                        />
                        {props.likesCount}

                    </div>

                </div>
            </div>
        </div>

    )


}

export default Posts;