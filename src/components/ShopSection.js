import React from 'react';
import './ShopSection.css'
import ShopItem from './ShopItem';

function ShopSection() {
    return (
        <section className='pricing-section-container bc_d2 c_w'>
            <div className='pricing-section'>
                <p data-animate='slideInRight' className='shop-p c_o animate'>-- SHOP</p>
                <h3 data-animate='slideInLeft' className='animate'>PRICING OPTIONS THAT FIT YOUR BUDGET AND GOALS</h3>
                <div className='array-of-shop-items'>
                    <ShopItem
                    img={"photo1"}
                    title={"GROUP TRAININGS"}
                    price1={"$49.00 USD"}
                    price2={"$60.00 USD"}
                    n={"7 sessions"}
                    description={"Tincidunt felis, suspendisse euismod eget. Aliquam in quis tempus."}
                    />
                    <ShopItem
                    img={"photo3"}
                    title={"PRIVATE TRAINING"}
                    price1={"$79.00 USD"}
                    price2={""}
                    n={"5 sessions"}
                    description={"Lectus volutpat, pulvinar diam non eu in et ut. A enim dignissim."}
                    />
                    <ShopItem
                    img={"photo4"}
                    title={"MEMBERSHIP"}
                    price1={"$99.00 USD"}
                    price2={""}
                    n={"per month"}
                    description={"Adipiscing arcu ut ut dictum. Eget diam lacus egestas diam."}
                    />
                </div>
            </div>
        </section>
    );
}

export default ShopSection;