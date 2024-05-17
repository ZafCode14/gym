import React from 'react';

function Classes(props) {
    return (
        <div data-animate='slideInUp' className='hero-button animate'>
            <div className='flx'>
                <img className='icon' src={props.icon} alt='main card'></img>
                <h3>{props.title}</h3>
            </div>
            <p>{props.description}</p>
        </div>
    );
}

export default Classes;