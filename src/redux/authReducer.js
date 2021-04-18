const AUTH_USER = 'AUTH_USER';

const initialState = {
    login: null,
    id: null,
    email: null
};


export const authMe = (id, email, login) => {
    debugger;
    return {type: AUTH_USER, data: {id, email, login}};
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER: {
            return {
                ...state,
                ...action.data
            }
        }
    }
    return state;
}

export default authReducer