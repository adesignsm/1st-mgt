import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import sanityClient from './client';
import './root.css';

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Home = React.lazy(() => import("./Routes/Home"));
const FirstMgt = React.lazy(() => import('./Routes/FirstMgt'));
const News = React.lazy(() => import("./Routes/News"));
const Contact = React.lazy(() => import("./Routes/Contact"));
const ShowPackages = React.lazy(() => import("./Routes/ShowPaclages"));
const GirlsClubInTown = React.lazy(() => import("./Routes/GirlsClubInTown"));
const GirlsClubOutOfTown = React.lazy(() => import("./Routes/GirlsClubOutOfTown"));
const GirlsClubUpcoming = React.lazy(() => import("./Routes/GirlsClubUpcoming"));
const GirlsClubIndividual = React.lazy(() => import("./Routes/GirlsClubIndividual"));
const BoysSquadInTown = React.lazy(() => import("./Routes/BoysSquadInTown"));
const BoysSquadOutOfTown = React.lazy(() => import("./Routes/BoysSquadOutOfTown"));
const BoysSquadUpcoming = React.lazy(() => import("./Routes/BoysSquadUpcoming"));
const BoysSquadIndividual = React.lazy(() => import("./Routes/BoysSquadIndividual"));

const App = () => {
    const [settings, setSettings] = useState([]);

    const fetchSettingss = async () => {
        try {
            const query = `*[_type == 'settings'][0]`; 
            const result = await sanityClient.fetch(query);
            setSettings(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchSettingss();
    }, []);

    useEffect(() => {
        const filler = document.querySelector('.filler');

        if (filler && filler !== null) {
            setTimeout(() => {
                filler.classList.add('hide');
            }, 500);
        }
    }, []);

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
                        <Route path='/girls-club/in-town' element={<GirlsClubInTown settings={settings}/>} />
                        <Route path='/girls-club/out-of-town' element={<GirlsClubOutOfTown settings={settings}/>} />
                        <Route path='/girls-club/upcoming' element={<GirlsClubUpcoming settings={settings}/>} />
                        <Route path='/girls-club/:model' element={<GirlsClubIndividual />} />
                        <Route path='/boys-squad/in-town' element={<BoysSquadInTown settings={settings}/>} />
                        <Route path='/boys-squad/out-of-town' element={<BoysSquadOutOfTown settings={settings}/>} />
                        <Route path='/boys-squad/upcoming' element={<BoysSquadUpcoming settings={settings}/>} />
                        <Route path='/boys-squad/:model' element={<BoysSquadIndividual />} />
                    </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App;