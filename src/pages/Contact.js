import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const emailId = 'tejasva369@gmail.com';
    const interval = setInterval(() => {
      setEmail((prevEmail) => prevEmail + emailId.charAt(prevEmail.length));
    }, 100); // Adjust the interval to control the speed of email appearance

    return () => clearInterval(interval);
  }, []);

  return (
    <Main
      title="Contact"
      description="Contact Tejasva Bhatia via email @ tejasva369@gmail.com"
    >
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2><Link to="/contact">Contact</Link></h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can email me at: </p>
          <p><a href={`mailto:${email}`} style={{ color: '#00abf3' }}>{email}</a></p>
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;
