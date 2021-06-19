import React from 'react';

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
  } from "react-share";

const FooterRouter = () => {
    return (
       <div>
           <a href='https://www.facebook.com/taica.rullz/' target='_blank' >
               <FacebookIcon className="mx-3" size={36} />
           </a>

           <a href='https://twitter.com/RullzTaica' target='_blank' >
               <TwitterIcon className="mx-3" size={36} />
           </a>

           <a href='https://www.linkedin.com/in/mihai-vadana-a96095104/' target='_blank' >
           <LinkedinIcon className="mx-3" size={36} />
           </a>
       </div>
    )
}

export default FooterRouter
