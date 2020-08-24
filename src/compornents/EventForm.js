// form部分の作成
import React,{useState,useContext} from "react";
import { 
    CREATE_EVENT,
    DELETE_ALL_EVENTS,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from "../actions/index"
import AppContext from "../contexts/AppContext";
import {timeCurrentIso8601} from "../utils"
const EventForm = () => {
    const {state,dispatch} = useContext(AppContext)
    
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
        dispatch({
            type: ADD_OPERATION_LOG,
            description: "イベントを作成しました。",
            operatedAt: timeCurrentIso8601()
        });
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
            dispatch({
                type: ADD_OPERATION_LOG,
                description: "全てのイベントを削除しました。",
                operatedAt: timeCurrentIso8601
            })
        }
    }
    const deleteAllOperationLogs = (e) => {
        e.preventDefault()
        const result = window.confirm("全ての操作ログを削除してもよろしいですか")
        if(result){
            dispatch({
                type: DELETE_ALL_OPERATION_LOGS
            })
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
              onChange={(e) => setTitle(e.target.value)}
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
          {/* titleまたは、bodyの入力がなかった場合は、イベントを作成しない様にdisabledで制御する */}
          <button
            className="btn btn-primary"
            onClick={addEvent}
            disabled={title === "" || body === ""}
          >
            イベントを作成する
          </button>
          {/* イベントの配列（state.length）がからの場合は、イベントを削除できない様にdisabledで制御する */}
          <button
            className="btn btn-danger"
            onClick={deleteAllevents}
            disabled={state.events.length === 0}
          >
            全てのイベントを削除する
          </button>
          <button
            className="btn btn-danger"
            onClick={deleteAllOperationLogs}
            disabled={state.operationLogs.length === 0}
          >
            全ての操作ログを削除する
          </button>
        </form>
      </>
    );
}
export default EventForm

