import React from 'react';

function ServiceType(props) {
    return (
        <div data-animate='scale' className='service-type animate'>
            <img src={props.icon} alt='icon'/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default ServiceType;