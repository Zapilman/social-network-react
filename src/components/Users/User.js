import {NavLink} from "react-router-dom";
import {follow, unfollow} from "../../redux/usersReducer";
import React from "react";
import {useDispatch} from "react-redux";


const User = ({id, photos, name, usersFollowProcess, followed}) => {
    const dispatch = useDispatch();

    const toggleFollow = (followed, id) => {
        return followed ? unfollow(id) : follow(id);
    }

    return <>
        <NavLink to={`/profile/${id}`}>
            <img src={photos ? photos.small : ''} alt=""/>
            {name}
        </NavLink>
        <button disabled={usersFollowProcess.some(userId => userId === id)}
                onClick={() => {
                    dispatch(toggleFollow(followed, id));
                }}>{followed ? 'unfollow' : 'follow'}</button>
    </>
}

export default User