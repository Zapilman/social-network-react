import UserAPI from "../API/UserAPI";

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_NEW_PAGE = 'SET-NEW-PAGE';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const SET_LOADING_ICON = 'SET_LOADING_ICON';
const SET_DISABLED_PROCESS = 'SET_DISABLED_PROCESS';

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, id: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setNewPage = (currentPage) => ({type: SET_NEW_PAGE, currentPage: currentPage});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers: totalUsers});
export const setLoadingIcon = (isLoading) => ({type: SET_LOADING_ICON, isLoading: isLoading});
export const setDisabledProcess = (isFollow, userId) => ({
    type: SET_DISABLED_PROCESS,
    isFollow: isFollow, id: userId
});

const initialState = {
    users: [],
    pageSize: 4,
    totalUsers: 20,
    currentPage: 1,
    countPage() {
        return this.totalUsers / this.pageSize
    },
    isLoading: true,
    usersFollowProcess: []
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id == action.id) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return u;
                })]
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_NEW_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }
        case SET_LOADING_ICON: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case SET_DISABLED_PROCESS: {
            return {
                ...state,
                usersFollowProcess: action.isFollow
                    ? [...state.usersFollowProcess, action.id]
                    : [state.usersFollowProcess.filter(id => id != action.id)]
            }
        }
    }
    return state;
}

export const getUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setNewPage(pageNumber))
        dispatch(setLoadingIcon(true))
        UserAPI.getUsers(pageNumber, pageSize).then(response => {
            dispatch(setLoadingIcon(false));
            dispatch(setTotalUsers(response.data.totalCount))
            dispatch(setUsers(response.data.items));
        })
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(setDisabledProcess(true, userID));
        UserAPI.setFollowAPI(userID).then(response => {
            if (!response.data.resultCode) {
                dispatch(toggleFollow(userID));
                dispatch(setDisabledProcess(false, userID))
            }
        })
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(setDisabledProcess(true, userID));
        UserAPI.setUnfollowAPI(userID).then(response => {
            if (!response.data.resultCode) {
                dispatch(toggleFollow(userID));
                dispatch(setDisabledProcess(false, userID));
            }
        })
    }
}
export default usersReducer;