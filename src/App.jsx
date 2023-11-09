import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './root.css';

import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

import Home from "./Routes/Home";
import FirstMgt from './Routes/FirstMgt';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Menu />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/1st-mgt' element={<FirstMgt />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App;