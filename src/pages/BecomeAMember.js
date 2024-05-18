import React from 'react';
import './BecomeAMember.css'

function BecomeAMember() {
    return (
        <div className='bam-section bc_d2 c_w'>
            <div className='bam-hero'></div> 
            <div className='bam-main'>
                <p data-animate='slideInLeft' className='c_o animate'>-- MEMBERSHIP</p> 
                <h1 data-animate='slideInRight' className='animate'>START YOUR 5 DAY TRIAL MEMBERSHIP TODAY!</h1>
                <p data-animate='slideInLeft' className='animate'>Aliquam aliquet pretium sagittis est. Eleifend netus diam sit malesuada. Arcu, amet sem gravida sit arcu.</p>
                <form data-animate='scale' className='animate'>
                    <input className='bc_d1 c_w' placeholder='First Name'/>
                    <input className='bc_d1 c_w' placeholder='Last Name'/>
                    <input className='bc_d1 c_w' placeholder='Email'/>
                    <input className='bc_d1 c_w' placeholder='Phone Number'/>
                    <button className='button1'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default BecomeAMember;