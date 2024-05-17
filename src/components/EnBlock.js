import React from 'react';

function EnBlock(props) {
    return (
        <div data-animate='slideInUp' className='energy-block animate'>
            <img src={props.icon} alt='icon for the energy block'/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default EnBlock;