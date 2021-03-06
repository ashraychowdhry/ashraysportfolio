import React from 'react'
import splitway from '../Resources/splitway_home.jpg'
import ashraychowdhryweb from '../Resources/ashraychowdhrywebsite.jpg'
import foodsplash from '../Resources/foodsplash_home.jpg'
import ENATool from '../Resources/ENATool.jpg'
import {openPopupBox, getConfig} from '../Helper/PortfolioPopUps.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {PopupboxManager, PopupboxContainer} from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

function Portfolio() {

    const openSplitwayPopupBox = () => {
        const content = (
            <div className='popup-wrapper'>
                <img src={splitway} className='portfolio-popup-image' alt='College Travel Service Tool'/>
                <p>This platform was designed with Bootstrap, JavaScript, mySQL Alchemy, and Python Flask to help assist college students 
                    find people to rideshare with to local events</p>
                    <b>Github: </b> <a className='hyperlink' onClick={() =>window.open('https://github.com/ashraychowdhry/splitway')}>https://github.com/ashraychowdhry/splitway</a>
            </div>

        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "SPLITWAY",
              },
            },
          });
         

    }

    const openFoodSplashPopupBox = () => {
        const content = (
            <div className='popup-wrapper'>
                <img src={foodsplash} className='portfolio-popup-image' alt='Food Donation Platform'/>
                <p>This online website platform allows donors in a community to easily filter out and commit to donation events nearby that satisfy their donation requirements.</p>
                    <b>Github: </b> <a className='hyperlink' onClick={() =>window.open('https://github.com/ashraychowdhry/foodsplash')}>https://github.com/ashraychowdhry/foodsplash</a>
            </div>

        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "FOODSPLASH",
              },
            },
          });
          
        

    }

    const openACWPopupBox = () => {
        const content = (
            <div className='popup-wrapper'>
                <img src={ashraychowdhryweb} className='portfolio-popup-image' alt='Personal Portfolio Website'/>
                <p>This personal portfolio website! Made with ReactJS, Bootstrap, and JQuery (JavaScript, CSS, and HTML), 
                    this leightweight website focuses on a readable and artistic way of presenting my professional experience.</p>
                    <b>Github: </b> <a className='hyperlink' onClick={() =>window.open('https://github.com/ashraychowdhry/ashraysportfolio')}>https://github.com/ashraychowdhry/ashraysportfolio</a>
            </div>

        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "FOODSPLASH",
              },
            },
          });
          
        

    }

    const openENAPopupBox = () => {
        const content = (
            <div className='popup-wrapper'>
                <img src={ENATool} className='portfolio-popup-image' alt='Ecological Network Analysis Systems Analyser'/>
                <p>This website aims to make the findings of my recently co-authored publication accessible to the public. 
                    The platoform streamlines calculations of several Ecological Network Analysis metrics in order to provide 
                    recommendations to systems engineers for resilience improvement. Made with ReactJS, NodeJS, and ExpressJS.</p>
                    <b>Github: </b> <a className='hyperlink' onClick={() =>window.open('https://github.com/ashraychowdhry/SystemsENAMetricAnalyzer')}>https://github.com/ashraychowdhry/SystemsENAMetricAnalyzer</a>
            </div>

        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "FOODSPLASH",
              },
            },
          });
          
        

    }

    

    const SplitWay = {
        img_src: splitway, 
        img_alt: 'SplitWay Application', 
        description: 'This platform was designed with Bootstrap, JavaScript, mySQL Alchemy, and Python Flask to help assist college students find people to rideshare with to local events', 
        hyper_link: 'https://github.com/ashraychowdhry/splitway'
    }

    const configPopup = {
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

    return (
        <div id='portfolio' className='port-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5 main-font'>
                    Portfolio
                </h1>
                <div className=' image-row-wrap row justify-content-center'>
                    

                        <div className='image-box-wrapper ' onClick={openSplitwayPopupBox}>
                            <img className='portfolio-image' src={splitway} alt='SplitWay' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div>  

                        <div className='image-box-wrapper' onClick={openFoodSplashPopupBox}>
                            <img className='portfolio-image' src={foodsplash} alt='FoodSplash' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div>  

                        <div className='image-box-wrapper' onClick={openACWPopupBox}>
                            <img className='portfolio-image' src={ashraychowdhryweb} alt='Autonomous Electric Vehicle' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div>  

                        <div className='image-box-wrapper' onClick={openENAPopupBox}>
                            <img className='portfolio-image' src={ENATool} alt='Autonomous Robotic Arm' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div>  

                        <div className='image-box-wrapper ' onClick={openSplitwayPopupBox}>
                            <img className='portfolio-image' src={splitway} alt='ashraychowdhry.com' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div>  

                    </div>
                    

            </div>
            <PopupboxContainer {...configPopup} />
        </div>
    )
}

export default Portfolio
