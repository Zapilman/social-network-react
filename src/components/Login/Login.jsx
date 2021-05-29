import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import s from '../Login/Login.module.css'
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {getAuthErrorSelector, getIsAuthSelector} from "../../utilities/selectors";


const Login = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const error = useSelector(getAuthErrorSelector);
    const isAuth = useSelector(getIsAuthSelector);

    const onSubmit = (data) => {
        dispatch(login(data.email, data.password, true));
    }

    if (isAuth) return <Redirect to={'/profile'}/>


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.input_container}>
                <input type="mail" required="" {...register('email')}/>
                <label>Email</label>
            </div>
            <div className={s.input_container}>
                <input type="password" required="" {...register('password')}/>
                <label>Password</label>
            </div>
            {error && <div>{error[0]}</div>}
            <div>
                <input className={s.btn} type="submit"/>
            </div>
        </form>
    )
}

export default Login;