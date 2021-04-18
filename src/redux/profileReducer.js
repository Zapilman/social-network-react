const ADD_POST = 'ADD-POST';
const PROFILE = 'PROFILE';
const REFRESH_INPUT_POST = 'REFRESH-INPUT-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_LOADING_ICON = 'SET_LOADING_ICON';


export const addPost = () => ({type: ADD_POST});
export const createPostType = () => ({inputType: PROFILE});
export const setInput = (text, type) => ({type: REFRESH_INPUT_POST, text: text});
export const setProfile = (profile) => ({type: SET_PROFILE, profile: profile});
export const setLoadingIcon = (isLoading) => ({type:SET_LOADING_ICON, isLoading:isLoading});

const initialState = {
    posts: [
        {message: 'asd', likeCount: '13'},
        {message: 'It\'s my second post', likeCount: '24'}
    ],
    newInputText: '',
    profile: {
        fullName:'cho',
        userId: null
    },
    isLoading: true
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newInputText) {
                return {
                    ...state,
                    newInputText: '',
                    posts: [...state.posts, {message: state.newInputText, likeCount: '2'}]
                }
            }
            break;
        }
        case REFRESH_INPUT_POST: {
            return {
                ...state,
                newInputText: action.text
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_LOADING_ICON:{
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
    }

    return state;
}

export default profileReducer