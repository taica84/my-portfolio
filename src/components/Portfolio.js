import React from "react";
// import netflix from "../images/netflix.png";
// import tmdVirtual from "../images/tmd-virtual.jpg";
// import chatApp from "../images/chat-app.jpg";
// import taskManager from "../images/task-manager.png";
import wineHouse from '../images/wine-house.jpg';
import arhitectWebsite from '../images/arhitect-website.jpg';
import tesla from '../images/tesla.jpg';
import facebookClone from '../images/facebook-clone.jpg';
import googleClone from '../images/googleClone.png';
import huluClone from '../images/huluClone.jpg';

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // Netflix

  // const openPopupboxNetflix = () => {
  //   const content = (
  //     <>
  //       <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project..." />
  //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
  //       <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
  //     </>
  //   )
  //   PopupboxManager.open({ content })
  // }

  // const popupboxConfigNetflix = {
  //   titleBar: {
  //     enable: true,
  //     text: "Netflix clone project."
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500
  // }

  // // TMD Virtual
  // const openPopupboxCityGuide = () => {
  //   const content = (
  //     <>
  //       <img className="portfolio-image-popupbox" src={tmdVirtual} alt="TMD Virtual Shopping..." />
  //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
  //       <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://tmd-virtual.herokuapp.com", "_blank")}>https://tmd-virtual.herokuapp.com</a>
  //       <br />
  //       {/* <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a> */}
  //     </>
  //   )
  //   PopupboxManager.open({ content })
  // }

  // const popupboxConfigCityGuide = {
  //   titleBar: {
  //     enable: true,
  //     text: "TMD Virtual Shopping."
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500
  // }

  // Portfolio Project
  // const openPopupboxPortfolio = () => {
  //   const content = (
  //     <>
  //       <img className="portfolio-image-popupbox" src={chatApp} alt="Chat App..." />
  //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
  //       <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://chat-app-taica84.netlify.app/", "_blank")}>https://chat-app-taica84.netlify.app/</a>
  //       <br />
  //       <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/taica84/chat-app", "_blank")}>https://github.com/taica84/chat-app</a>
  //     </>
  //   )
  //   PopupboxManager.open({ content })
  // }

  // const popupboxConfigPortfolio = {
  //   titleBar: {
  //     enable: true,
  //     text: "Chat App."
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500
  // }

  // Task Manager React and Redux Project
  // const openPopupboxTaskManager = () => {
  //   const content = (
  //     <>
  //       <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
  //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
  //       <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
  //       <br />
  //       <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a>
  //     </>
  //   )
  //   PopupboxManager.open({ content })
  // }

  // const popupboxConfigTaskManager = {
  //   titleBar: {
  //     enable: true,
  //     text: "Projects"
  //   },
  //   fadeIn: true,
  //   fadeInSpeed: 500
  // }



    // Tesla Clone
    const openPopupboxTesla = () => {
      const content = (
        <>
          <img className="portfolio-image-popupbox w-50" src={tesla} alt="tesla..." />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
          <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://tesla-clone-taica84.netlify.app", "_blank")}>https://tesla-clone-taica84.netlify.app</a>
          <br />
          <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/taica84/tesla-clone", "_blank")}>https://github.com/taica84/tesla-clone</a>
        </>
      )
      PopupboxManager.open({ content })
    }
  
    const popupboxConfigTesla = {
      titleBar: {
        enable: true,
        text: "Tesla"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }

      // Wine House
  const openPopupboxWineHouse = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox w-50" src={wineHouse} alt="Wine House" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://wine-house-taica84.netlify.app", "_blank")}>https://wine-house-taica84.netlify.app</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/taica84/wine-house", "_blank")}>https://github.com/taica84/wine-house</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigWineHouse = {
    titleBar: {
      enable: true,
      text: "Wine House"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

    // arhitect website
    const openPopupboxArhitectWebsite = () => {
      const content = (
        <>
          <img className="portfolio-image-popupbox w-50" src={arhitectWebsite} alt="Arhitect Website" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
          <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://arhitect-website-taica84.netlify.app", "_blank")}>https://arhitect-website-taica84.netlify.app</a>
          <br />
          <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/taica84/arhitect-website", "_blank")}>https://github.com/taica84/arhitect-website</a>
        </>
      )
      PopupboxManager.open({ content })
    }
  
    const popupboxConfigArhitectWebsite = {
      titleBar: {
        enable: true,
        text: "Arhitect Website"
      },
      fadeIn: true,
      fadeInSpeed: 500
    };

    //GOOGLE CLONE
    const openPopupboxGoogleClone = () => {
      const content = (
        <>
          <img className="portfolio-image-popupbox w-50" src={googleClone} alt="Arhitect Website" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
          <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://google-clone-nextjs-pmxhhibo8-taica84.vercel.app", "_blank")}>https://google-clone-nextjs-pmxhhibo8-taica84.vercel.app</a>
          <br />
          <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/taica84/google-clone", "_blank")}>https://github.com/taica84/arhitect-website</a>
        </>
      )
      PopupboxManager.open({ content })
    }
  
    const popupboxConfigGoogleClone = {
      titleBar: {
        enable: true,
        text: "Google Clone"
      },
      fadeIn: true,
      fadeInSpeed: 500
    };


      //Hulu Clone
      const openPopupboxHuluClone = () => {
        const content = (
          <>
            <img className="portfolio-image-popupbox w-50" src={huluClone} alt="Arhitect Website" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
            <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://next-js-hulu-clone.vercel.app", "_blank")}>https://next-js-hulu-clone.vercel.app</a>
            <br />
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/taica84/next-js-hulu-clone", "_blank")}>https://github.com/taica84/next-js-hulu-clone</a>
          </>
        )
        PopupboxManager.open({ content })
      }
    
      const popupboxConfigHuluClone = {
        titleBar: {
          enable: true,
          text: "Hulu Clone"
        },
        fadeIn: true,
        fadeInSpeed: 500
      };

    //Facebook Clone

    // const openPopupboxFacebookClone = () => {
    //   const content = (
    //     <>
    //       <img className="portfolio-image-popupbox vw-25" src={facebookClone} alt="Facebook Clone" />
    //       <p>This is start page UI from Facebook Website with Google Authentication.Working just to uploads posts.No responsive  </p>
    //       <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://fb-clone-taica84.netlify.app/", "_blank")}>https://fb-clone-taica84.netlify.app/</a>
    //       <br />
    //       <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/taica84/facebook-clone", "_blank")}>https://github.com/taica84/facebook-clone</a>
    //     </>
    //   )
    //   PopupboxManager.open({ content })
    // }
  
    // const popupboxConfigFacebookClone = {
    //   titleBar: {
    //     enable: true,
    //     text: "Facebook Clone"
    //   },
    //   fadeIn: true,
    //   fadeInSpeed: 500
    // };




  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">

          {/*  */}
          {/* <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
          {/* - */}


          {/* <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={tmdVirtual} alt="TMD virtual Shopping..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}


          {/* - */}


          {/* <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={chatApp} alt="Chat App..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}


          {/* - */}


          {/* <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}


           {/* - */}
           <div className="portfolio-image-box" onClick={openPopupboxTesla}>
            <img className="portfolio-image" src={tesla} alt="Tesla" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

             {/* - */}
             <div className="portfolio-image-box" onClick={openPopupboxWineHouse}>
            <img className="portfolio-image" src={wineHouse} alt="Wine House" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

             {/* - */}
             <div className="portfolio-image-box " onClick={openPopupboxArhitectWebsite}>
            <img className="portfolio-image  " src={arhitectWebsite} alt="Arhitect Website" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>


          
             {/* - */}
          <div className="portfolio-image-box " onClick={openPopupboxGoogleClone}>
            <img className="portfolio-image  " src={googleClone} alt="Google Clone" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>


              {/* - */}
          <div className="portfolio-image-box " onClick={openPopupboxHuluClone}>
            <img className="portfolio-image  " src={huluClone} alt="Hulu Clone" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

             {/* - */}
             {/* <div className="portfolio-image-box " onClick={openPopupboxFacebookClone}>
              <img className="portfolio-image " src={facebookClone} alt="Facebook Clone" />
               <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}



        </div>
      </div>
      {/* <PopupboxContainer {...popupboxConfigNetflix} /> */}
      {/* <PopupboxContainer {...popupboxConfigCityGuide} /> */}
      {/* <PopupboxContainer {...popupboxConfigPortfolio} /> */}
      {/* <PopupboxContainer {...popupboxConfigTaskManager} /> */}
      <PopupboxContainer {...popupboxConfigTesla} />
      <PopupboxContainer {...popupboxConfigWineHouse} />
      <PopupboxContainer {...popupboxConfigArhitectWebsite} />
      <PopupboxContainer {...popupboxConfigGoogleClone} />
      <PopupboxContainer {...popupboxConfigHuluClone} />
      {/* <PopupboxContainer {...popupboxConfigFacebookClone} /> */}
    </div>
  )
}

export default Portfolio;
