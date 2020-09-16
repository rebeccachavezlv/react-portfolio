import React from 'react'

import './button.styles.scss'

const ButtonComponent = ({ title }) => (
    <div className='buttonContainer'>
      <div className='singleButton hvr-fade'><span>{title.toUpperCase()}</span></div>
    </div>
);


export default ButtonComponent