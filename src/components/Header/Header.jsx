import s from './Header.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/authReducer";
import {useEffect} from "react";
import {appInit} from "../../redux/appReducer";
import Preloader from "../Preloader/Preloader";

const HeaderInfo = (props) => {
    const dispatch = useDispatch();
    return (
        <div>
            <span>{props.login}</span>
            <button onClick={() => {
                dispatch(logout())
            }}>Log Out
            </button>
        </div>
    )
}

const Header = (props) => {

    return (
        <header>
            <img src="https://toppng.com/uploads/preview/cartoon-network-logo-vector-free-11574141709bqtnrmpzdd.png"
                 alt=""/>
            {props.login ? <HeaderInfo login={props.login}/> : <NavLink className={s.login} to='login/'>Login</NavLink>}
        </header>
    )
}

export default Header;