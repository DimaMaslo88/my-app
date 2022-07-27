import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/profile-reducer";
import Profiles, {ProfilesType} from "../Profiles";
import {Preloader} from "../../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import style from './ProfileInfo.module.css'

type ProfileInfoType = {
    profile: ProfileType

}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div className={style.profileHeader}>

        <div className={style.descriptionBlock}>
            <img src={props.profile.photos.small} className={style.contentImg}/>
            <div>
             <h4> Info :  {props.profile.aboutMe}</h4>
            </div>
            <div>{props.profile.contacts.vk}</div>
            <div>{props.profile.contacts.github}</div>
            <ProfileStatus/>


        </div>

    </div>

}

export default ProfileInfo;