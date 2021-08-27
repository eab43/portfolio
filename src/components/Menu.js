import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import nyc from '../images/nyc3.jpg';
import newark from '../images/newark.webp';
import bohol from '../images/bohol.webp';

import github from '../images/github3.png';
import linkedin from '../images/linkedin.png';




function Menu({ state }) {


    //Refs for animated dom nodes
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBackground = useRef(null);
    let cityBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let info = useRef(null);


    /* MENU ANIMATION AND STATE SECTION START */

    useEffect(() => {
        if (state.clicked === false) {
            //closes menu
            gsap.to([revealMenu, revealMenuBackground], {
                duration: .8,
                height: 0,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to(menu, {
                duration: 1,
                css: { display: 'none' }
            });
        }
        else if ((state.clicked === true) || (state.clicked === true && state.initial === null)) {

            //Opens the menu. The OR statement tells if it has run for the first time.
            gsap.to(menu, {
                duration: 0,
                css: { display: 'block' }
            });

            gsap.to([revealMenuBackground, revealMenu], {
                duration: 0,
                opacity: 1,
                height: '100%'
            });
            staggerReveal(revealMenuBackground, revealMenu);
            fadeInUp(info);
            staggerText(line1, line2, line3)

        }
    }, [state]);

    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: .8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        });
    }
    //Animation for the info text on the right side of the menu.
    const fadeInUp = (node) => {
        gsap.from(node, {
            y: 60,
            duration: 1,
            delay: .2,
            opacity: 0,
            ease: 'power3.inOut'
        });
    }
    //Animation for the Larger text in the menu.
    const staggerText = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
            duration: 0.8,
            y: 100,
            delay: .1,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.3
            }

        });
    }
    /* MENU ANIMATION AND STATE SECTION END */

    /* CITY BACKGROUND ANIMATION START */

    const cities = [
        { name: 'New York City', image: nyc },
        { name: 'Newark, New Jersey (Currently)', image: newark },
        { name: 'Bohol', image: bohol },

    ];

    const handleCity = city => {
        gsap.to(cityBackground, {
            duration: 0,
            background: `url(${city}) center center`
        });
        gsap.to(cityBackground, {
            duration: .4,
            opacity: 1,
            ease: 'power3.inOut'
        });
        gsap.from(cityBackground, {
            duration: .4,
            transformOrigin: 'right top'
        });
    }

    const handleCityReturn = () => {
        gsap.to(cityBackground, {
            duration: .4,
            opacity: 0,
        });

    }

    /* CITY BACKGROUND ANIMATION END */


    return (

        <div ref={el => (menu = el)} className='menu' >
            <div ref={el => (revealMenuBackground = el)} className='menu-secondary-background-color' ></div>
            <div ref={el => (revealMenu = el)} className='menu-layer' >
                <div ref={el => (cityBackground = el)} className='menu-city-background'></div>
                <div className='container'>
                    <div className='wrapper'>

                        <div className='menu-links'>
                            <nav>
                                <ul>
                                    <li ref={el => (line1 = el)}><Link to='/about-me'>About Me</Link></li>
                                    <li ref={el => (line2 = el)}><Link to='/projects'>Projects</Link></li>
                                    <li ref={el => (line3 = el)}><a href="eab_resume.pdf" download>Resume</a></li>
                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className='social_links' >
                                <h3>You can find me at: </h3>
                                <ul>
                                    <li >
                                        <a href="https://github.com/eab43" target="_blank" rel="noreferrer noopener">
                                            <img src={github} />
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li >
                                        <a href="https://www.linkedin.com/in/elvin-aidan-bernales-7a670421a/" target="_blank" rel="noreferrer noopener">
                                            <img src={linkedin} />
                                        </a>                                    </li>
                                </ul>
                            </div>
                            <div className='location'>
                                Location:
                                {cities.map(el => (
                                    <span key={el.name} onMouseEnter={() => handleCity(el.image)} onMouseOut={handleCityReturn}>
                                        {el.name}
                                    </span>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}
/*
<a href="https://github.com/eab43" target="_blank" rel="noreferrer noopener">
<img src={github} />
</a>
*/
export default Menu;