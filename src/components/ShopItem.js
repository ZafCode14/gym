import React from 'react';

function ShopItem(props) {
    const string = `img-div ${props.img}`
    return (
        <div data-animate='slideInUp' className='shop-card animate'>
            <div className={string}></div>
            <div className='shop-card-info'>
                <h4>{props.title}</h4>
                <h5 className='c_o'>{props.price1}<span className='c_w'>{props.price2}</span></h5>
                <h6>{props.n}</h6>
                <p>{props.description}</p>
                <button className='button1'>ADD TO CART</button>
            </div>
        </div>
    );
}

export default ShopItem;