import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setStatus} from "../../redux/profileReducer";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router";
import withRedirectHoc from "../../hoc/withRedirect";
import {compose} from "redux";
import {getIsLoading, getPosts, getProfileSelector} from "../../utilities/selectors";


const ProfileContainer = (props) => {
    return props.isLoading ? <Preloader/> : <Profile {...props}/>;
}

let mapStateToProps = (state) => ({
    posts: getPosts(state),
    profile: getProfileSelector(state),
    isLoading: getIsLoading(state),
});

export default compose(
    withRedirectHoc,
    withRouter,
    connect(mapStateToProps,
        {getProfile, setStatus, getStatus})
)(ProfileContainer)
