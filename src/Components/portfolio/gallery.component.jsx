import React from 'react';

import ButtonComponent from '../button/button.component'

import './gallery.styles.scss'

const GalleryItem = ({title, subtitle, webUrl, codeUrl }) => (
    <div className='galleryItem'>
        <div className='galleryTitles'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
        <div className='galleryButtons'>
            {webUrl ? <ButtonComponent title='Live' url={webUrl}/> : null}
            {codeUrl ? <ButtonComponent title='Code' url={codeUrl}/> : null}
        </div>
    </div>
)

export default GalleryItem