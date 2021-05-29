import {createSelector} from "reselect";

//---------Profile
export const getPosts = (state) => {
    return state.profilePage.posts;
}
export const getProfileSelector = (state) => {
    return state.profilePage.profile;
}
export const getStatusSelector = (state) => {
    return state.profilePage.profile.status
}
//-------Authentication
export const getIsAuthSelector = (state) => {
    return state.auth.isAuth
}
export const getAuthErrorSelector = (state) => {
    return state.auth.error
}

//--------App
export const getIsInitialized = state => {
    return state.app.isInitialized;
}
export const getAuthUserId = state => {
    return state.app.id;
}
export const getAuthUserLogin = state => {
    return state.app.login;
}

//------Messages
export const getDialogs = state => {
    return state.messagePage.dialogs;
}
export const getMessages = state => {
    return state.messagePage.messages;
}

//------Users
export const getTotalUsers = state => {
    return state.usersPage.totalUsers;
}
export const getPageSize = state => {
    return state.usersPage.pageSize;
}
export const getCountPage = createSelector([getTotalUsers, getPageSize],
    (totalUsers, pageSize) => {
        return new Array((totalUsers / pageSize > 10) ? 10 : totalUsers / pageSize)
            .fill(0).map((a, i) => i + 1);
    })

export const getUsersSelector = state => {
    return state.usersPage.users;
}
export const getUsersFollowProcess = state => {
    return state.usersPage.usersFollowProcess;
}