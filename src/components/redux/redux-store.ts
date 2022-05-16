import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagePageReducer} from "./messagepage-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import thunk from "redux-thunk";
import {authReducer} from "./auth_reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messagePageReducer,
    users:usersReducer,
    auth:authReducer
})


let store=createStore(reducers,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof reducers>

export default store;

// @ts-ignore
window.store = store;