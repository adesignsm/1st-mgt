import { useState, useEffect } from "react";
import { TfiClose } from 'react-icons/tfi';
import sanityClient from '../../client';

import './index.css';

const PopUpEntry = () => {
    const [popUpEntrydata, setPopUpEntryData] = useState([]);
    const [hidePopUp, setHidePopUp] = useState(true);

    const fetchData = async () => {
        try {
            const query = `*[_type == 'popUp'][0]`;
            const result = await sanityClient.fetch(query);
            setPopUpEntryData(result);
            
            if (popUpEntrydata) {
                setTiming();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const setTiming = () => {
        const timingData = popUpEntrydata?.popUpEntry?.popupTiming;
        const timing = timingData !== undefined ? timingData + '000' : 3 + '000';

        setTimeout(() => {
            setHidePopUp(false);
        }, parseInt(timing));
    }
    
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
                    {popUpEntrydata && popUpEntrydata.popUpEntry && (
                        <a 
                            href={popUpEntrydata.popUpEntry.enterButtonText.modelRedirect.toggle 
                                ? popUpEntrydata.popUpEntry.enterButtonText.modelRedirect.url
                                : '/show-packages'
                            }
                        >
                            {popUpEntrydata.popUpEntry.enterButtonText.text}
                        </a>
                    )}
                </div>
            )}
        </>
    )
}

export default PopUpEntry;