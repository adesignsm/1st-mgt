import { useEffect, useState } from 'react';
import sanityClient from '../../client';

import './index.css';

const Contact = () => {
    const [data, setData] = useState();
    const [generalData, setGeneralData] = useState([]);
    const [placementData, setPlacementData] = useState([]);
    const [creativePrData, setCreativePrData] = useState([]);
    const [additionalData, setAdditionalData] = useState([]);

    const fetchData = async () => {
        try {
            const query = `*[_type == 'contactPage']`;
            const result = await sanityClient.fetch(query);
            setData(result);
        } catch (error) {   
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            setGeneralData(data[0].generalContact);
            setPlacementData(data[0].placementContact);
            setCreativePrData(data[0].creativeAndPrContact);
            setAdditionalData(data[0].additionalInfo[0]);
        }
    }, [data]);

    return (
        <>
            <main className='contact-page'>
                <h1> Contact</h1>
                <div className='emails-container'>
                    <div className='general-inquiry-container container'>
                        <ul className='contact-title'>
                            {generalData.title && (
                                generalData.title.map((data) => {
                                    return (
                                        <>
                                            <li>{data.titleEn}</li>
                                            <li>{data.titleKr}</li>
                                        </>
                                    )
                                })
                            )}
                        </ul>
                        <ul className='contact-type'>
                            {generalData.emails ? (
                                generalData.emails.map((email) => {
                                    if (email.emailType) {
                                        return (
                                            <>
                                                <li>{email.emailType} - </li>
                                            </>
                                        )
                                    }
                                })
                            ) : (
                                null
                            )}
                        </ul>
                        <ul className='contact-emails'>
                            {generalData.emails && (
                                generalData.emails.map((email) => {
                                    return (
                                        <>
                                            <li>{email.emailAddress}</li>
                                        </>
                                    )
                                })
                            )}
                        </ul>
                    </div>
                    <div className='placement-inquiry-container container'>
                        <ul className='contact-title'>
                            {placementData.title && (
                                placementData.title.map((data) => {
                                    return (
                                        <>
                                            <li>{data.titleEn}</li>
                                            <li>{data.titleKr}</li>
                                        </>
                                    )
                                })
                            )}
                        </ul>
                        <ul className='contact-type'>
                            {placementData.emails ? (
                                placementData.emails.map((email) => {
                                    if (email.emailType) {
                                        return (
                                            <>
                                                <li>{email.emailType} - </li>
                                            </>
                                        )
                                    }
                                })
                            ) : (
                                null
                            )}
                        </ul>
                        <ul className='contact-emails'>
                            {placementData.emails && (
                                placementData.emails.map((email) => {
                                    return (
                                        <>
                                            <li>{email.emailAddress}</li>
                                        </>
                                    )
                                })
                            )}
                        </ul>
                    </div>
                    <div className='creativepr-inquiry-container container'>
                        <ul className='contact-title'>
                            {creativePrData.title && (
                                creativePrData.title.map((data) => {
                                    return (
                                        <>
                                            <li>{data.titleEn}</li>
                                            <li>{data.titleKr}</li>
                                        </>
                                    )
                                })
                            )}
                        </ul>
                        <ul className='contact-type'>
                            {creativePrData.emails ? (
                                creativePrData.emails.map((email) => {
                                    if (email.emailType) {
                                        return (
                                            <>
                                                <li>{email.emailType} - </li>
                                            </>
                                        )
                                    }
                                })
                            ) : (
                                null
                            )}
                        </ul>
                        <ul className='contact-emails'>
                            {creativePrData.emails && (
                                creativePrData.emails.map((email) => {
                                    return (
                                        <>
                                            <li>{email.emailAddress}</li>
                                        </>
                                    )
                                })
                            )}
                        </ul>
                    </div>
                </div>
                <div className='additional-info-container'>
                    {additionalData.enText && (
                        <h4>{additionalData.enText[0].children[0].text}</h4>
                    )}
                    {additionalData.krText && (
                        <h4>{additionalData.krText[0].children[0].text}</h4>
                    )}
                </div>
            </main>
        </>
    )
}

export default Contact;