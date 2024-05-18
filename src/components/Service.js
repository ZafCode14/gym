import React from 'react';
import { useState, useEffect } from 'react';

function Service(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const className = `photo ${props.photo}`
    const style1 = {
        order: windowWidth > 750 ? props.order[0] : 1,
    }
    const style2 = {
        order: windowWidth > 750 ? props.order[1] : 2,
    }
    const slide = props.order[0] === 1 ? "slideInRight" : "slideInLeft"
    return (
        <div data-animate={slide} className='service-container bc_d2 animate'>
            <div style={style1} className={className}></div> 
            <div style={style2} className='info'>
                <p className='c_o'>{props.pretitle}</p>
                <h3>{props.title}</h3>
                <p>{props.par1}</p>
                <p>{props.par2}</p>
            </div>
        </div>
    );
}

export default Service;