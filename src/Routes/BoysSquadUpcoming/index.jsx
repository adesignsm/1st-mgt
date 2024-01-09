import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

const BoysSquadUpcoming = () => {
    const [models, setModels] = useState([]);
    const [pageData, setPageData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
      return builder.image(source);
    }

    const fetchPageData = async () => {
        try {
            const query = `*[_type == 'boysSquadUpcomingPage'][0]`;
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
            const query = `*[_type == 'boysSquadModels' && defined(modelStats) && defined(modelPictures) && status == 'up-coming'] {
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
  
    useEffect(() => {
      fetchPageData();
    }, []);

    console.log(models)

    return (
        <>
            <main className='boysSquad-upcoming-page'>
                <div className='title-row'>
                    <div className='column-one'>
                        <h1>Boys Squad</h1>
                        {pageData && pageData.subTitle && (<h2>{pageData.subTitle}</h2>)}
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
                                    <img className='thumbnail' src={urlFor(model.modelPictures.upcomingImage.asset._ref).url()} />
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

export default BoysSquadUpcoming;