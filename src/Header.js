import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    const [isNav, setIsNav] = useState(false);

    const navStyle = {
        height: !isNav ? "0" : "100vh"
    }

    const handleNav = () => {
        setIsNav(prev => !prev)
    }

    const TopLink = () => window.scrollTo(0, 0);

    return (
        <header>
            <Link onClick={TopLink} className='link c_w logo' to={'./'}>
                <h3 className='name nav-button'>ZEUS</h3>
                <img src='./images/LightningBolt.png' alt='lightning bolt'/>
            </Link>
            <div className='nav-buttons'>
                <Link onClick={TopLink} className='link nav-button c_w' to={'/'}>HOME</Link>
                <Link onClick={TopLink} className='link c_w' to={'/services'}>SERVICES</Link>
                <Link onClick={TopLink} className='link c_w' to={'/about'}>ABOUT</Link>
                <Link onClick={TopLink} className='link c_w' to={'/contact'}>CONTACT</Link>
                <Link onClick={TopLink} className='link c_w' to={'/shop'}>SHOP</Link>
                <Link onClick={TopLink} className='link bam c_b bc_o' to={'/become-a-member'}>BECOME A MEMBER</Link>
                <div onClick={handleNav} className='img-btn bars'>
                    <img src='./images/Menu.png' alt='menue icon'/>
                </div>
                <div className='img-btn shopping-cart'>
                    <img src='./images/ShoppingCart.png' alt='shopping car icon'/>
                </div>
            </div>
            <div onClick={handleNav} style={navStyle} className='nav-hidden'>
                <Link onClick={TopLink} className='link c_w' to={'/'}>HOME</Link>
                <Link onClick={TopLink} className='link c_w' to={'/services'}>SERVICES</Link>
                <Link onClick={TopLink} className='link c_w' to={'/about'}>ABOUT</Link>
                <Link onClick={TopLink} className='link c_w' to={'/contact'}>CONTACT</Link>
                <Link onClick={TopLink} className='link c_w' to={'/shop'}>SHOP</Link>
                <Link onClick={TopLink} className='link bam c_b' to={'/become-a-member'}>BECOME A MEMBER</Link>
            </div>
        </header>
    );
}

export default Header;