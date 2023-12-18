import { useState, useEffect } from "react";

import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

const GirlsClubIndividual = () => {
    const [urlSuffix, setUrlSuffix] = useState('');
    const [modelData, setModelData] = useState([]);
    const [modelStats, setModelStats] = useState([]);
    const [modelContent, setModelContent] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
      return builder.image(source);
    }

    useEffect(() => {
        const url = window.location.href;
        const urlParts = url.split('/');
        const suffix = urlParts.pop();
        const decodedSuffix = decodeURIComponent(suffix.replace(/\+/g, ' '));
        
        setUrlSuffix(decodedSuffix);
    }, []);

    const fetchModelData = async () => {
        try {
            const query = `*[_type == 'girlsClubModels' && defined(modelStats) && defined(modelPictures)] {
                modelName,
                modelStats,
                modelPictures,
            }`;
            const result = await sanityClient.fetch(query);
            const matchingModel = result.find((model) => urlSuffix.includes(model.modelName));
            if (matchingModel) {
                setModelData(matchingModel);
                setModelStats(matchingModel.modelStats);
                setModelContent(matchingModel.modelPictures.content);
            }

        } catch (error) {
            console.error(error);
        }
    };
  
    useEffect(() => {
        if (urlSuffix) {
            fetchModelData();
        }
    }, [urlSuffix]);

    console.log(modelContent)

    return (
        <>
            <main className="girlsclub-individual-page">
                <div className="hero">
                    <div className="left-column">
                        {modelData && (
                            <>
                                <h1>{modelData.modelName}</h1>
                                <ul className="model-stats-list">
                                    {Object.keys(modelStats).length > 0 && (
                                        <>
                                            <li>
                                                height {modelStats.height && modelStats.height.initialMeasurement}
                                                {modelStats.height.unit}
                                            </li>
                                            <li>
                                                bust {modelStats.bust.initialMeasurement}
                                                {modelStats.bust.unit === 'cm' ? 'cm' : 
                                                 modelStats.bust.unit === 'ft' ? 'ft' : 
                                                 modelStats.bust.unit === 'inches' ? '"' :
                                                 modelStats.bust.unoutoftownwaiit === 'mm' ? 'mm' : 'Unknown'
                                                }
                                            </li>
                                            <li>
                                                waist {modelStats.waist.initialMeasurement}
                                                {modelStats.waist.unit === 'cm' ? 'cm' : 
                                                 modelStats.waist.unit === 'ft' ? 'ft' : 
                                                 modelStats.waist.unit === 'inches' ? '"' :
                                                 modelStats.waist.unit === 'mm' ? 'mm' : 'Unknown'
                                                }
                                            </li>
                                            <li>
                                                hips {modelStats.hips.initialMeasurement}
                                                {modelStats.hips.unit === 'cm' ? 'cm' : 
                                                 modelStats.hips.unit === 'ft' ? 'ft' : 
                                                 modelStats.hips.unit === 'inches' ? '"' :
                                                 modelStats.hips.unit === 'mm' ? 'mm' : 'Unknown'
                                                }
                                            </li>
                                            <li>
                                                shoes {modelStats.foot.initialMeasurement}
                                                {modelStats.foot.unit === 'cm' ? 'cm' : 
                                                 modelStats.foot.unit === 'ft' ? 'ft' : 
                                                 modelStats.foot.unit === 'inches' ? '"' :
                                                 modelStats.foot.unit === 'millimeters' ? 'mm' : 'Unknown'
                                                }
                                            </li>
                                        </>
                                    )}
                                </ul>
                                {Object.keys(modelStats).length > 0 && (
                                    <ul>
                                        <li>hair {modelStats.hair && modelStats.hair}</li>
                                        <li>eyes {modelStats.eye && modelStats.eye}</li>
                                    </ul>
                                )}
                            </>
                        )}
                    </div>
                    <div className="right-column">
                        {Object.keys(modelContent).length > 0 && (
                            <img className="hero-image" src={urlFor(modelContent[0].asset._ref).url()} />
                        )}
                    </div>
                </div>
                <div className="model-collage">
                    <h1>{modelData.modelName}</h1>
                    <div className="collage">
                        {Object.keys(modelContent).length > 0 && (
                            Object.keys(modelContent).map((content) => {
                                return (
                                    <img src={urlFor(modelContent[content].asset._ref).url()} />
                                )
                            })
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default GirlsClubIndividual;