import React from "react";

const Event = (props) => {
    const handleClickDelete = (id) => {
        const result = window.confirm(`イベント(id = ${id})を本当に削除してもよろしいですか？`)
        if(result){
            props.dispatch({ type: "DELETE_EVENT", id })
        }
    }
    return (
        <tr>
            <td>{props.event.id}</td>
            <td>{props.event.title}</td>
            <td>{props.event.body}</td>
            <td><button type="button" className="btn btn-danger" onClick={() => handleClickDelete(props.event.id)}>削除</button></td>
        </tr>
    )
}
export default Event;
