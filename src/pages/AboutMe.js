import React, { useRef } from 'react';
import gsap from 'gsap';

import runewark from '../images/ru-newark.jpg';

import bohol from '../images/bohol.webp';


function AboutMe() {
    let backgroundRef = useRef(null);
    let normaltext = useRef(null);
    let spanref = useRef(null);


    const handleBackground = background => {
        gsap.to(backgroundRef, {
            duration: 0,
            background: `url(${background}) center center`,

        });
        gsap.to(normaltext, {
            duration: 0.3,
            color: 'transparent'
        });

        gsap.to(spanref, {
            duration: 0.5,
            color: 'white',
        });

    }

    const handleBackgroundReturn = () => {
        gsap.to(backgroundRef, {
            duration: 0.3,
            background: 'white',
        });
        gsap.to(normaltext, {
            duration: 0.3,
            color: 'black',
        });

        gsap.to(spanref, {
            duration: 0.5,
            color: 'black'
        });

    }

    return (
        <div className='aboutme' ref={el => (backgroundRef = el)} >
            <div className='aboutme-content'>
                <div className='text-content' ref={el => (normaltext = el)}>
                    Hi, I am a Filipino American
                    born from the island of&nbsp;
                    <span className='keytext' ref={el => (spanref = el)} onMouseEnter={() => handleBackground(bohol)} onMouseOut={handleBackgroundReturn}>Bohol.</span>

                    &nbsp;I graduated with a B.A. in Computer Science from
                    <span className='keytext' ref={el => (spanref = el)} onMouseEnter={() => handleBackground(runewark)} onMouseOut={handleBackgroundReturn}>Rutgers University Newark. </span>

                    &nbsp;I enjoy chess, coding, collaboration, learning
                    and improving everyday.
                </div>
            </div>
        </div >
    );

}



export default AboutMe;