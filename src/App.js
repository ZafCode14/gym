import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import '../src/components/buttons.css'
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import BecomeAMember from './pages/BecomeAMember';
import { useEffect } from 'react';

function App() {
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
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/become-a-member" element={<BecomeAMember/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
    ); 
}

export default App;
