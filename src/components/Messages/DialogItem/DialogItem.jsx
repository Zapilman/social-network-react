import m from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItems = ({dialogId, name}) => {
    return <div className={m.dialog}>
        <img src="https://www.vhv.rs/dpng/d/426-4263064_circle-avatar-png-picture-circle-avatar-image-png.png" alt=""/>
        <NavLink to={'/messages/' + dialogId}>{name}</NavLink>
    </div>
}

export default DialogItems;