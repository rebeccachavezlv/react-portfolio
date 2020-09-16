import React from 'react'

import './button.styles.scss'

const ButtonComponent = ({ title, effect }) => (
    <div className='buttonContainer'>
      <div className={`singleButton ${effect}`}><span>{title.toUpperCase()}</span></div>
    </div>
);


export default ButtonComponent