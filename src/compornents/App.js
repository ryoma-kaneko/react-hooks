import React,{useEffect,useReducer} from "react";
import reducer from "../reducers/index";
import "bootstrap/dist/css/bootstrap.min.css";
import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import AppContext from "../contexts/AppContext";
const APP_KEY = "appWithRedux";
const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);
// localStorageを使って状態を永続化させる処理
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  },[state])
  return (
    <AppContext.Provider value = {{state,dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};
export default App;
