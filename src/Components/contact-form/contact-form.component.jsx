import React from 'react';
import './contact-form.styles.scss'
import ButtonComponent from '../button/button.component'
import emailjs from 'emailjs-com';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_uvw4ni4', 'template_26x15eu', event.target, 'user_t57LCsV2EyB1IP9sCk5JS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    

    handleName = (event) => {
        this.setState({name: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    handleMessage = (event) => {
        this.setState({message: event.target.value})
    }

    render() {
        return (
          <div>
            <form className='contactForm' onSubmit={this.sendEmail}>
                <label>{'Name: '}</label>
                <input type='text' value={this.state.name} onChange={this.handleName} name='name'></input>
                <label>{'E-Mail: '}</label>
                <input type='email' value={this.state.email} onChange={this.handleEmail} name='email'></input>
                <label>{'Message: '}</label>
                <textarea type='text-area' value={this.state.message} onChange={this.handleMessage} name='message'></textarea>
                <ButtonComponent className='formButton' title='Send'/>    
            </form>
          </div>
        );
      };
}

export default ContactForm