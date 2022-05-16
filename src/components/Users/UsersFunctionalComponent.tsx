import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {
    createPost,
    deletePost,
    follow,
    getUsers,
    initialStateType,
    setUser,
    unFollow,
    UsersType
} from "../redux/users-reducer";
import style from './Users.module.css'
import axios from "axios";
import {NavLink} from "react-router-dom";
import userPhoto from "../../images/user.png";
import {Preloader} from "../../common/Preloader";

export const UsersFunctionalComponent = () => {
    const onPageChanged = (currentPage: number) => {
        dispatch(getUsers(currentPage, user.pageSize))
    }


    const dispatch = useDispatch()
    const user = useSelector<AppRootStateType, initialStateType>(state => state.users)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.users.isFetching)

    let pagesCount = Math.ceil(user.totalUsersCount / user.pageSize)

    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    return <div>
        {isFetching ?
            <Preloader/> : null}
        <div>

            {page.map((m) => {

                return <span
                    className={user.currentPage === m ? style.selectedPage : ""}
                    onClick={(e) => onPageChanged(m)}
                >{m}</span>
            })}

        </div>
        {user.users.map((us: UsersType) => <div key={us.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + us.id}>
                    <img src={us.photos.small !== null ? us.photos.small : userPhoto}/>
                        </NavLink>
                </div>
                {us.followed

                    ? <button disabled={!!user.touchingProgress.find(f => f === us.id)}
                              onClick={() => {
                                  dispatch(deletePost(us.id)) // диспатчим санку

                              }}
                    >unfollow</button>

                    : <button disabled={!!user.touchingProgress.find((f: any) => f === us.id)}
                              onClick={() => {
                                  dispatch(createPost(us.id)) // диспатчим санку


                              }}
                    >follow</button>
                }

            </span>

            <span>
    <div>
        {us.name}
         </div>
     <div>
        {us.status}
            </div>
                </span>

        </div>)}


    </div>

};

