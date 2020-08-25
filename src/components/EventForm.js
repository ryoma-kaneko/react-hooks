import React,{useState,useContext} from "react";
import AppContext from "../contexts/AppContexts"
import {CREATE_EVENT,DELETE_ALL_EVENT} from "../actions/index"
const EventFrom = () => {
    const {state,dispatch} = useContext(AppContext)
    const [title, setTilte] = useState("")
    const [body, setBody] = useState("");

    const addEvent = (e) => {
        e.preventDefault()
        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })
        setTilte("")
        setBody("")
    }
    const deleteAllEvents = (e) => {
        e.preventDefault()
        const result = window.confirm("全てのイベントを削除しますか？")
        if (result) {
            dispatch({ type: DELETE_ALL_EVENT });
        }
    }
    return (
        <>
            <h4>イベント作成フォーム</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="formEventTitle">タイトル</label>
                        <input
                            className="form-control"
                            id="formEventTitle"
                            value={title}
                            onChange={(e) => setTilte(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="formEventBody">ボディー</label>
                        <textarea
                            className="form-control"
                            id="formEventBody"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-primary" onClick={addEvent} disabled={title === "" || body === ""}>
                        イベントを作成する
                    </button>
                    <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
                </form>
        </>
    )
}

export default EventFrom;
