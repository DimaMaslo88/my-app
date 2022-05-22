import React from 'react';
import userPhoto from '../../images/user.png'
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {followApi} from "../../api/follow_api";
import {deletePost, UsersType} from "../redux/users-reducer";


export const UsersPresent = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }
debugger
    return <div>

        <div>

            {page.map((m) => {
                return <span
                    className={props.currentPage === m ? style.selectedPage : ""}
                    onClick={(e) => props.onPageChanged(m)}
                >{m}</span>
            })}

        </div>
        {props.users.map((m: UsersType) => <div key={m.id}>

            <span>
                <div>
                    <NavLink to={"/profile" + m.id}>
                    <img src={m.photos.small != null ? m.photos.small : userPhoto}/>
                        </NavLink>
                </div>
                {m.followed
                    ? <button disabled={
                        props.touchingProgress.find((f: string) => f === m.id)}
                              onClick={() => {
                                  props.deletePost(m.id)

                              }}
                    >unfollow</button>

                    : <button disabled={props.touchingProgress.find((f:string) => f === m.id)}
                              onClick={() => {
                                  props.createPost(m.id)


                              }}
                    >follow</button>
                }

            </span>

            <span>
    <div>
        {m.name}
         </div>
     <div>
        {m.status}
            </div>
                </span>


        </div>)}


    </div>

};
