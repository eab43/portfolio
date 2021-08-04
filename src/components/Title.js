import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Title({ lineContent, lineContent2 }) {
    let line1 = useRef(null);
    let line2 = useRef(null);

    useEffect(() => {

        gsap.from([line1], 1, {
            delay: .8,
            ease: 'power3.out',
            y: 250,
            stagger: {
                amount: .3
            }
        })
        gsap.from([line2], 1.5, {
            delay: 1.0,
            ease: 'power3.out',
            y: 300,
            stagger: {
                amount: .6
            }
        })

    }, [line1, line2])

    return (
        <h1 className='home-title'>
            <div className='line-wrap'>
                <div className='line' ref={el => line1 = el}>
                    {lineContent}
                </div>
            </div>

            <div className='line-wrap'>
                <div className='line2' ref={el => line2 = el}>
                    {lineContent2}
                </div>
            </div>

        </h1>

    );
}
export default Title;