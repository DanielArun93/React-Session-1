import React from 'react';
import './Input.css';

const input = (props) => (
    <div className="InputDiv">
        <label>{props.label}</label>
        <input type={props.type} name={props.name} onChange={props.change} value={props.value} placeholder="Enter task here"/>
    </div>
)

export default input;