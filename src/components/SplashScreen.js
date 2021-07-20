import React, { useEffect, useRef } from 'react';
import '../styles/splashscreen.css';

function SplashScreen() {

    const wrapperRef = useRef(null);
    const topref = useRef(null)


    useEffect(() => {

        const childrens = Array.from(wrapperRef.current.children);
        const topmove = topref.current

        setTimeout(() => {
            childrens.forEach((children, idx) => {
                setTimeout(() => {
                    children.classList.add('active');

                }, (idx + 1) * 400)
            });

            setTimeout(() => {
                childrens.forEach((children, idx) => {
                    setTimeout(() => {
                        children.classList.remove('active');
                        children.classList.add('fade');
                    }, (idx + 1) * 50)
                })
            }, 2000);

            setTimeout(() => {
                topmove.style.top = '-100vh';

            }, 2300)
        })
    });

    return (
        <div className='intro' ref={topref}>
            <div className='logo-header' ref={wrapperRef}>
                <span className='intro-text'>Wel</span>
                <span className='intro-text'>come.</span>
            </div>
        </div>
    );
}

export default SplashScreen;
