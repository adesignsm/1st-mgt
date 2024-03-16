import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';
import instafeed from "instafeed.js";

import './index.css';

const FirstMgt = () => {
    const [leftColumn, setLeftColumn] = useState();
    const [rightColumn, setRightColumn] = useState();
    const [projectsColumn, setProjectsColumn] = useState([]);
    const [clientsColumn, setClientsColumn] = useState([]);

    const [firstMgtIg, setFirstMgtIg] = useState([]);
    const [naughtyBoyDreamGirlsIg, setNaughtyBoyDreamGirlsIg] = useState([]);
    const [firstMgtLoaded, setFirstMgtLoaded] = useState(false);
    const [naughtyBoysLoaded, setNaughtyBoysLoaded] = useState(false);
    const [dreamGirlsLoaded, setDreamGirlsLoaded] = useState(false);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }
  
    const fetchPageData = async () => {
        try {
            const query = `*[_type == '1stMgtPage'][0]`;
            const result = await sanityClient.fetch(query);
            setLeftColumn(result.leftColumn);
            setRightColumn(result.rightColumn);
            setProjectsColumn(result.projectsColumn);
            setClientsColumn(result.clientsColumn)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchIgData = async () => {
        try {
            const query = `*[_type == 'instagramContent'][0]`;
            const result = await sanityClient.fetch(query);
            setFirstMgtIg(result.firstMgtInstagram);
            setNaughtyBoyDreamGirlsIg(result.boysSquadandNaughtyGirlsCLubInstagram);
        } catch (error) {
            console.error(error);
        }
    };
  
    useEffect(() => {
        fetchPageData();
        fetchIgData();
    }, []);

    const addAnimations = () => {
        const leftColumn = document.querySelector('.column-one');
        const rightColumn = document.querySelector('.column-two');

        setTimeout(() => {
            leftColumn.classList.add('animate-left');
        }, 425);

        setTimeout(() => {
            rightColumn.classList.add('animate-right');
        }, 525);
    }

    useEffect(() => {
        if (firstMgtIg && firstMgtIg.igOptions && !firstMgtLoaded) {
            let instagramFeedFirstMgt = new instafeed({
                accessToken: firstMgtIg.igOptions.accessToken,
                limit: firstMgtIg.igOptions.limit,
                target: 'instafeed-firstMgt'
            });
    
            instagramFeedFirstMgt.run();
            setFirstMgtLoaded(true);
        } else if (naughtyBoyDreamGirlsIg && naughtyBoyDreamGirlsIg.igOptions && !naughtyBoysLoaded && !dreamGirlsLoaded) {
            let instagramFeedNaughtyBoys = new instafeed({
                accessToken: naughtyBoyDreamGirlsIg.igOptions.accessToken_boysSquad,
                limit: naughtyBoyDreamGirlsIg.igOptions.limit,
                target: 'instafeed-naughtyBoys'
            });

            let instagramFeedDreamGirls = new instafeed({
                accessToken: naughtyBoyDreamGirlsIg.igOptions.accessToken_dreamGirls,
                limit: naughtyBoyDreamGirlsIg.igOptions.limit,
                target: 'instafeed-dreamGirls'
            });
    
            if (firstMgtLoaded) {
                instagramFeedNaughtyBoys.run();
                instagramFeedDreamGirls.run();
            }
            
            setNaughtyBoysLoaded(true);
            setDreamGirlsLoaded(true);
        }
    }, [firstMgtIg, naughtyBoyDreamGirlsIg, firstMgtLoaded]);

    useEffect(() => {
        addAnimations();
    }, []);

    return (
        <>  
            <main id='first-mgt-page'>
                <main className='first-mgt-page'>
                    <article className='column-one'>
                        {leftColumn && (
                            <>
                                <article className='first-mgt-copy'>
                                    <h1>{leftColumn.headingText}</h1>
                                    {leftColumn.bodyText_EN.map((item, index) => {
                                        return (
                                            <h2 key={index}>{item.children[0].text}</h2>
                                        )
                                    })}
                                    {leftColumn.bodyText_KR.map((item, index) => {
                                        return (
                                            <h2 key={index}>{item.children[0].text}</h2>
                                        )
                                    })}
                                </article>
                                <article className='trailing-tags'>
                                    {leftColumn.trailingTags.map((item, index) => {
                                        return (
                                            <span key={index}>{item.children[0].text}</span>
                                        )
                                    })}
                                </article>
                            </>
                        )}
                    </article>
                    <div className='column-two'>
                        <div className='first-mgt-image'>
                            {rightColumn && (
                                <img src={urlFor(rightColumn.image.asset._ref).url()} />
                            )}
                        </div>
                    </div>
                </main>
                <main className='first-mgt-instagram'>
                    <article className='copy-container'>
                        {firstMgtIg && (
                            <>
                                <h2>{firstMgtIg.englishText}</h2>
                                <h2>{firstMgtIg.koreanText}</h2>
                            </>
                        )}
                    </article>
                    <div className='instagram-container'>
                        <div id='instafeed-firstMgt' className='instagram-grid'></div>
                    </div>
                    <div className='tags-container'>
                        {firstMgtIg && (
                            <h2>{firstMgtIg.tagText}</h2>
                        )}
                    </div>
                </main>
                <main className='naughty-boys-dream-girls-instagram'>
                    <article className='copy-container'>
                        {naughtyBoyDreamGirlsIg && (
                            <>
                                <h2>{naughtyBoyDreamGirlsIg.englishText}</h2>
                                <h2>{naughtyBoyDreamGirlsIg.koreanText}</h2>
                            </>
                        )}
                    </article>
                    <div className='instagram-feed-container'>
                        <div className='instagram-container'>
                            <div id='instafeed-dreamGirls' className='instagram-grid'></div>
                        </div>
                        <div className='instagram-container'>
                            <div id='instafeed-naughtyBoys' className='instagram-grid'></div>
                        </div>
                    </div>
                </main>
                <main className='projects-and-clients'>
                    <div className='projects-column'>
                        {projectsColumn && (
                            <>
                                <div className='title'>
                                    <h3>{projectsColumn.projectsEnTitle}</h3>
                                    <h3>{projectsColumn.projectsKrTitle}</h3>
                                </div>
                                <div className='media'>
                                    {Object.values(projectsColumn).map((media) => {
                                        if (typeof(media) === 'object') {
                                            return media.map((item, index) => (
                                                <img key={index} src={urlFor(item.asset._ref).url()} alt={`Image ${index}`} />
                                            ));
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                    <div className='clients-column'>
                        {clientsColumn && (
                            <>
                                <div className='title'>
                                    <h3>{clientsColumn.clientsEnTitle}</h3>
                                    <h3>{clientsColumn.clientsKrTitle}</h3>
                                </div>
                                <div className='media'>
                                    {Object.values(clientsColumn).map((media) => {
                                        if (typeof(media) === 'object') {
                                            return media.map((item, index) => (
                                                <img key={index} src={urlFor(item.asset._ref).url()} alt={`Image ${index}`} />
                                            ));
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            </>
                        )}
                    </div>
                </main>
            </main>
        </>
    )
}

export default FirstMgt;