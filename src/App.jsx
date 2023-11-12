import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './root.css';

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Routes/Home";
import FirstMgt from './Routes/FirstMgt';
import News from "./Routes/News";
import Contact from "./Routes/Contact";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/1st-mgt' element={<FirstMgt />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App;