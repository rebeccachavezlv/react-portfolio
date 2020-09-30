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
                    subtitle: 'JavaScript, Open Notify API, CSS, HTML',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: 'https://github.com/rebeccachavezlv/ISSFinder',
                    webUrl: 'https://rebeccachavezlv.github.io/ISSFinder/',
                    id: 1
                },
                {
                    title: 'CSS Gradient Generator',
                    subtitle: 'JavaScript, CSS, HTML',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: 'https://github.com/rebeccachavezlv/cssbackgroundgenerator',
                    webUrl: 'https://rebeccachavezlv.github.io/cssbackgroundgenerator/',
                    id: 2
                },
                {
                    title: 'RoboFriends',
                    subtitle: 'React.js, Robohash API, CSS',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: 'https://github.com/rebeccachavezlv/robotfriends',
                    webUrl: 'https://rebeccachavezlv.github.io/robotfriends/',
                    id: 3
                },
                {
                    title: 'Black Raven Films',
                    subtitle: 'Wordpress, CSS',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: '',
                    webUrl: 'https://www.blackravenfilms.com',
                    id: 4
                },
                {
                    title: 'Clothing Store',
                    subtitle: 'React.js, Redux, Firebase, Stripe API, SCSS',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: 'https://github.com/rebeccachavezlv/clothing-store',
                    webUrl: '',
                    id: 5
                },
                {
                    title: 'Quote Generator',
                    subtitle: 'JavaScript, Forismatic API, CSS, HTML',
                    type: 'code',
                    imageUrl: '',
                    codeUrl: 'https://github.com/rebeccachavezlv/quote-generator',
                    webUrl: 'https://rebeccachavezlv.github.io/quote-generator/',
                    id: 6
                }
            ]
          };
        }

    render() {
        return (
            <div className='portfolioContainer' id='portfolio'>
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