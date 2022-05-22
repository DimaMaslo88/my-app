import React from 'react';
import style from './ProfileInfo.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/profile-reducer";
import Profiles, {ProfilesType} from "../Profiles";
import {Preloader} from "../../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType

}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div>

        <div className={style.descriptionBlock}>
            <img src={props.profile.photos.small}/>
            <div>{props.profile.aboutMe}</div>
            <span>{props.profile.contacts.vk}</span>
            <span>{props.profile.contacts.github}</span>
            <ProfileStatus/>


        </div>

    </div>

}

export default ProfileInfo;