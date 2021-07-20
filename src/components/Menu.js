import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function Menu({ state }) {

    //Vars for animated dom nodes
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBackground = useRef(null);
    let cityBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let info = useRef(null);




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

    const fadeInUp = (node) => {
        gsap.from(node, {
            y: 60,
            duration: 1,
            delay: .2,
            opacity: 0,
            ease: 'power3.inOut'
        });
    }

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

    return (

        <div className='menu' ref={el => (menu = el)}>
            <div className='menu-secondary-background-color' ref={el => (revealMenuBackground = el)}></div>
            <div className='menu-layer' ref={el => (revealMenu = el)}>
                <div className='menu-city-background'></div>
                <div className='container'>
                    <div className='wrapper'>

                        <div className='menu-links'>
                            <nav>
                                <ul>
                                    <li ref={el => (line1 = el)}><Link to='/opportunities'>Opportunities</Link></li>
                                    <li ref={el => (line2 = el)}><Link to='/solutions'>Solutions</Link></li>
                                    <li ref={el => (line3 = el)}><Link to='/contact-us'>Contact Us</Link></li>
                                </ul>
                            </nav>
                            <div className='info' ref={el => (info = el)}>
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
                                <span>New York</span>
                                <span>New Jersey</span>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Menu;