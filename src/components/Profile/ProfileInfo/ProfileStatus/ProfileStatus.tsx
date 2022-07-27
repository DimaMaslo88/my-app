import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getStatus, setUserStatus, updateStatus} from "../../../redux/profile-reducer";
import {AppRootStateType} from "../../../redux/redux-store";

export const ProfileStatus = () => {

    const dispatch = useDispatch()
    const statusUser = useSelector<AppRootStateType, string>(state => state.profilePage.status)
    const userId=useSelector<AppRootStateType,number | null>(state=>state.auth.id)
    useEffect(() => {
        dispatch(getStatus(userId))
    },[userId])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let statusUser = e.currentTarget.value

        dispatch(setUserStatus(statusUser))

    }

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {

        setEditMode(true)
    }
    const deactivatedMode = () => {
        setEditMode(false)
        dispatch(updateStatus(statusUser))
    }
    const onPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === "Enter"){
            dispatch(setUserStatus(statusUser))
        }
    }

    return (

        <div>

            <div>
                {!editMode &&
                <span onDoubleClick={activateEditMode}>{`Status: ${statusUser}` || "No status"}</span>
                }
            </div>

            <div>
                {editMode &&
                <input onChange={onChangeHandler}
                       onBlur={deactivatedMode}
                       autoFocus={true}
                       value={statusUser}
                       onKeyPress={onPressHandler}

                />
                }
            </div>
        </div>
    );
};

