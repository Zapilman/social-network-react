import m from './Messages.module.css'
import DialogItems from "./DialogItem/DialogItem";
import MessageItem from './MessageItem/MessageItem'
import React from "react";

let inputEl = React.createRef();


const Messages = (props) => {

    return (
        <div className={m.messages__wrapper}>
            <div className={m.dialogs}>
                {props.dialogs.map(d => <DialogItems key={d.id} name={d.name} dialogId={d.dialogId}></DialogItems>)}
            </div>
            <div className={m.messages}>
                <div className={m.messagesContent}>
                    {props.messages.map(m => <MessageItem key={m.id} message={m.message}
                                                          fromUser={m.fromUser}></MessageItem>)}
                </div>
                <input onInput={() => {
                    props.setInput(inputEl.current.value)
                }} ref={inputEl} type="text" value={props.newInputText}/>
                <button onClick={props.addMess}>Send</button>
            </div>
        </div>
    )
}

export default Messages;