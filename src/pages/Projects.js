import React from 'react';

import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true


import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';
import img4 from '../images/4.jpeg';
import img5 from '../images/5.jpeg';



//This page uses the fullpage.js react wrapper
//Starter code here: https://github.com/alvarotrigo/react-fullpage

const Projects = () => (


    <ReactFullpage

        //fullpage options
        scrollingSpeed={1000} /* Options here */
        navigation='true'
        navigationPosition='left'
        render={({ state, fullpageApi }) => {



            return (
                < ReactFullpage.Wrapper >
                    <div className="section">
                        <div className='project-container'>
                            <div clasName='project-content' /*ref={el => (contentRef = el)}*/>
                                <div className='project-name'>
                                    <span>Rutgers</span> <span>Health</span>
                                </div>
                                <div className='project-description'>
                                    <span>Mobile Application </span> <span>&#11044;</span> <span> React Native, Nodejs, AWS</span>
                                </div>
                                <div className='project-links'>
                                    <a href='https://www.google.com/' target="_blank" rel="noreferrer noopener">Github  </a>
                                    <a href='https://www.google.com/' target="_blank" rel="noreferrer noopener">Demo </a>
                                </div>
                            </div>
                            <div className='project-images'>
                                <img src={img1} className='img' alt='' />
                                <img src={img2} className='img' alt='' />
                                <img src={img3} className='img' alt='' />
                                <img src={img4} className='img' alt='' />
                                <img src={img5} className='img' alt='' />
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className='project-container'>
                            <div clasName='project-content'>
                                <div className='project-name'>
                                    <span>/r/Cars</span> <span>Wiki Bot</span>
                                </div>
                                <div className='project-description'>
                                    <span>Reddit Bot</span> <span>&#11044;</span> <span> Python, PRAW</span>
                                </div>
                                <div className='project-links'>
                                    <a href='https://www.google.com/' target="_blank" rel="noreferrer noopener">Github  </a>
                                    <a href='https://www.google.com/' target="_blank" rel="noreferrer noopener">Demo </a>
                                </div>
                            </div>
                            <div className='project-images'>
                                <img src={img1} className='img' alt='' />
                                <img src={img2} className='img' alt='' />
                                <img src={img3} className='img' alt='' />
                                <img src={img4} className='img' alt='' />
                                <img src={img5} className='img' alt='' />
                            </div>
                        </div>

                    </div>


                    <div className="section">
                        <div className='project-container'>
                            <div clasName='project-content'>
                                <div className='project-name'>
                                    <span>Portfolio</span>
                                </div>
                                <div className='project-description'>
                                    <span>Website</span> <span>&#11044;</span> <span> React, Nodejs, GSAP</span>
                                </div>
                                <div className='project-links'>
                                    <a href='https://www.google.com/' target="_blank" rel="noreferrer noopener">Github  </a>
                                    <a href='https://www.google.com/' target="_blank" rel="noreferrer noopener">Demo </a>
                                </div>
                            </div>
                            <div className='project-images'>
                                <img src={img1} className='img' alt='' />
                                <img src={img2} className='img' alt='' />
                                <img src={img3} className='img' alt='' />
                                <img src={img4} className='img' alt='' />
                                <img src={img5} className='img' alt='' />
                            </div>
                        </div>

                    </div>

                </ReactFullpage.Wrapper >


            );

        }}

    />

);

ReactDOM.render(<Projects />, document.getElementById('root'));


export default Projects;
