import React from 'react';
import ButtonComponent from '../button/button.component'

import './about.styles.scss'

import headshot from './Headshot-1.jpg'

const AboutComponent = () => (
    <div id='about' className='aboutContainer'>
        <h1>ABOUT ME</h1>
        <div className='mainInfo'>
            <div className='imageContainer'>
                <img src={headshot} alt=''/>
            </div>
            <div className='bioContainer'>
                <p>Hi! My name is Rebecca Chavez, and I'm an intermediate web developer with experience in HTML, CSS, JavaScript, React.js, and more!</p>
                <p>Having spent almost a decade in advertising and media production, the transition into the role of a web developer has been seamless, and exciting. As a lifetime learner that is consistently aiming to become better, I'm looking forward to finding out how I can help you and your team on your next project!</p>
                <div className='aboutButtons'>
                    <ButtonComponent effect='white-button' title='Portfolio'/>
                    <ButtonComponent effect='white-button' title='Contact'/>
                </div>
            </div>
        </div>
    </div>
)

export default AboutComponent