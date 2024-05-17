import React from 'react';
import './LocationSection.css'


function LocationSection() {
    return (
        <section className='location-section bc_d1 c_w'>
            <div className='location-container'>
                <div data-animate='slideInLeft' className='location-left animate'><div className='map'></div></div>
                <div className='location-right'>
                    <p data-animate='slideInLeft' className='c_o animate'>--LOCATION</p>
                    <h3 data-animate='slideInRight' className='animate'>FIND YOUR GYM</h3>
                    <p data-animate='slideInUp' className='animate'>Ut magna amet, a malesuada. Nibh in interdum at sem senectus pulvinar aliquam orci. Adipiscing</p>
                    <div data-animate='scale' className='location-box animate'>
                        <h6>Zeus</h6>
                        <p>1234 Ash Dr. San Jose, South Dakota 56789</p>
                        <p>456-123-5555</p>
                    </div>
                    <div data-animate='scale' className='location-box animate'>
                        <h6>Cronus</h6>
                        <p>4545 Washington Ave. Manchester, Kentucky 12301</p>
                        <p>123-456-5555</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationSection;