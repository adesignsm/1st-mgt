import { useState, useEffect } from "react";
import { TfiClose } from 'react-icons/tfi';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

const PopUpEntry = () => {
    const [popUpEntrydata, setPopUpEntryData] = useState([]);
    const [backgroundData, setBackgroundData] = useState([]);
    const [hidePopUp, setHidePopUp] = useState(true);

    const fetchData = async () => {
        try {
            const query = `*[_type == 'popUp'][0]`;
            const result = await sanityClient.fetch(query);
            setBackgroundData(result.popUpEntry.backgrounImage);
            setPopUpEntryData(result);
            if (popUpEntrydata) {
                setTiming();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const builder = ImageUrlBuilder(sanityClient);
    const urlFor = (source) => {
      return builder.image(source);
    }

    const setTiming = () => {
        const timingData = popUpEntrydata?.popUpEntry?.popupTiming;
        const timing = timingData !== undefined ? timingData + '000' : 3 + '000';

        setTimeout(() => {
            setHidePopUp(false);
        }, parseInt(timing));
    }

    const updatePopUpHide = () => {
        setHidePopUp(true);
    }

    const videoConversion = (source) => {
        const assetRef = source.asset !== undefined ? source.asset._ref : null;
        const withoutFilePrefix = assetRef !== null ? assetRef.replace('file-', '') : null;
        const modifiedAssetRef = withoutFilePrefix !== null ? withoutFilePrefix.replace(/-(?=[^-]*$)/, '.') : null;
        const mutatedRef = 'https://cdn.sanity.io/files/gvoh9rir/production/' + modifiedAssetRef;

        return (
            <video className='lightbox-video' autoPlay loop controls='false' muted>
                <source src={mutatedRef} type="video/mp4" />
            </video>
        );
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {popUpEntrydata.toggle === true && (
                <div 
                    className={`popup-entry-container ${hidePopUp ? 'hidePopUp' : 'showPopUp'}`}
                    style={{
                        backgroundImage: backgroundData[0] && 
                        backgroundData[0]._type === 'image' && `url(${urlFor(backgroundData[0].asset._ref).url()})`,
                        
                        height: popUpEntrydata && `${popUpEntrydata.popUpEntry.bannerSize.height}vh`,
                        width: popUpEntrydata && `${popUpEntrydata.popUpEntry.bannerSize.width}vw`
                    }}
                    
                >
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
                    {backgroundData[0] && backgroundData[0]._type === 'file' && (
                        videoConversion(backgroundData[0])
                    )}
                </div>
            )}
        </>
    )
}

export default PopUpEntry;