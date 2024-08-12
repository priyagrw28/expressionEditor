import React from 'react';
import './/App.css';

function ExpressionEditor() {
  return (
    <div className="box">
      <h3 className="header"> Expression Editor </h3>
      <div className="variable">Variables: </div>
      <div className="function"> Operator </div>
      <div className="num"> Numbers: </div>
      <button className="button">BackSpace</button>
      <button className="button">Add</button>
      <div className="exp"> Obtained Expression:</div>
      <button className="button">Calculate</button>
      <div className="result"> Result: </div>
    </div>
  );
}

export default ExpressionEditor;
