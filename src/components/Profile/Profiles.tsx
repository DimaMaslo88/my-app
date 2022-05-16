import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Post/MyPostsContainer";
import {ProfileType} from '../redux/profile-reducer';

export type ProfilesType = {
    profile: ProfileType

}

const Profiles = (props: ProfilesType) => {


    return <div>

        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>

    </div>

}
export default Profiles;