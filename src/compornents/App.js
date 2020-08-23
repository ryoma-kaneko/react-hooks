import React,{useState,useReducer} from "react";
import reducer from "../reducers/index"
import "bootstrap/dist/css/bootstrap.min.css";
import Event from "./Event";
const App = () => {
  const [state,dispatch] = useReducer(reducer,[])
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const addEvent = (e) => {
    e.preventDefault()
    dispatch(
      {
        type: 'CREATE_EVENT',
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
    if(result){
      dispatch({
        type: "DELETE_ALL_EVENTS"
      })
    }
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>
        {/* titleまたは、bodyの入力がなかった場合は、イベントを作成しない様にdisabledで制御する */}
        <button className="btn btn-primary" onClick={addEvent} disabled = {title === "" || body === ""}>
          イベントを作成する
        </button>
        {/* イベントの配列（state.length）がからの場合は、イベントを削除できない様にdisabledで制御する */}
        <button className="btn btn-danger" onClick={deleteAllevents} disabled = {state.length === 0}>
          全てのイベントを削除する
        </button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event,index) => {
            return (
              <Event key = {index} event = {event} dispatch={dispatch}/>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
