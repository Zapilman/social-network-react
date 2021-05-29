import s from "./Users.module.css";
import React from "react";
import Paginator from "../Paginator/Paginator";
import User from "./User";


const Users = (props) => {

    return (
        <div className={s.users__wrapper}>
            <Paginator countPage={props.countPage}
                       setCurrentPage={props.setCurrentPage}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}/>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={s.user__item}>
                        <User id={u.id}
                              photos={u.photos}
                              name={u.name}
                              usersFollowProcess={props.usersFollowProcess}
                              followed={u.followed}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Users