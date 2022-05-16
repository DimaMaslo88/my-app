import React from 'react';
import style from './Posts.module.css';


type PostsPropsType = {
    message: string
    likesCount: number

}

function Posts(props: PostsPropsType) {

    return (
        <div>
            <div className={style.item}>
                <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>
                {props.message}

                <div>

                    <div className={style.like}>

                        <img
                            src='https://cdn.pixabay.com/photo/2017/08/17/15/49/like-2651767__480.png'/> {props.likesCount}

                    </div>

                </div>
            </div>
        </div>

    )


}

export default Posts;