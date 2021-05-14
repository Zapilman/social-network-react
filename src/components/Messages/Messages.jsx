import m from './Messages.module.css'
import DialogItems from "./DialogItem/DialogItem";
import MessageItem from './MessageItem/MessageItem'
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addMess} from "../../redux/messageReducer";


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
                <MessageForm/>
            </div>
        </div>
    )
}

const MessageForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();


    const onSubmit = (data) => {
        dispatch(addMess(data.messageText))
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('messageText', {
            required: true,
            minLength: 0,
            maxLength: 30
        })} />
        <input type="submit" value={'add message'}/>
    </form>
}

export default Messages;