import {authMe} from "./authReducer";
import {getProfile, getStatus} from "./profileReducer";

const SET_INIT = 'SET_INIT';

const initialState = {
    isInitialized: false
};


export const setInitAC = () => ({type: SET_INIT})


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT: {
            return {
                ...state,
                isInitialized: true
            }
        }

    }
    return state;
}


const promiseCreate = (promise) => new Promise(resolve => {
    promise.then(() => {
        resolve(true);
    })
});

export const appInit = () => {
    return (dispatch) => {
        const authPromise = promiseCreate(dispatch(authMe()));
        const profilePromise = promiseCreate(dispatch(getProfile()));
        Promise.all([authPromise, profilePromise]).then((values) => {
            dispatch(setInitAC());
        });

    };
}


export default authReducer