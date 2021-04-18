const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE = 'MESSAGE';
const REFRESH_INPUT_MESSAGE = 'REFRESH-INPUT-MESSAGE';


export const addMess = () => ({type: ADD_MESSAGE});
export const setInput = (text, type) => ({type: REFRESH_INPUT_MESSAGE, text: text});

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
    newInputText: ''
};


const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            if (state.newInputText) {
                return {
                    ...state,
                    newInputText: '',
                    messages: [...state.messages, {message: state.newInputText, fromUser: true}]
                }
            }
            break;
        }
        case REFRESH_INPUT_MESSAGE: {
            return {
                ...state,
                newInputText: action.text
            }
        }
    }

    return state;
}

export default messageReducer