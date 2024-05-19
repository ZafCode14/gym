import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className='contact-page bc_d2 c_w flx_c ai_c'>
            <div className='contact-hero'>
                <h1 data-animate='slideInLeft' className='animate'>Contact <span className='c_o'>ZEUS</span></h1>
            </div>
            <div className='contact-main flx_c'>
                <img data-animate='scale' className='animate' src='./images/map.jpeg' alt='map'/>
                <div className='flx_r jc_sb'>
                    <div data-animate='scale' className='location-box animate'>
                        <p><b className='c_w'>Zeus</b></p>
                        <p>1234 Ash Dr. San Jose, South Dakota 56789</p>
                        <p>456-123-5555</p>
                    </div>
                    <div data-animate='scale' className='location-box animate'>
                        <p><b className='c_w'>Cronus</b></p>
                        <p>4545 Washington Ave. Manchester, Kentucky 12301</p>
                        <p>123-456-5555</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;