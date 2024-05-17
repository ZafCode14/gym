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

function App() {
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
