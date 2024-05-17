import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className='bc_d2 c_w'>
            <div className='upper-footer'>
                <div className='footer-box'>
                    <h4>QUIK LINKS</h4>
                    <p>ABOUT US</p>
                    <p>CONTACT</p>
                    <p>BLOG</p>
                </div>
                <div className='footer-box'>
                    <h4>SERVICES</h4>
                    <p>CLASSES TRAININGS</p>
                    <p>GROUP TRAININGS</p>
                    <p>MEMBERSHIP</p>
                </div>
                <div className='footer-box'>
                    <h4>SOCIAL</h4>
                    <p>FACEBOOK</p>
                    <p>INSTAGRAM</p>
                    <p>TWITTER</p>
                    <p>YOUTUBE</p>
                </div>
            </div>
            <div className='bottom-footer'>
                <div className='footer-box2'>
                    <p><b className='c_w'>TEL:</b> 456-123-5555 <b className='c_w'>EMAIL:</b> this@email.com</p>
                </div>
                <div className='footer-box2'>
                    <p>&copy; 2024 Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;