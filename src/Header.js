import React, { useState } from 'react';
import './Header.css'

function Header() {
    const [isNav, setIsNav] = useState(false);

    const navStyle = {
        height: !isNav ? "0" : "100vh"
    }

    const handleNav = () => {
        setIsNav(prev => !prev)
    }

    return (
        <header>
            <div className='logo'>
                <h3 className='name nav-button'>ZEUS</h3>
                <img src='./images/LightningBolt.png' alt='lightning bolt'/>
            </div>
            <div className='nav-buttons'>
                <h5 className='nav-button'>HOME</h5>
                <h5 className='nav-button'>SERVICES</h5>
                <h5 className='nav-button'>CONTACT</h5>
                <h5 className='nav-button'>ABOUT</h5>
                <h5 className='nav-button'>SHOP</h5>
                <h5 className='bam'>BECOME A MEMBER</h5>
                <div onClick={handleNav} className='img-btn bars'>
                    <img src='./images/Menu.png' alt='menue icon'/>
                </div>
                <div className='img-btn shopping-cart'>
                    <img src='./images/ShoppingCart.png' alt='shopping car icon'/>
                </div>
            </div>
            <div onClick={handleNav} style={navStyle} className='nav-hidden'>
                <div className='nav-button-hidden'>
                    <p>HOME</p>
                </div>
                <div className='nav-button-hidden'>
                    <p>SERVICES</p>
                </div>
                <div className='nav-button-hidden'>
                    <p>ABOUT</p>
                </div>
                <div className='nav-button-hidden'>
                    <p>CONTACT</p>
                </div>
                <div className='bam-hidden'>
                    <p>BECOME A MEMBER</p>
                </div>
            </div>
        </header>
    );
}

export default Header;