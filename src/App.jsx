import { BrowserRouter, Routes, Route } from "react-router-dom";
import './root.css';

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Routes/Home";
import FirstMgt from './Routes/FirstMgt';
import News from "./Routes/News";
import Contact from "./Routes/Contact";
import ShowPackages from "./Routes/ShowPaclages";
import GirlsClubInTown from "./Routes/GirlsClubInTown";
import GirlsClubOutOfTown from "./Routes/GirlsClubOutOfTown";
import GirlsClubUpcoming from "./Routes/GirlsClubUpcoming";

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
                    <Route path='/show-packages' element={<ShowPackages />} />
                    <Route path='/girls-club/in-town' element={<GirlsClubInTown />} />
                    <Route path='/girls-club/out-of-town' element={<GirlsClubOutOfTown />} />
                    <Route path='/girls-club/up-coming' element={<GirlsClubUpcoming />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App;