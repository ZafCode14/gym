import React from 'react';
import './Home.css'
import Classes from '../components/Classes';
import Energy from '../components/Energy';
import ShopSection from '../components/ShopSection';
import LocationSection from '../components/LocationSection';
import FAQ from '../components/FAQ';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const handleScroll = () => {
            var elem = document.querySelectorAll('.animate');
            var scrollPos = window.scrollY;
            var wh = window.innerHeight;

            elem.forEach(function (el) {
                var isAnimate = el.dataset.animate;
                var elemOffset = el.offsetTop;

                if (scrollPos > elemOffset - wh + (wh / 8)) {
                    el.classList.add(isAnimate);
                }
            });
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main>
            <div className='hero-section c_w'>
                <div className='hero'>
                    <h1 data-animate='slideInLeft' className='animate'>HELPING YOU REACH HIGHER AND <b>ACHIEVE MORE</b></h1>
                    <p data-animate='slideInRight' className='animate'>Get real results at Zeus with a plan tailored to your needs. Your fitness and health are important to us.</p>
                    <button data-animate='scale' className='button1 animate'>GET STARTED</button>
                </div>
                <div className='hero-buttons-container'>
                    <Classes
                    icon={"./images/Wrestling.png"}
                    title={"CLASSES"}
                    description={"Lacus duis consectetur elementum pharetra, dictumst dictum nulla adipiscing."}
                    />
                    <Classes
                    icon={"./images/PersonalTrainer.png"}
                    title={"PERSONAL TRAINING"}
                    description={"Nulla mi bibendum in quis ac turpis sapien massa. Quam turpis tempus ut dolor."}
                    />
                    <Classes
                    icon={"./images/Crossfit.png"}
                    title={"CROSSFIT"}
                    description={"Duis scelerisque montes, libero egestas. Sit nec etiam auctor augue justo. Vel nec vitae."}
                    />
                </div>
                <section className='section-about bc_d1 c_w'>
                    <div className='about-us flx'>
                        <div data-animate='slideInLeft' className='about-us-left animate'>
                            <p className='c_o'>-- WELCOME</p>
                            <h3>DEDICATED TO IGNITING YOUR PASSION FOR HEALTH</h3>
                            <p>Ut magna amet, a malesuada. Nibh in interdum at sem senectus pulvinar aliquam orci. Adipiscing malesuada urna sed urna in nunc volutpat ipsum. Dictumst nunc et velit sed curabitur lobortis viverra sapien.</p>
                            <button className='button1'>ABOUT US</button>
                        </div>
                        <div data-animate='slideInRight' className='photo1 animate'></div>
                    </div>
                </section>
                <section className='section-about bc_d2'>
                    <div className='about-us flx'>
                        <div data-animate='slideInLeft' className='photo2 animate'></div>
                        <div data-animate='slideInRight' className='about-us-left animate'>
                            <p className='c_o'>-- FITNESS CLASS</p>
                            <h3>GET INSIGHT INTO THE CLUB AND LEARN WHAT TO EXPECT</h3>
                            <p>Quisque volutpat a massa ipsum aliquam cursus imperdiet metus. Mauris tellus fermentum ut neque ac tincidunt non odio eget. Tortor pellentesque morbi odio gravida egestas ornare cras. Sem est urna, eget.</p>
                            <button className='button1'>SERVICES</button>
                        </div>
                    </div>
                </section>
                <Energy/>
                <ShopSection/>
                <LocationSection/>
                <FAQ/>
                <section className="book-section c_w bc_d1">
                    <div className='book-container'>
                        <h2 data-animate='slideInLeft' className='animate'><span className='c_o'>BOOK A SESSION</span> AND START YOUR 7 DAY TRIAL TODAY!</h2>
                        <button data-animate='scale' className='button1 animate'>GET STARTED</button>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Home;