import React from 'react';
import Social from '../social/social.component'
import ButtonComponent from '../button/button.component'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './hero.styles.scss'

const HeroComponent = () => (
    <div className='Hero'>
        <h1>Hi! My name is
        <span className='boldText'>
        {' Rebecca Chavez.'}
        </span><br></br>
        I'm a Web Developer.</h1>
        <div className='heroButtons'>
            <AnchorLink href='#about' style={{textDecoration: 'none', outline:'none'}}><ButtonComponent effect='colorButton' title='About Me'/></AnchorLink>
            <AnchorLink href='#portfolio' style={{textDecoration: 'none', outline:'none'}}><ButtonComponent effect='colorButton' title='Portfolio'/></AnchorLink>
            <ButtonComponent effect='colorButton' title='Contact'/>
        </div>
        <Social />
    </div>
)

export default HeroComponent