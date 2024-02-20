import { useState, useEffect } from "react";

import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';
import LightBox from "../../Components/LightBox";

const BoysSquadIndividual = () => {
    const [urlSuffix, setUrlSuffix] = useState('');
    const [modelData, setModelData] = useState([]);
    const [modelStats, setModelStats] = useState([]);
    const [modelImageContent, setModelImageContent] = useState([]);
    const [modelFileContent, setModelFileContent] = useState([]);
    const [imageIndex, setImageIndex] = useState(null);

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
            const query = `*[_type == 'boysSquadModels' && defined(modelStats) && defined(modelPictures)] {
                modelName,
                modelStats,
                modelPictures,
                modelLightbox,
            }`;
            const result = await sanityClient.fetch(query);
            const matchingModel = result.find((model) => urlSuffix.includes(model.modelName));

            if (matchingModel) {
                setModelData(matchingModel);
                setModelStats(matchingModel.modelStats);
                const imageContent = matchingModel.modelPictures.content.filter((item) => item._type === 'image');
                const videoContent = matchingModel.modelPictures.content.filter((item) => item._type === 'file');
                setModelImageContent(imageContent);
                setModelFileContent(videoContent);
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

    const handleImageClick = (e) => {
        setImageIndex(parseInt(e.target.dataset.value));
        document.getElementById('lightbox').style.display = 'flex';
    }
    
    const videoConversion = (source) => {
        const assetRef = source.asset._ref;
        const withoutFilePrefix = assetRef.replace('file-', '');
        const modifiedAssetRef = withoutFilePrefix.replace(/-(?=[^-]*$)/, '.');
        const mutatedRef = 'https://cdn.sanity.io/files/gvoh9rir/production/' + modifiedAssetRef;

        return (
            <video className='lightbox-video' controls autoPlay={false}>
                <source src={mutatedRef} type="video/mp4" />
            </video>
        );
    }

    return (
        <>
            <main className="boysSquad-individual-page">
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
                                                chest {modelStats.chest.initialMeasurement}
                                                {modelStats.chest.unit === 'cm' ? 'cm' : 
                                                 modelStats.chest.unit === 'ft' ? 'ft' : 
                                                 modelStats.chest.unit === '"' ? '"' :
                                                 modelStats.chest.unoutoftownwaiit === 'MM' ? 'mm' : 'Unknown'
                                                }
                                            </li>
                                            <li>
                                                waist {modelStats.waist.initialMeasurement}
                                                {modelStats.waist.unit === 'cm' ? 'cm' : 
                                                 modelStats.waist.unit === 'ft' ? 'ft' : 
                                                 modelStats.waist.unit === '"' ? '"' :
                                                 modelStats.waist.unit === 'mm' ? 'mm' : 'Unknown'
                                                }
                                            </li>
                                            <li>
                                                hips {modelStats.hips.initialMeasurement}
                                                {modelStats.hips.unit === 'cm' ? 'cm' : 
                                                 modelStats.hips.unit === 'ft' ? 'ft' : 
                                                 modelStats.hips.unit === '"' ? '"' :
                                                 modelStats.hips.unit === 'mm' ? 'mm' : 'Unknown'
                                                }
                                            </li>
                                            <li>
                                                shoes {modelStats.foot.initialMeasurement}
                                                {modelStats.foot.unit === 'cm' ? 'cm' : 
                                                 modelStats.foot.unit === 'ft' ? 'ft' : 
                                                 modelStats.foot.unit === '"' ? '"' :
                                                 modelStats.foot.unit === 'mm' ? 'mm' : 'Unknown'
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
                        {Object.keys(modelImageContent).length > 0 && (
                            <img className="hero-image" src={urlFor(modelImageContent[0].asset._ref).url()} />
                        )}
                    </div>
                </div>
                <div className="model-collage">
                    <h1>{modelData.modelName}</h1>
                    <div className="collage">
                        {(Object.keys(modelImageContent).length > 0 || Object.keys(modelFileContent).length > 0) && (
                            [...Object.values(modelImageContent), ...Object.values(modelFileContent)].map((content, index) => {
                            return (
                                <div key={index}>
                                    {content.asset !== undefined && content._type === 'image' && (
                                        <img 
                                            src={urlFor(content.asset._ref).url()} 
                                            onClick={(e) => handleImageClick(e)}
                                            data-value={index}
                                        />
                                    )}
                                    {content._type === 'file' && (
                                        videoConversion(content)
                                    )}
                                </div>
                            );
                            })
                        )}
                        </div>
                </div>
            </main>
            <LightBox data={[modelImageContent, modelFileContent, imageIndex]} />
        </>
    )
}

export default BoysSquadIndividual;