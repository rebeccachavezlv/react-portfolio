import React from 'react';
import Social from '../social/social.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";
import SmoothLink from '../smooth-link/smooth-link.component'


import './hero.styles.scss'

const arrowDown = <FontAwesomeIcon icon={faArrowDown} />

const HeroComponent = () => (
    <div className='Hero'>
        <h1>Hi! My name is
        <span className='boldText'>
        {' Rebecca Chavez.'}
        </span><br></br>
        I'm a Web Developer.</h1>
        <div className='heroButtons'>
            <SmoothLink to='about' button='true' label='About' effect='colorButton'/>
            <SmoothLink to='portfolioContainer' button='true' label='Portfolio' effect='colorButton'/>
            <SmoothLink to='contact' button='true' label='Contact' effect='colorButton'/>
        </div>
        <Social />
        <div>
            <Link
                className='arrow-down'
                activeClass="active"
                to="about"
                spy={false}
                smooth={true}
                offset={0}
                duration={700}
            >{arrowDown}</Link>
        </div>
    </div>
)

export default HeroComponent