const initialState = {
    profile: {
        name: 'Profile'
    },
    messages: {
        name: 'Messages'
    },
    news: {
        name: 'News'
    },
    music: {
        name: 'Music'
    },
    settings: {
        name: 'Settings'
    },
    friends: {
        name: 'Friends',

        friend1: {
            name: 'Clusha',
            img: 'https://www.vhv.rs/dpng/d/426-4263064_circle-avatar-png-picture-circle-avatar-image-png.png'
        },
        friend2: {
            name: 'Cianu',
            img: 'https://www.vhv.rs/dpng/d/426-4263064_circle-avatar-png-picture-circle-avatar-image-png.png'
        },
        friend3: {
            name: 'Jopa',
            img: 'https://www.vhv.rs/dpng/d/426-4263064_circle-avatar-png-picture-circle-avatar-image-png.png'
        }
    },
    users: {
        name: 'Users'
    }
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};


export default sidebarReducer;