import React, {useState} from 'react';
import './MyFirstProject.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profiles";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {UsersFunctionalComponent} from "./components/Users/UsersFunctionalComponent";
import userPhoto from "./images/user.png";


const MyFirstProject = () => {
    console.log("MyFirstProject rendering")


    return (

        <div className='app-wrapper'>


            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>

                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/profile' element={<ProfileContainer/>}/>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<UsersFunctionalComponent/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/404' element={<h1>404: PAGE NOT FOUND</h1>}/>
                    <Route path='*' element={<Navigate to={'/404'}/>}/>

                </Routes>

            </div>

        </div>


    )
        ;
}


export default MyFirstProject;
