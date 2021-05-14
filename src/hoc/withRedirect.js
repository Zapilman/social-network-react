import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const withRedirectHoc = (Component) => {
    const withRedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login'/>
        return <Component {...props}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(withRedirectComponent);

    return ConnectedAuthRedirectComponent;
}


export default withRedirectHoc;