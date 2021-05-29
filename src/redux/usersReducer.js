import UserAPI from "../API/UserAPI";

const TOGGLE_FOLLOW = 'userReducer/TOGGLE-FOLLOW';
const SET_USERS = 'userReducer/SET-USERS';
const SET_TOTAL_USERS = 'userReducer/SET-TOTAL-USERS';
const SET_DISABLED_PROCESS = 'userReducer/SET_DISABLED_PROCESS';

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, id: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers: totalUsers});
export const setDisabledProcess = (isFollow, userId) => ({
    type: SET_DISABLED_PROCESS,
    isFollow: isFollow, id: userId
});

const initialState = {
    users: [],
    pageSize: 4,
    totalUsers: 20,
    usersFollowProcess: []
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.id) {
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
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }
        case SET_DISABLED_PROCESS: {
            return {
                ...state,
                usersFollowProcess: action.isFollow
                    ? [...state.usersFollowProcess, action.id]
                    : [state.usersFollowProcess.filter(id => id !== action.id)]
            }
        }
        default: {
            return state;
        }
    }
}

export const getUsers = (pageNumber, pageSize) => async (dispatch) => {
    const response = await UserAPI.getUsers(pageNumber, pageSize);
    dispatch(setTotalUsers(response.data.totalCount));
    dispatch(setUsers(response.data.items));

}

const toggleFollow = async (userID, asyncProcess, dispatch) => {
    dispatch(setDisabledProcess(true, userID));
    const response = await asyncProcess(userID)
    if (!response.data.resultCode) {
        dispatch(toggleFollowAC(userID));
        dispatch(setDisabledProcess(false, userID))
    }
}

export const follow = (userID) => async (dispatch) => {
    await toggleFollow(userID, UserAPI.setFollowAPI, dispatch);
}

export const unfollow = (userID) => async (dispatch) => {
    await toggleFollow(userID, UserAPI.setUnfollowAPI, dispatch);
}
export default usersReducer;