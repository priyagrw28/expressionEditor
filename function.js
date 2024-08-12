import React from 'react';
import './/App.css';
import  {id,tagactive,tagname,tagtype,tagdatatype,tagdatalength,tagvalue,samplingseries,samplingcount,samplingtime,calcmethodname,parameterlist,ouparameterlist,compilestatus,compileerror,remarks,toc,tom,mop} from './data.json';



function functionEditor() {
  return (
    <div className="box">
      <h2 className="header">Function Editor</h2>
      <div className="variable">Variables: </div>
      <div className="function"> Functions: </div>
      <button className="button">BackSpace</button>
      <button className="button">Add</button>
      <div className="exp">Obtained Expressions:</div>
      <button className="button">Calculate</button>
      <div className="result"> Result: </div>
    </div>
  );
}

export default functionEditor;