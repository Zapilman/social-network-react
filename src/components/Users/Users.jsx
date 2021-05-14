import s from "./Users.module.css";
import React from "react";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pages = [];

    for (let i = 1; i <= props.countPage; i++) {

        if (i > 10) {
            break;
        }
        pages.push(i);
    }
    return (
        <div className={s.users__wrapper}>
            <div>{props.isLoading ? <Preloader/> : null}</div>
            <div>{pages.map(page => {
                return <span onClick={() => {
                    props.OnPageChanged(page)
                }} className={props.currentPage == page
                    ? (`${s.pageLink} ${s.activePage}`)
                    : s.pageLink}>{page}</span>
            })}</div>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={s.user__item}>
                        <NavLink to={`/profile/${u.id}`}>
                            <div>
                                <img src={u.photos ? u.photos.small : ''} alt=""/>
                            </div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </NavLink>
                        {u.followed
                            ? (<button disabled={props.usersFollowProcess.some(id => id == u.id)}
                                       onClick={() => {props.unfollow(u.id)}}>unfollow</button>)
                            : (<button disabled={props.usersFollowProcess.some(id => id == u.id)}
                                       onClick={() => {props.follow(u.id)}}>follow</button>)
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Users