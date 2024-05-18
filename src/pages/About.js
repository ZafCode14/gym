import React from 'react';
import './About.css'
import Service from '../components/Service';

function About(props) {
    return (
        <div className='about-page bc_d2 c_w'>
           <div className='about-hero'>
                <h1 data-animate='slideInLeft' className='animate'>ABOUT <span className='c_o'>ZEUS</span></h1>
            </div> 
           <Service
            photo={"photo_0x06"}
            pretitle={"-- OUR STORY"}
            title={"THE ZEUS TRAINING STORY"}
            par1={"Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat velit id adipiscing mollis. Quisque bibendum vehicula eget ac fringilla non nec."}
            par2={"Sed vitae faucibus tristique nisl, tincidunt nec consequat ullamcorper. Eu volutpat lacus lacus porttitor sed nunc. Sed nunc vel massa eget egestas. Non sapien cursus risus lorem. Adipiscing eu a penatibus ac viverra cras diam feugiat ornare. Gravida nibh at bibendum cras massa. Vitae proin convallis enim nunc libero. Lacus aenean vestibulum."}
            order={[1, 2]}
           />
           <Service
            photo={"photo_0x07"}
            pretitle={"-- OUR MISSION"}
            title={"ATTAIN MAXIMUM PERFORMANCE"}
            par1={"Risus velit mollis netus sollicitudin at duis adipiscing ac. Amet porttitor consectetur nunc, sit placerat dictum. Ut faucibus pharetra sed habitant duis convallis quam quis non. Lectus fringilla nunc sed faucibus. Integer sapien, id tempor magna integer sit orci. Vel montes, ante integer diam nisl placerat auctor vitae felis."}
            par2={"Aliquet vitae lacus, consectetur fusce nunc placerat mi. Lectus vitae tellus vel ac sagittis integer. Integer mi tristique gravida purus amet tincidunt magna etiam."}
            order={[2, 1]}
           />
        </div>
    );
}

export default About;