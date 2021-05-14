import * as axios from "axios";


const initApi = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4ecd7864-de3a-4253-b715-4defb2d195ed'
    }
});

const UserAPI = ({
    getUsers(currentPage = 1, pageSize = 10) {
        return initApi.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    setFollowAPI(userID) {
        return initApi.post(`follow/${userID}`)
    },
    setUnfollowAPI(userID) {
        return initApi.delete(`follow/${userID}`)
    },
    getProfileAPI(userID) {
        return ProfileAPI.getProfile(userID);
    }
});


export const AuthAPI = ({
    me() {
        return initApi.get('/auth/me');
    },
    login(email,password, rememberMe) {
        return initApi.post('/auth/login', {email, password, rememberMe});
    },
    logout() {
        return initApi.delete('/auth/login');
    }
});

export const ProfileAPI = ({
    getProfile(userID) {
        return initApi.get(`/profile/${userID}`);
    },
    getStatus(userID) {
        return initApi.get(`profile/status/${userID}`);
    },
    setStatus(status) {
        return initApi.put(`profile/status`, {status: status});
    }
});


export default UserAPI