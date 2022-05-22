import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {authApi} from "../../api/auth_api";
import {createUserData, setUserData} from "../redux/auth_reducer";
import {AppRootStateType} from "../redux/redux-store";
import style from "./Header.module.css"

export type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.createUserData() // ThunkCreator



        // authApi.getUserData()
        //     .then((res) => {
        //
        //         if (res.data.resultCode === 0) {
        //             let {id, login, email} = res.data.data
        //             this.props.setUserData(id, login, email)
        //         }
        //
        //     })
    }


    render() {

        return (

            <div className={style.header}>
                <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
            </div>
        );
    }

}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData,createUserData})(HeaderContainer);