
/*
    Unused for now. Might work on the gsap animations for
    the Project page in the future.

*/




/*
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';
import img4 from '../images/4.jpeg';
import img5 from '../images/5.jpeg';
function Animations() {

    let nameRef = useRef(null);
    let descriptionRef = useRef(null);
    let linksRef = useRef(null);
    let imagesRef = useRef(null);


    useEffect(() => {
        gsap.to(nameRef, {
            stagger: 0.15,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
        });
        gsap.to(descriptionRef, {
            autoAlpha: 1,
            delay: 0.5,
            duration: 0.3,
        });
        gsap.to(linksRef, {
            autoAlpha: 1,
            delay: 0.5,
            duration: 0.3,
        });
        gsap.to(imagesRef, {
            autoAlpha: 1,
            stagger: 0.10,
            duration: 0.3
        })

    }

    )

    return (
        <div id="fullpage">

            <div className='section'>
                <div clasName='project-content' >
                    <div className='project-name' ref={el => (nameRef = el)}>
                        <span>Rutgers</span> <span>Health</span>
                    </div>
                    <div className='project-description' ref={el => (descriptionRef = el)}>
                        <span>Mobile Application </span> <span>&#11044;</span> <span> React Native, Nodejs, AWS</span>
                    </div>
                    <div className='project-links' ref={el => (linksRef = el)}>
                        <a href='https://www.google.com/' target="_blank" rel="noreferrer noopener">Github  </a>
                        <a href='https://www.google.com/' target="_blank" rel="noreferrer noopener">Demo </a>
                    </div>

                    <div className='project-images' ref={el => (imagesRef = el)}>
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
        </div>

    )
}

export default Animations;

