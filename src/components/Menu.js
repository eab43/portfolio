import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import newyork from '../images/newyork.webp';
import newark from '../images/newark.webp';
import bohol from '../images/bohol.webp';


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
        { name: 'New York', image: newyork },
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
                                    <li ref={el => (line3 = el)}><Link to='/contact-me'>Contact Me</Link></li>
                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className='info' >
                                <h3>Our Promise</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
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

export default Menu;