import { useEffect, useState } from 'react';
import PopUpEntry from '../PopUpEntry';

import './index.css';
import ENTRY_GIF from '../../Assets/Logos/entry_gif.gif';

const Entry = () => {
    const [hideEntry, setHideEntry] = useState(false);
    const [hidePopUp, setHidePopUp] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHideEntry(true);
        }, 3000);
    }, [hideEntry]);

    return (
        <>
            <div id='entry-screen' className={hideEntry ? 'hideEntry' : null}>
                <img src={ENTRY_GIF} />
            </div>
            {hideEntry && <PopUpEntry />}
        </>
    )
}

export default Entry;