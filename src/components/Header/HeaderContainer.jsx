import {connect} from "react-redux";
import React from 'react'
import Header from "./Header";
import {authMe} from "../../redux/authReducer";


const HeaderContainer = (props) => {
    return <Header login={props.login}/>
}

const setStateToProps = (state) => ({
    login: state.auth.login
})

export default connect(setStateToProps, {authMe})(HeaderContainer);