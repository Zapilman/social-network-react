import m from './Messages.module.css'
import DialogItems from "./DialogItem/DialogItem";
import MessageItem from './MessageItem/MessageItem'
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addMess} from "../../redux/messageReducer";
import withRedirectHoc from "../../hoc/withRedirect";
import {getDialogs, getMessages} from "../../utilities/selectors";


const Messages = () => {
    const dialogs = useSelector(getDialogs)
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    return (
        <div className={m.messages__wrapper}>
            <div className={m.dialogs}>
                {dialogs.map(d => <DialogItems key={d.id}
                                               name={d.name}
                                               dialogId={d.dialogId}/>)}
            </div>
            <div className={m.messages}>
                <div className={m.messagesContent}>
                    {messages.map(m => <MessageItem key={m.id}
                                                    message={m.message}
                                                    fromUser={m.fromUser}/>)}
                </div>
                <MessageForm onSubmit={(data)=>{dispatch(addMess(data.messageText))}}/>
            </div>
        </div>
    )
}

const MessageForm = (props) => {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        props.onSubmit(data);
        reset();
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

export default withRedirectHoc(Messages);