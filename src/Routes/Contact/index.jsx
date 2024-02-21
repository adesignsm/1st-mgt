import { useEffect, useState } from 'react';
import sanityClient from '../../client';

import './index.css';

const Contact = () => {
    const [data, setData] = useState();
    const [generalData, setGeneralData] = useState([]);
    const [placementData, setPlacementData] = useState([]);
    const [creativePrData, setCreativePrData] = useState([]);
    const [additionalData, setAdditionalData] = useState([]);
    const [mapData, setMapData] = useState([]);
    const [addressData, setAddressData] = useState([]);

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
            setMapData(data[0].mapSection);
            setAddressData(data[0].mapSection.address);
        }
    }, [data]);

    console.log(addressData[0].enAddress[0].children[0].text)

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
                                            <li className='kr'>{data.titleKr}</li>
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
                                                <li>{email.emailType}</li>
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
                                            <li>
                                                <a href={`mailto:${email.emailAddress}`}>
                                                    {email.emailAddress}
                                                </a>
                                            </li>
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
                                            <li className='kr'>{data.titleKr}</li>
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
                                                <li>{email.emailType}</li>
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
                                            <li>
                                                <a href={`mailto:${email.emailAddress}`}>
                                                    {email.emailAddress}
                                                </a>
                                            </li>
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
                                            <li className='kr'>{data.titleKr}</li>
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
                                                <li>{email.emailType}</li>
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
                                            <li>
                                                <a href={`mailto:${email.emailAddress}`}>
                                                    {email.emailAddress}
                                                </a>
                                            </li>
                                        </>
                                    )
                                })
                            )}
                        </ul>
                    </div>
                </div>
                <div className='additional-info-container'>
                    <div className='content'>
                        {additionalData.enText && (
                            <h4>
                                {additionalData.enText[0].children.map((child) => {
                                    if (child.text === additionalData.enText[0].markDefs[0].href) {
                                        return (
                                          <a href={child.text} key={child._key}>
                                            {child.text}
                                          </a>
                                        );
                                      } else {
                                        return child.text;
                                      }
                                })}
                            </h4>
                        )}
                        {additionalData.krText && (
                            <h4>
                                {additionalData.krText[0].children.map((child) => {
                                    if (child.text === additionalData.krText[0].markDefs[0].href) {
                                        return (
                                          <a href={child.text} key={child._key}>
                                            {child.text}
                                          </a>
                                        );
                                    } else {
                                        return child.text;
                                    }
                                })}
                            </h4>
                        )}
                    </div>
                </div>
                <div className='map-section'>
                    <div className='phone-numbers'>
                        {mapData && mapData.phoneNumbers && mapData.phoneNumbers[0].enText && (
                            <h4>
                                {mapData.phoneNumbers[0].enText[0].children.map((child) => {
                                    if (child.text === mapData.phoneNumbers[0].enText[0].markDefs[0].href) {
                                        return (
                                          <a href={`tel:${child.text}`} key={child._key}>
                                            {child.text}
                                          </a>
                                        );
                                      } else {
                                        return child.text;
                                      }
                                })}
                            </h4>
                        )}
                        {mapData && mapData.phoneNumbers && mapData.phoneNumbers[0].krText && (
                            <h4>
                                {mapData.phoneNumbers[0].krText[0].children.map((child) => {
                                    if (child.text === mapData.phoneNumbers[0].krText[0].markDefs[0].href) {
                                        return (
                                          <a href={`tel:${child.text}`} key={child._key}>
                                            {child.text}
                                          </a>
                                        );
                                      } else {
                                        return child.text;
                                      }
                                })}
                            </h4>
                        )}
                    </div>
                    <div className='map'>
                        {mapData && mapData.mapIframe && (
                            <div className='iframe-container' dangerouslySetInnerHTML={{ __html: mapData.mapIframe }} />
                        )}
                    </div>
                    <div className='addresses'>
                        {mapData && mapData.address && (
                            <>
                                <h3 className='address'>
                                    {addressData[0].enAddress[0].children[0].text}
                                </h3>
                                <h3 className='address' style={{fontWeight: 'lighter'}}>
                                    {addressData[0].krAddress[0].children[0].text}
                                </h3>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact;