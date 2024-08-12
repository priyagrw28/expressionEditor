import React, {useState} from "react";
import './App.css';

function Dropdown({selected, setSelected}){
    const[isActive,setIsActive] = useState(false);
    const options=['Select Editor','Function Editor','Expression Editor'];
    return(
        <div className="dropdown">
            <header className="header">Choose Editors:</header>
            <button className="dropdownBtn" onClick={() => setIsActive(!isActive)}>{selected ? selected : 'Choose Editor'}</button> 
            {isActive && (
            <div className="dropdownContent">
                {options.map(option => (
                    <button className="dropdownbtn" 
                        key={option}
                        onClick={() => {
                        setSelected(option)
                        setIsActive(false)
                    }}> {option} </button>
                ))}
            </div>
            )}
        </div>
    );
  }

  export default Dropdown;