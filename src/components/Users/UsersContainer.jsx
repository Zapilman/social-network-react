import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/usersReducer";
import React, {useEffect, useState} from "react";
import Users from "./Users";
import {getCountPage, getPageSize, getUsersFollowProcess, getUsersSelector} from "../../utilities/selectors";
import Preloader from "../Preloader/Preloader";
import withRedirectHoc from "../../hoc/withRedirect";

const UsersContainer = () => {
    const dispatch = useDispatch();
    const pageSize = useSelector(getPageSize);
    const countPage = useSelector(getCountPage);
    const users = useSelector(getUsersSelector);
    const usersFollowProcess = useSelector(getUsersFollowProcess);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        Promise.all([dispatch(getUsers(currentPage, pageSize))]).then(() => {
            setIsLoading(false)
        })
    }, [currentPage, dispatch, pageSize])

    return (isLoading) ? <Preloader/> : <Users setCurrentPage={setCurrentPage}
                                               currentPage={currentPage}
                                               countPage={countPage}
                                               users={users}
                                               usersFollowProcess={usersFollowProcess}/>
}

export default withRedirectHoc(UsersContainer);