import {AuthAPI} from "../API/UserAPI";

const AUTH_USER = 'AUTH_USER';
const SET_ERROR = 'SET_ERROR';

const initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
    error: null
};


export const authMeAC = (id, email, login, isAuth) => ({
    type: AUTH_USER,
    data: {id, email, login, isAuth}
});

export const setErrorAC = (error) => ({
    type: SET_ERROR,
    error
})

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
    }
    return state;
}


export const authMe = () => {
    return (dispatch) => {
        return AuthAPI.me().then(response => {
            if (response.data.resultCode == 0) {
                let {id, email, login} = response.data.data;
                dispatch(authMeAC(id, email, login, true));
            }
        })
    };
}

export const login = (email, password, rememberMe) => (dispatch) => {
    AuthAPI.login(email, password, rememberMe).then(response => {
        (response.data.resultCode == 0)
            ? dispatch(authMe())
            : dispatch(setErrorAC(response.data.messages));
    });
}
export const logout = () => (dispatch) => {
    AuthAPI.logout().then(response => {
        if (response.data.resultCode == 0) {
            dispatch(authMeAC(null, null, null, false));
        }
    });
}

export default authReducer