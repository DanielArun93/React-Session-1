import React from 'react';
import './Button.css';

const button = (props) => (
    
    <button
        className={props.btntype} onClick={props.click}>
        {props.children}
    </button>
  
)

export default button;