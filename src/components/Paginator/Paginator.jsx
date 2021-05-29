import {getUsers} from "../../redux/usersReducer";
import s from "../Paginator/Paginator.module.css";
import React from "react";
import {useDispatch} from "react-redux";


const Paginator = ({countPage, setCurrentPage, pageSize, currentPage}) => {

    const dispatch = useDispatch();

    return (
        <div>{countPage.map(page => {
            return <span onClick={() => {
                setCurrentPage(page);
                dispatch(getUsers(page, pageSize))
            }} className={(currentPage === page)
                ? (`${s.pageLink} ${s.activePage}`)
                : s.pageLink}>{page}</span>
        })}</div>
    )
}

export default Paginator