import React from 'react';

import './portfolio.styles.scss'

import GalleryItem from './gallery.component'

class Portfolio extends React.Component {
    constructor(){
        super();

        this.state = {
            items: [
                {
                    title: 'ISS Finder',
                    subtitle: 'Subtitle 1',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: '',
                    webUrl: '',
                    id: 1
                },
                {
                    title: 'CSS Generator',
                    subtitle: 'Subtitle 2',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: '',
                    webUrl: '',
                    id: 2
                },
                {
                    title: 'RoboFriends',
                    subtitle: 'Subtitle 3',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: '',
                    webUrl: '',
                    id: 3
                },
                {
                    title: 'Black Raven Films',
                    subtitle: 'Subtitle 4',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: '',
                    webUrl: '',
                    id: 4
                },
                {
                    title: 'Title 5',
                    subtitle: 'Subtitle 5',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: '',
                    webUrl: '',
                    id: 5
                }
            ]
          };
        }

    render() {
        return (
            <div className='portfolioContainer'>
                <h1>PORTFOLIO</h1>
                <div className='galleryContainer'>
                    {this.state.items.map(({id, ...otherSectionProps}) => (
                            <GalleryItem key={id} {...otherSectionProps} />
                        ))}
                </div>
            </div>
        );
    }   
}

export default Portfolio;