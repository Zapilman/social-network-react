import m from './MessageItem.module.css'


const MessageItem = ({fromUser, message}) => {
    return <div className={`${m.message} ${(!fromUser) ? m.fromUser : null}`}>
        <img src="https://www.vhv.rs/dpng/d/426-4263064_circle-avatar-png-picture-circle-avatar-image-png.png" alt=""/>
        <span >{message}</span>
    </div>
}



export default MessageItem;