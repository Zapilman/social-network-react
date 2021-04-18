import m from './MessageItem.module.css'


const MessageItem = (props) => {

    if(!props.fromUser){
        return (
            <div className={m.message}>
                <img src="https://www.vhv.rs/dpng/d/426-4263064_circle-avatar-png-picture-circle-avatar-image-png.png" alt=""/>
                <span >{props.message}</span>
            </div>
        )
    }
    return <div className={`${m.message} ${m.fromUser}`}>
        <img src="https://www.vhv.rs/dpng/d/426-4263064_circle-avatar-png-picture-circle-avatar-image-png.png" alt=""/>
        <span >{props.message}</span>
    </div>
}



export default MessageItem;