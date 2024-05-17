import React from 'react';

function ServiceType(props) {
    return (
        <div className='service-type'>
            <img src={props.icon}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default ServiceType;