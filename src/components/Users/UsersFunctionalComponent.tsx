import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {
    createPost,
    deletePost,
    getUsers,
    initialStateType, setCurrentPage, setPageSizeCount, setTotalUsersCount,

    UsersType
} from "../redux/users-reducer";

import {NavLink} from "react-router-dom";
import userPhoto from "../../images/1299.jpg";
import {Preloader} from "../../common/Preloader";
import BasicPagination from "../../common/Pagination";

export const UsersFunctionalComponent = () => {
    const onPageChanged = (currentPage: number) => {

        dispatch(setCurrentPage(currentPage))
    }
    const onCurrentCountChanged = (count: number) => {

        dispatch(setPageSizeCount(count))
    }


    const dispatch = useDispatch()
    const user = useSelector<AppRootStateType, initialStateType>(state => state.users)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.users.isFetching)
    const currentPageUsers = useSelector<AppRootStateType, number>(state => state.users.currentPage)
    const pagesCount = useSelector<AppRootStateType, number>(state => state.users.pageSize)

    useEffect(() => {

        dispatch(getUsers(currentPageUsers, user.pageSize))
    }, [currentPageUsers, user.pageSize])


    //
    // let page = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     page.push(i)
    // }

    return <div>
        {isFetching ?
            <Preloader/> : null}
        <div>

            <BasicPagination page={user.currentPage}
                             pageCount={pagesCount}
                             callback={onPageChanged}
                             setPageCountCallback={onCurrentCountChanged}
                             totalCount={user.totalUsersCount}
            />
            {/*{page.map((m) => {*/}

            {/*    return <span*/}
            {/*        className={user.currentPage === m ? style.selectedPage : ""}*/}
            {/*        onClick={(e) => onPageChanged(m)}*/}
            {/*    >{m}</span>*/}
            {/*})}*/}

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

                    : <button disabled={!!user.touchingProgress.find(f => f === us.id)}
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

