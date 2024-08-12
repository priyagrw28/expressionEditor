import './App.css';
import Dropdown from './editor.js';
import React, {useState} from "react";
import FunctionEditor from './function.js';
import ExpressionEditor from './expression.js';

export default function App(){
  const[selected, setSelected] = useState("")
  return(
    <div className='App'>
      <Dropdown selected={selected} setSelected={setSelected}/>
      {selected === 'Function Editor' && <FunctionEditor/>}
      {selected === 'Expression Editor' && <ExpressionEditor />}
    </div>
  );
}


