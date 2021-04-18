import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, setInput, setLoadingIcon, setProfile} from "../../redux/profileReducer";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data);
                this.props.setLoadingIcon(false);
            });
    }

    render() {
        return this.props.isLoading ? <Preloader/> : <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    newInputText: state.profilePage.newInputText,
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading

});


export default connect(mapStateToProps, {setProfile, addPost,
    setInput, setLoadingIcon})(withRouter(ProfileContainer))