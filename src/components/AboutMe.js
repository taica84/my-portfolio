import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            I have been developing websites for over 1 year. 
            I'm Front-End Web Developer. Technologies I use is Javascript ,React.js ,
             MongoDB ,Firebase.
             I'm a highly self-motivated Web Developer who spends most of time 
             building applications and keeping myself up-to-date with the latest technologies.

            {/*
            
            I create responsive websites that are displayed on all devices desktops and 
            smartphones.
            And I’m ready to do this for you, before we start developing your website,
             we will discuss all the  details of your niche with you, I will conduct a 
             survey of your competitors and make a list of their advantages and weaknesses.

            All this is necessary to give your customers something that your competitors 
            do not provide, or to present it too, but better! */}

           
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
