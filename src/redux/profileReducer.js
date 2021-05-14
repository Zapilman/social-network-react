import UserAPI, {ProfileAPI} from "../API/UserAPI";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_LOADING_ICON = 'SET_LOADING_ICON';
const SET_STATUS = 'SET_STATUS';
const GET_STATUS = 'GET_STATUS';


export const addPost = (postMessage) => ({type: ADD_POST, postMessage});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setLoadingIcon = (isLoading) => ({type: SET_LOADING_ICON, isLoading});
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export const getStatusAC = (status) => ({type: GET_STATUS, status});

const initialState = {
    posts: [
        {message: 'asd', likeCount: '13'},
        {message: 'It\'s my second post', likeCount: '24'}
    ],
    profile: {
        fullName: 'cho',
        userId: null,
        status: ''
    },
    isLoading: true
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
        case SET_LOADING_ICON: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                profile: {...state.profile, status: action.status}
            }
        }
        case GET_STATUS: {
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

export const getProfile = (userID) => {
    return (dispatch) => {
        let userId = userID;
        if (!userId) {
            userId = 16488;
        }
        return UserAPI.getProfileAPI(userId).then(response => {
            dispatch(setProfile(response.data));
            dispatch(setLoadingIcon(false));
        })
    }
}

export const setStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.setStatus(status).then(() => {
            dispatch(setStatusAC(status));
        });
    }

}

export const getStatus = () => {
    return (dispatch) => {
        ProfileAPI.getStatus(16488).then(response => {
                dispatch(getStatusAC(response.data))
            }
        )
    }
}

export default profileReducer