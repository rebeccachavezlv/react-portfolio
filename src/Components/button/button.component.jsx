import React from 'react'

import './button.styles.scss'

const ButtonComponent = ({ title, effect, url }) => (
    <div className='buttonContainer'>
      {url ? <a href={url} target='__blank'>
              <div className={`singleButton ${effect}`}>
                <span>{title.toUpperCase()}</span>
              </div>
            </a>
            : <div className={`singleButton ${effect}`}>
                <span>{title.toUpperCase()}</span>
              </div>
      }
    </div>
);


export default ButtonComponent