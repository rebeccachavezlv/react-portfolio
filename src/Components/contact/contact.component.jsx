import { faDivide } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ContactForm from '../contact-form/contact-form.component'
import Social from '../social/social.component'

import './contact.styles.scss'

const Contact = () => (
<div className = 'contact'>
        <h1>CONTACT</h1>
        <ContactForm />
        <Social />
    </div>
)


export default Contact