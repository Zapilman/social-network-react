const ADD_MESSAGE = 'messageReducer/ADD-MESSAGE';


export const addMess = (messageText) => ({type: ADD_MESSAGE, messageText});

const initialState = {
    dialogs: [
        {name: 'Peter', dialogId: '1'},
        {name: 'Sara', dialogId: '2'},
        {name: 'Kate', dialogId: '3'},
        {name: 'John', dialogId: '4'},
        {name: 'George', dialogId: '5'}
    ],
    messages: [
        {message: 'hello!', fromUser: true},
        {message: 'Hi!', fromUser: false},
        {message: 'How are you?!', fromUser: true},
        {message: 'Fine, and you?!', fromUser: false},
        {message: 'Black lives matter!', fromUser: true}
    ],
};


const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {message: action.messageText, fromUser: true}]
            }
        }
        default: {
            return state;
        }

    }
}

export default messageReducer