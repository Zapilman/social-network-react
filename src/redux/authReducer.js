import {AuthAPI} from "../API/UserAPI";
import {setAuthorizedUser} from "./appReducer";

const AUTH_USER = 'authReducer/AUTH_USER';
const SET_ERROR = 'authReducer/SET_ERROR';

const initialState = {
    isAuth: false,
    error: null
};


export const setIsAuth = (isAuth) => ({type: AUTH_USER, isAuth});

export const setErrorAC = (error) => ({type: SET_ERROR, error})

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}


export const authMe = () => async (dispatch) => {
    const response = await AuthAPI.me()
    if (response.data.resultCode === 0) {
        dispatch(setIsAuth(true));
        dispatch(setAuthorizedUser(response.data.data.id, response.data.data.login));
    }
    return response.data.data.id;
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await AuthAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) dispatch(authMe())
    else dispatch(setErrorAC(response.data.messages));
}
export const logout = () => async (dispatch) => {
    const response = await AuthAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setIsAuth(false));
    }
}

export default authReducer