import { useState, useEffect } from "react";
import { TfiClose } from 'react-icons/tfi';
import sanityClient from '../../client';

import './index.css';

const PopUpEntry = () => {
    const [popUpEntrydata, setPopUpEntryData] = useState([]);
    const [hidePopUp, setHidePopUp] = useState(false);

    const fetchData = async () => {
        try {
          const query = `*[_type == 'popUp'][0]`;
          const result = await sanityClient.fetch(query);
          setPopUpEntryData(result);
        } catch (error) {
          console.error(error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    const updatePopUpHide = () => {
        setHidePopUp(true);
    }

    return (
        <>
            {popUpEntrydata.toggle === true && (
                <div className={`popup-entry-container ${hidePopUp ? 'hidePopUp' : 'showPopUp'}`}>
                    <TfiClose size={40} onClick={() => updatePopUpHide()} className='popup-close-button'/>
                    <h1>{popUpEntrydata.popUpEntry.headingText}</h1>
                    <a href='/show-packages'>{popUpEntrydata.popUpEntry.enterButtonText}</a>
                </div>
            )}
        </>
    )
}

export default PopUpEntry;