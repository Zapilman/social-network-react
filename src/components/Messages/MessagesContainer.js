import Messages from "./Messages";

import {connect} from "react-redux";
import {addMess, setInput} from "../../redux/messageReducer";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newInputText: state.messagePage.newInputText
    }
};


const MessagesContainer = connect(mapStateToProps, {setInput, addMess})(Messages);

export default MessagesContainer