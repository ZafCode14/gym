import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import '../src/components/buttons.css'

function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
    ); 
}

export default App;
