import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/authReducer";
import {getAuthUserLogin} from "../../utilities/selectors";
import s from './Header.module.css'

const HeaderInfo = (props) => {
    return (
        <span>
            <span>{props.login}</span>
            <button onClick={() => {
                props.onClick();
            }}>Log Out
            </button>
        </span>
    )
}

const Header = () => {
    const login = useSelector(getAuthUserLogin);
    const dispatch = useDispatch();
    return (
        <header>
            <img className={s.logo} src="https://toppng.com/uploads/preview/cartoon-network-logo-vector-free-11574141709bqtnrmpzdd.png"
                 alt=""/>
            {login && <HeaderInfo login={login} onClick={()=>{dispatch(logout())}}/> }
        </header>
    )
}

export default Header;