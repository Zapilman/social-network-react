import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, getStatus} from "../../redux/profileReducer";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router";
import withRedirectHoc from "../../hoc/withRedirect";
import {compose} from "redux";
import {getAuthUserId, getPosts, getProfileSelector} from "../../utilities/selectors";


const ProfileContainer = (props) => {

    const dispatch = useDispatch();
    const id = props.match.params.userId;
    const [isLoading, setIsLoading] = useState(true);
    const posts = useSelector(getPosts);
    const profile = useSelector(getProfileSelector);
    const authUserId = useSelector(getAuthUserId);


    useEffect(() => {
        setIsLoading(true);

        const profilePromise = dispatch(getProfile((id) ? id : authUserId))
        const statusPromise = dispatch(getStatus((id) ? id : authUserId))

        Promise.all([profilePromise, statusPromise]).then(() => {
            setIsLoading(false);
        });
    }, [id, authUserId, dispatch])


    return isLoading ? <Preloader/> : <Profile posts={posts}
                                               profile={profile}
                                               authUserId={authUserId}
                                               id={id}/>;
}


export default compose(
    withRedirectHoc,
    withRouter,
)(ProfileContainer)
