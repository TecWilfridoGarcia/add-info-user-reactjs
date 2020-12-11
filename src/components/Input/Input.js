import React from 'react'
import './styles.scss';

export default function Input({placeholder, icon, type, onChange, value, name}) {
    return (
      <div className="group-input">
        <div className="icon-field">
        <img className="image" src={icon} />
        </div>
        <input className="input" type={type} name={name} 
        onChange={onChange} 
        value={value} 
        required placeholder={placeholder} />
      </div>
 
    )
}
