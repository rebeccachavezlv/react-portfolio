import React from 'react';
import Social from '../social/social.component'
import ButtonComponent from '../button/button.component'

import './hero.styles.scss'

const HeroComponent = () => (
    <div className='Hero'>
        <h1>Hi! My name is
        <span className='boldText'>
        {' Rebecca Chavez.'}
        </span><br></br>
        I'm a Web Developer.</h1>
        <div className='heroButtons'>
            <a href='#about' style={{textDecoration: 'none'}}><ButtonComponent effect='colorButton' title='About Me'/></a>
            <ButtonComponent effect='colorButton' title='Portfolio'/>
            <ButtonComponent effect='colorButton' title='Contact'/>
        </div>
        <Social />
    </div>
)

export default HeroComponent