import React,{useContext} from "react";
import AppContext from "../contexts/AppContexts"
import {DELETE_EVENT} from "../actions/index"
const Event = ({event}) => {
    const {dispatch} = useContext(AppContext)
    const id = event.id;
    const handleClickDeleteBtn = () =>{
        const result = window.confirm(`id = ${id}のイベントを削除しますか？`)
        if(result){
            dispatch({
                type: DELETE_EVENT,
                id: id
            });
        }
    }
    return (
        <tr>
            <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td>
                <button type="button" className="btn btn-danger" onClick={handleClickDeleteBtn}>
                    削除
                </button>
                </td>
        </tr>
    )
}
export default Event
