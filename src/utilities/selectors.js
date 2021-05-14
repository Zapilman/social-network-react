


export const getPosts = (state) => {
    return state.profilePage.posts;
}
export const getProfileSelector = (state) => {
    return state.profilePage.profile;
}
export const getIsLoading = (state) => {
    return state.profilePage.isLoading;
}
export const getStatusSelector = (state) => {
    return state.profilePage.profile.status
}
export const getIsAuthSelector = (state) => {
    return state.auth.isAuth
}

export const getIsInitialized = state => {
    return state.app.isInitialized;
}