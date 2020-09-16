import React from 'react';

import ButtonComponent from '../button/button.component'

import './gallery.styles.scss'

const GalleryItem = ({title, subtitle}) => (
    <div className='galleryItem'>
        <div className='galleryTitles'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
        <div className='galleryButtons'>
            <ButtonComponent title='Live'/>
            <ButtonComponent title='Code'/>
        </div>
    </div>
)

export default GalleryItem