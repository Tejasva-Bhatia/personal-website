import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Tejasva Bhatia's personal website. Winnipeg based Delhi Technological University graduate, "
      + 'Alumni of Thapar University and software engineer with one year experience.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website! Here, you&apos;ll find a meticulously crafted digital space designed to showcase my journey, skills, and projects. This site is more than just a collection of web pages; it&apos;s a reflection of my passion for technology and creativity. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> As you navigate through these digital corridors,
        you&apos;ll discover insights into my professional
        background, explore the projects I&apos;ve poured
        my heart into, and browse my resume detailing my experiences.
      </p>
      <p>Whether you&apos;re here to learn more about me,
        delve into my work, or simply say hello, I&apos;m thrilled
        to have you. So, go ahead, take your time, and feel
        free to reach out if you have any questions or just want to chat.
      </p>
    </article>
  </Main>
);

export default Index;
