import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStatusSelector} from "../../../utilities/selectors";
import {getStatus, setStatus} from "../../../redux/profileReducer";



const Status = () => {
    const statusStore = useSelector(getStatusSelector);
    const dispatch = useDispatch();
    const [statusLocal, setStatusLocal] = useState(statusStore);
    const [isStatusEdit, setIsStatusEdit] = useState(false);

    useEffect(()=>{
        setStatusLocal(statusStore);
    }, [statusStore]);
    useEffect(()=>{
        dispatch(getStatus())
    }, [])

    return (
        <div>
            {isStatusEdit
                ? <div>
                    <input onInput={e=>{setStatusLocal(e.target.value)}}
                           autoFocus={false}
                           onBlur={()=>{
                               dispatch(setStatus(statusLocal));
                               setIsStatusEdit(false);
                           }}
                           type="text"
                           value={statusLocal}/>
                </div>
                : <div>
                    <p onDoubleClick={()=>{
                        dispatch(getStatus())
                        setIsStatusEdit(true);
                    }}>{!statusLocal ? 'status...' : statusLocal}</p>
                </div>}
        </div>
    )
}

export default Status