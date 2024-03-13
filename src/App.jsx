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
import GirlsClubIndividual from "./Routes/GirlsClubIndividual";

import BoysSquadInTown from "./Routes/BoysSquadInTown";
import BoysSquadOutOfTown from "./Routes/BoysSquadOutOfTown";
import BoysSquadUpcoming from "./Routes/BoysSquadUpcoming";
import BoysSquadIndividual from "./Routes/BoysSquadIndividual";

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
                    <Route path='/girls-club/upcoming' element={<GirlsClubUpcoming />} />
                    <Route path='/girls-club/:model' element={<GirlsClubIndividual />} />
                    <Route path='/boys-squad/in-town' element={<BoysSquadInTown />} />
                    <Route path='/boys-squad/out-of-town' element={<BoysSquadOutOfTown />} />
                    <Route path='/boys-squad/upcoming' element={<BoysSquadUpcoming />} />
                    <Route path='/boys-squad/:model' element={<BoysSquadIndividual />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App;