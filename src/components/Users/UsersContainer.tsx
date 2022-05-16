import React from 'react';
import {connect} from "react-redux";

import {
    createPost,
    deletePost,
    follow, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUser,
    toggleIsFetching,

    unFollow,

} from "../redux/users-reducer";

import {UsersPresent} from "./UsersPresent";
import {AppRootStateType} from "../redux/redux-store";
import {Preloader} from "../../common/Preloader";


class UsersContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);


    }

    componentDidMount() {

        this.props.getUsers()    //используется Thunk
        // this.props.toggleIsFetching(true)
        //
        //
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(response => {
        //             this.props.toggleIsFetching(false)
        //             this.props.setUser(response.data.items);
        //             this.props.setTotalUsersCount(response.data.totalCount);
        //         }
        //     )


    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)// использую ThunkCreator
        // this.props.setCurrentPage(currentPage)
        // this.props.toggleIsFetching(true)
        // usersApi.getUsers(currentPage, this.props.pageSize)
        //
        //     .then(response => {
        //         this.props.setUser(response.data.items)
        //         this.props.toggleIsFetching(false)
        //     })


    }

    render() {


        return <>
            {this.props.isFetching ?
                <Preloader/> : null}

            <UsersPresent totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          users={this.props.users}
                          follow={this.props.follow}
                          unFollow={this.props.unFollow}
                          touchingProgress={this.props.touchingProgress}
                          deletePost={this.props.deletePost}
                          createPost={this.props.createPost}

            />


        </>
    }
}

let mapStateToProps = (state: AppRootStateType) => {

    return {

        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        touchingProgress: state.users.touchingProgress



    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUser,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    getUsers,
    deletePost,
    createPost

})(UsersContainer)


