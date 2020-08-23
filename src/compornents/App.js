import React,{useReducer} from "react";
import reducer from "../reducers/index"
import "bootstrap/dist/css/bootstrap.min.css";
import EventForm from "./EventForm"
import Events from "./Events";
import AppContext from "../contexts/AppContext"
console.log(AppContext)
const App = () => {
  const [state,dispatch] = useReducer(reducer,[])
  return (
    <AppContext.Provider value = {"HEllo!!"}>
      <div className="container-fluid">
        <EventForm state = {state} dispatch = {dispatch}/>
        <Events state = {state} dispatch = {dispatch}/>
      </div>
    </AppContext.Provider>
  );
};
export default App;
