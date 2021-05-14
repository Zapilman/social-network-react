import {useForm} from "react-hook-form";
import {connect, useDispatch, useSelector} from "react-redux";
import s from '../Login/Login.module.css'
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {getIsAuthSelector} from "../../utilities/selectors";


const Login = (props) => {
    const isAuth = useSelector(getIsAuthSelector);
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(login(data.email, data.password, true));
    }

    if(isAuth) return <Redirect to={'/profile'} />


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.input_container}>
                <input type="mail" required="" {...register('email')}/>
                <label>Email</label>
            </div>
            <div className={s.input_container}>
                <input type="password" required="" {...register('password')}/>
                <label>Password</label>
            </div>
            {props.error && <div>{props.error[0]}</div>}
            <div>
                <input className={s.btn} type="submit"/>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => ({
    error : state.auth.error
})
export default connect(mapStateToProps, null)(Login);