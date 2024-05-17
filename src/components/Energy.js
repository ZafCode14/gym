import React from 'react';
import './Energy.css'
import EnBlock from './EnBlock';

function Energy() {
    return (
        <section className="bc_d1" style={{padding: "100px 0"}}>
            <div className='group-section bc_d1 c_w'>
                <p data-animate='slideInRight' className='c_o animate'>-- GROUP --</p>
                <h3 data-animate='slideInLeft' className='animate'>ENERGY IS FOR EVERYONE</h3>
                <div className='energy-blocks'>
                    <EnBlock
                    icon={"./images/Spinning.png"}
                    title={"THE RIDE"}
                    description={"Viverra nulla vel ultricies in sit. Eu ullamcorper fringilla platea natoque"}
                    />
                    <EnBlock
                    icon={"./images/PrenatalYoga.png"}
                    title={"MIND BODY BURN"}
                    description={"Semper augue dictumst eros mattis in leo elit venena ultrices."}
                    />
                    <EnBlock
                    icon={"./images/Dancing.png"}
                    title={"CARDIO & DANCE"}
                    description={"Neque quam morbi euismod cras ullamcorper nibh purus lacinia."}
                    />
                    <EnBlock
                    icon={"./images/Deadlift.png"}
                    title={"ACTION SPORTS"}
                    description={"In amet a donec amet dolor, viverra urna tempor. Ultrices et risus amet."}
                    />
                </div>
            </div>
        </section>
    );
}

export default Energy;