
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return (
        <header>
            <img src="https://toppng.com/uploads/preview/cartoon-network-logo-vector-free-11574141709bqtnrmpzdd.png" alt=""/>
            {props.login ? props.login :<NavLink className={s.login} to='login/'>asd</NavLink> }
        </header>
    )
}

export default Header;