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
                    subtitle: 'Javascript, RESTful API',
                    type: 'code',
                    imageUrl: '/assets/telescope-logo.jpg',
                    codeUrl: 'https://github.com/rebeccachavezlv/ISSFinder',
                    webUrl: 'https://rebeccachavezlv.github.io/ISSFinder/',
                    id: 1
                },
                {
                    title: 'CSS Gradient Generator',
                    subtitle: 'HTML, CSS, Javascript',
                    type: 'code',
                    imageUrl: '/assets/gradient-logo.jpg',
                    codeUrl: 'https://github.com/rebeccachavezlv/cssbackgroundgenerator',
                    webUrl: 'https://rebeccachavezlv.github.io/cssbackgroundgenerator/',
                    id: 2
                },
                {
                    title: 'RoboFriends',
                    subtitle: 'React.js, RESTful API',
                    type: 'code',
                    imageUrl: '/assets/robofriends-logo.jpg',
                    codeUrl: 'https://github.com/rebeccachavezlv/robofriends/tree/master',
                    webUrl: 'https://rebeccachavezlv.github.io/robofriends/',
                    id: 3
                },
                // {
                //     title: 'CRWN Clothing',
                //     subtitle: 'React.js, Redux, Stripe API, Firebase',
                //     type: 'code',
                //     imageUrl: '',
                //     codeUrl: '',
                //     webUrl: '',
                //     id: 6
                // },
                {
                    title: 'Black Raven Films',
                    subtitle: 'WordPress, CSS',
                    type: 'code',
                    imageUrl: '/assets/blackraven-collage.jpg',
                    codeUrl: null,
                    webUrl: 'https://www.blackravenfilms.com',
                    id: 4
                },
                {
                    title: "Rick's Lawn and Landscaping",
                    subtitle: 'WordPress, CSS',
                    type: 'code',
                    imageUrl: '/assets/rickslawn.jpg',
                    codeUrl: null,
                    webUrl: 'https://www.rickslawnandlandscaping-lv.com',
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