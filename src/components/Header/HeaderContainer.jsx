import {connect} from "react-redux";
import React from 'react'
import Header from "./Header";
import axios from "axios";
import {authMe} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            let {id, email, login} = response.data.data;
            this.props.authMe(id, email, login)
        });
    }


    render() {
        return <Header login={this.props.login}/>
    }
}

const setStateToProps = (state) => ({
    login: state.auth.login,
    id: state.auth.id,
    email: state.auth.id
})

export default connect(setStateToProps, {authMe})(HeaderContainer)