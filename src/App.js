import React,{useState} from "react"
import Animals from "./Animals"
import Movies from "./Movies"
import Wrestling from "./Wrestling"
import './App.css';
function App() {  
const [choice, setChoice] = useState(<Animals/>)
return (
  <div>
    <div id="btns">
    <button onClick={() => setChoice(<Animals/>)}>Animals</button>
    <button onClick={() => setChoice(<Movies/>)}>Movies</button>
    <button onClick={() => setChoice(<Wrestling/>)}>Wrestling</button>
    </div>
    {choice}
  </div>
)

}

export default App;
