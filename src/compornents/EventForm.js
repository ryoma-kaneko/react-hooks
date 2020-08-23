// form部分の作成
import React,{useState} from "react";
import { CREATE_EVENT,DELETE_ALL_EVENTS} from "../actions/index"
const EventForm = ({state,dispatch}) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const addEvent = (e) => {
        e.preventDefault()
        dispatch(
            {
                type: CREATE_EVENT,
                title,
                body
            }
        )
        setTitle("")
        setBody("")
    }
    const deleteAllevents = (e) => {
        e.preventDefault()
        const result = window.confirm("全てのイベントを削除してもよろしいですか？")
        if (result) {
            dispatch({
                type: DELETE_ALL_EVENTS
            })
        }
    }
    return(
        <>
            <h4>イベント作成フォーム</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="formEventTitle">タイトル</label>
                        <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formEventBody">ボディー</label>
                        <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
                    </div>
                    {/* titleまたは、bodyの入力がなかった場合は、イベントを作成しない様にdisabledで制御する */}
                    <button className="btn btn-primary" onClick={addEvent} disabled={title === "" || body === ""}>
                        イベントを作成する
                    </button>
                    {/* イベントの配列（state.length）がからの場合は、イベントを削除できない様にdisabledで制御する */}
                    <button className="btn btn-danger" onClick={deleteAllevents} disabled={state.length === 0}>
                        全てのイベントを削除する
                    </button>
                </form>
        </>
    )
}
export default EventForm

