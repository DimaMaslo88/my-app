import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setUserStatus, updateStatus} from "../../../redux/profile-reducer";
import {AppRootStateType} from "../../../redux/redux-store";

export const ProfileStatus = () => {

    const dispatch = useDispatch()
    const statusUser = useSelector<AppRootStateType, string>(state => state.profilePage.status)

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

    return (

        <div>

            <div>
                {!editMode &&
                <span onDoubleClick={activateEditMode}>{statusUser || "No status"}</span>
                }
            </div>

            <div>
                {editMode &&
                <input onChange={onChangeHandler}
                       onBlur={deactivatedMode}
                       autoFocus={true}
                       value={statusUser}

                />
                }
            </div>
        </div>
    );
};

