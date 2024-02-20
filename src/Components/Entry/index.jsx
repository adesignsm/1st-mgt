import { useEffect, useState } from 'react';
import PopUpEntry from '../PopUpEntry';

import './index.css';
import ENTRY_GIF from '../../Assets/Logos/entry_gif.gif';

const Entry = () => {
    const [hideEntry, setHideEntry] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHideEntry(true);
        }, 3000);
    }, [hideEntry]);

    const handleClick = () => {
        setHideEntry(true);
    }

    return (
        <>
            <div id='entry-screen' className={hideEntry ? 'hideEntry' : null}>
                <img src={ENTRY_GIF} onClick={handleClick} />
            </div>
            {hideEntry && <PopUpEntry />}
        </>
    )
}

export default Entry;