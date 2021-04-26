import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }  

        // setFormState({...formState, name: e.target.value })
        setFormState({...formState, [e.target.name]: e.target.value })
        
        //  wrap the setter function, setFormState, in a conditional so that the state only updates if the form data has passed the quality tests
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        console.log('errorMessage', errorMessage);

    }
     
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className="contact-page container">
          <h1>Send your message</h1>
          
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name"></label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="Your Name" />
            </div>
            <div>
                <label htmlFor="email"></label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" placeholder="Your Email" />
            </div>
            <div>
                <label htmlFor="message"></label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" placeholder="Your message" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit" className="contact-button">Submit</button>
          </form>
          <p>Emails to rosefrancistoronto@gmail.com</p>
        </section>
    )
}

export default ContactForm;