import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Tejasva Bhatia</h2>
        <p><a href="mailto:bhatiatejasva15@gmail.com">bhatiatejasva15@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Tejasva. I am a graduate of <a href="https://www.dtu.ac.in/Web/Departments/InformationTechnology/about/">Delhi Technological University</a> with Masters in Information Systems and <a href="https://csed.thapar.edu/">Thapar University</a> CSED Alumni. Recently finished a Web Development bootcamp at <a href="https://www.lighthouselabs.ca/en/web-development">Lighthouse Labs</a>. Software Engineer with over a year of experience, eager for the next challenge!.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Tejasva Bhatia <Link to="/">bhatiatejasva.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
