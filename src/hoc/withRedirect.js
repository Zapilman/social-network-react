import {Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";
import {getIsAuthSelector} from "../utilities/selectors";


const withRedirectHoc = (Component) => {
    return () => {
        const isAuth = useSelector(getIsAuthSelector);
        if (!isAuth) return <Redirect to='/login'/>
        return <Component isAuth={isAuth}/>
    }

}


export default withRedirectHoc;