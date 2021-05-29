import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk'
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers ,composeEnhancers(
    applyMiddleware(thunk)
));

export default store