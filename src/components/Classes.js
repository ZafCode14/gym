import React from 'react';
import { Link } from 'react-router-dom';

function Classes(props) {
    const TopLink = () => {
        window.scrollTo(100, 100);
        window.scrollTo(0, 0);
    }
    return (
        <Link onClick={TopLink} data-animate='slideInUp' to='services' className='link hero-button c_w animate'>
            <div className='flx'>
                <img className='icon' src={props.icon} alt='main card'></img>
                <h3>{props.title}</h3>
            </div>
            <p>{props.description}</p>
        </Link>
    );
}

export default Classes;