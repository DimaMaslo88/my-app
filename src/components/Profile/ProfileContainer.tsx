import React, {JSXElementConstructor} from "react";

import {profileApi} from "../../api/profile-api";
import {connect} from "react-redux";
import {getProfyles, getStatus, ProfileType, setUserProfile} from "../redux/profile-reducer";
import {AppRootStateType} from "../redux/redux-store";
import Profiles from "./Profiles";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {usersApi} from "../../api/users_api";

export type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
    status:string
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {

        let userId = this.props.router.params.userId
        console.log(this.props.router)
        if (!userId) {
            userId = 2

        }

        this.props.getProfyles(userId)
        this.props.getStatus(userId)     // используется Thunk


    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'}/>
        }

        return <div>

            <Profiles {...this.props} profile={this.props.profile} />


        </div>
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({

    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status:state.profilePage.status
})


export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getProfyles,getStatus})(withRouter(ProfileContainer));