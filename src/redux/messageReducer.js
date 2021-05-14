const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE = 'MESSAGE';
const REFRESH_INPUT_MESSAGE = 'REFRESH-INPUT-MESSAGE';


export const addMess = (messageText) => ({type: ADD_MESSAGE, messageText});

const initialState = {
    dialogs: [
        {name: 'Clusha', dialogId: '1'},
        {name: 'Jopa', dialogId: '2'},
        {name: 'Cianu', dialogId: '3'},
        {name: 'John', dialogId: '4'},
        {name: 'Sveta', dialogId: '5'}
    ],
    messages: [
        {message: 'hello!', fromUser: true},
        {message: 'Hi!', fromUser: false},
        {message: 'How are you?!', fromUser: true},
        {message: 'Chotk0, and you?!', fromUser: false},
        {message: 'Normas!', fromUser: true}
    ],
};


const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {message: action.messageText, fromUser: true}]
            }
            break;
        }

    }

    return state;
}

export default messageReducer