import React from 'react'

import './button.styles.scss'

const ButtonComponent = ({ title, effect, onClick}) => (
    <div className='buttonContainer' onClick={onClick}>
      <button className={`singleButton ${effect}`}><span>{title.toUpperCase()}</span></button>
    </div>
);


export default ButtonComponent