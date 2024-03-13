import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

const GirlsClubOutOfTown = () => {
    const [models, setModels] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [showListItem, setShowListItem] = useState(false);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
      return builder.image(source);
    }

    const fetchPageData = async () => {
        try {
            const query = `*[_type == 'girlsClubOutOfTownPage'][0]`;
            const result = await sanityClient.fetch(query);
            setPageData(result);
        } catch (error) {
            console.error(error);
        }

        if (pageData) {
            fetchModelData();
        }
    };
  
    const fetchModelData = async () => {
        try {
            const query = `*[_type == 'girlsClubModels' && defined(modelStats) && defined(modelPictures) && status == 'out-of-town'] {
                modelName,
                modelStats,
                modelPictures
            }`;
            const result = await sanityClient.fetch(query);
            setModels(result);
        } catch (error) {
            console.error(error);
        }
    };

    const handleHover = (e) => {
        const url = e.target.href;
        const path = new URL(url).pathname;

        if (window.location.href.includes(path)) {
            setShowListItem(true)
        }
    }
  
    useEffect(() => {
      fetchPageData();
    }, []);

    return (
        <>
            <main className='girlsclub-outoftown-page'>
                <div className='title-row'>
                    <div className='column-one'>
                        <h1>Girls Club</h1>
                        {pageData && pageData.navigation && (
                            <ul className='girls-club-navigation' onMouseLeave={() => setShowListItem(false)}>
                                {pageData.navigation.map((item, index) => {
                                    return (
                                        <li 
                                            key={index} 
                                            className={!showListItem && index > 0 ? 'hide' : ''}
                                        >
                                            <a 
                                                href={`/girls-club/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                onMouseEnter={(e) => handleHover(e)}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>
                    <div className='column-two'>
                        {pageData && pageData.breadcrumb && (
                            <a href={pageData.breadcrumb}>
                                @{pageData.breadcrumb.split('/').filter(part => part !== "")[2]}
                            </a>
                        )}
                    </div>
                </div>
                <div className='models-grid'>
                    {models && (
                        models.map((model, index) => {
                            return (
                                <a className='model-cell' href={`/girls-club/${model.modelName}`}>
                                    <img className='thumbnail' src={urlFor(model.modelPictures.outOfTownImage.asset._ref).url()} />
                                    <h2>{model.modelName}</h2>
                                </a>
                            )
                        })
                    )}
                </div>
            </main>
        </>
    )
}

export default GirlsClubOutOfTown;