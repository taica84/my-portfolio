import React from "react";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   RedditShareButton,
//   RedditIcon,
//   LinkedinShareButton,
//   LinkedinIcon
// } from "react-share";

import FooterRouter from './FooterRouter';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p> Facaeni Ialomita, <strong>Romania</strong> </p>
             
            </div>
            <div className="d-flex">
              <a href="tel:+40 0725 746 804">+40 0725 746 804</a>
            </div>
            <div className="d-flex">
              <p>taicarulz@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">

          {/*   Social Media share

             <FacebookShareButton
                url={"https://www.facebook.com/taica.rullz/"}
                quote={"FrontEnd Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://twitter.com/RullzTaica"}
                quote={"FrontEnd Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>

              <RedditShareButton
                url={"https://twitter.com/RullzTaica"}
                quote={"FrontEnd Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton> 

              <LinkedinShareButton
                url={"https://www.linkedin.com/in/mihai-vadana-a96095104/"}
                quote={"FrontEnd Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />

              </LinkedinShareButton>

            */}

           {/* Social Media profile */}

       
             <FooterRouter/>

            </div>
      
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;taica_rullz | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
