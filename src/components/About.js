import React from 'react';

const About = () => {
  return (
    <div className="about bg-primary" id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h1>About Us</h1>
            {/* <h1>WELCOME TO MAESTRO PIZZINI</h1> */}
            <p>
              At formyce copy, we are passionate about the power of words and
              their potential to shape ideas, influence minds, and create
              meaningful connections. As a dedicated writing research company,
              we strive to provide our clients with the tools and insights they
              need to excel in the ever-evolving landscape of communication and
              academia.
            </p>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/Assignment-Writing.jpg" height="500" alt="picture"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
