import UserAPI, {ProfileAPI} from "../API/UserAPI";

const ADD_POST = 'profileReducer/ADD-POST';
const SET_PROFILE = 'profileReducer/SET_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';


export const addPost = (postMessage) => ({type: ADD_POST, postMessage});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setStatusAC = (status) => ({type: SET_STATUS, status});

const initialState = {
    posts: [
        {message: 'asd', likeCount: '13'},
        {message: 'It\'s my second post', likeCount: '24'}
    ],
    profile: {
        fullName: 'cho',
        userId: null,
        status: ''
    }
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {message: action.postMessage, likeCount: '2'}]
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                profile: {...state.profile, status: action.status}
            }
        }
        default: {
            return state;
        }
    }
}

export const getProfile = (userID) => async (dispatch) => {
    const response = await UserAPI.getProfileAPI(userID)
    dispatch(setProfile(response.data));
    return response;
}

export const changeStatus = (status) => async (dispatch) => {
    const response = await ProfileAPI.setStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
}

export const getStatus = (userID) => async (dispatch) => {
    const response = await ProfileAPI.getStatus(userID)
    dispatch(setStatusAC(response.data));
    return true;
}

export default profileReducer