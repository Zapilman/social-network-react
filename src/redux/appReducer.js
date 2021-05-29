import {authMe} from "./authReducer";
import {getProfile} from "./profileReducer";

const SET_INIT = 'appReducer/SET_INIT';
const SET_AUTH_USER = 'appReducer/SET_AUTH_USER'

const initialState = {
    isInitialized: false,
    id: null,
    login: null
};


export const setInitAC = () => ({type: SET_INIT})
export const setAuthorizedUser = (id, login) => ({type: SET_AUTH_USER, id, login})


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT: {
            return {
                ...state,
                isInitialized: true
            }
        }
        case SET_AUTH_USER: {
            return {
                ...state,
                id: action.id,
                login: action.login
            }
        }
        default: {
            return state;
        }

    }
}


export const appInit = () => {
    return (dispatch) => {
        dispatch(authMe()).then((id) => {
            if (!id) {
                dispatch(setInitAC());
                return;
            }
            dispatch(getProfile(id)).then(() => {
                dispatch(setInitAC());
            })
        })
    };
}


export default authReducer