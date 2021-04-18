const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_NEW_PAGE = 'SET-NEW-PAGE';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const SET_LOADING_ICON = 'SET_LOADING_ICON';

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, id:userId});
export const setUsers = (users) => ({type:SET_USERS, users: users});
export const setNewPage = (currentPage) =>({type:SET_NEW_PAGE, currentPage: currentPage});
export const setTotalUsers = (totalUsers) => ({type:SET_TOTAL_USERS, totalUsers:totalUsers});
export const setLoadingIcon = (isLoading) => ({type:SET_LOADING_ICON, isLoading:isLoading});

const initialState = {
    users: [],
    pageSize: 4,
    totalUsers: 20,
    currentPage: 1,
    countPage(){return this.totalUsers/ this.pageSize},
    isLoading: true
};


const usersReducer = (state = initialState, action) => {

    switch (action.type){
        case TOGGLE_FOLLOW:{
            return {
                ...state,
                users: [...state.users.map(u => {
                    if(u.id == action.id){
                        return {
                            ...u,
                            isFallowed: !u.isFallowed
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
        case SET_NEW_PAGE:{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS:{
            return {
                ...state,
                totalUsers: action.totalUsers
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

export default usersReducer