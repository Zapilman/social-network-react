import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserId, getStatusSelector} from "../../../utilities/selectors";
import {changeStatus, getStatus} from "../../../redux/profileReducer";


const Status = (props) => {
    const statusStore = useSelector(getStatusSelector);
    const dispatch = useDispatch();
    const [statusLocal, setStatusLocal] = useState(statusStore);
    const [isStatusEdit, setIsStatusEdit] = useState(false);
    const userId = useSelector(getAuthUserId);

    useEffect(() => {
        setStatusLocal(statusStore);
    }, [statusStore]);
    useEffect(() => {
        dispatch(getStatus((props.id) ? props.id : userId))
    }, [])

    return (
        <div>
            {isStatusEdit
                ? <div>
                    <input onInput={e => {
                        setStatusLocal(e.target.value)
                    }}
                           autoFocus={false}
                           onBlur={() => {
                               dispatch(changeStatus(statusLocal));
                               setIsStatusEdit(false);
                           }}
                           type="text"
                           value={statusLocal}/>
                </div>
                : <div>
                    <p onDoubleClick={() => {
                        dispatch(getStatus())
                        setIsStatusEdit(true);
                    }}>{!statusLocal ? 'status...' : statusLocal}</p>
                </div>}
        </div>
    )
}

export default Status