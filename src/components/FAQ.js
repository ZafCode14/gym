import React from 'react';
import './FAQ.css'

function FAQ() {
    return (
        <section className='faq-section bc_d2 c_w'>
            <p data-animate='slideInRight' className='c_o animate'>-- FAQ --</p>
            <h3 data-animate='slideInLeft' className='animate'>FREAQUENTLY ASKED QUESTIONS</h3>
            <div data-animate='scale' className='faq animate'>
                <div className='visible-box'>
                    <h6>Can I cancel my membership?</h6>
                    <h5>+</h5>
                </div>
            </div>
            <div data-animate='scale' className='faq animate'>
                <div className='visible-box'>
                    <h6>Can I freeze my membership?</h6>
                    <h5>+</h5>
                </div>
            </div>
            <div data-animate='scale' className='faq animate'>
                <div className='visible-box'>
                    <h6>What is the class cancellation policy?</h6>
                    <h5>+</h5>
                </div>
            </div>
            <div data-animate='scale' className='faq animate'>
                <div className='visible-box'>
                    <h6>What kinds of classes are right for me?</h6>
                    <h5>+</h5>
                </div>
            </div>
        </section>
    );
}

export default FAQ;