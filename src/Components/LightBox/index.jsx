import { useEffect, useState } from "react";
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import { TfiClose } from 'react-icons/tfi';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import './index.css';

const LightBox = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const builder = ImageUrlBuilder(sanityClient);
    const urlFor = (source) => {
      return builder.image(source);
    }

    const handleLeftArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data[0].length) % data[0].length);

        if (document.querySelector('.lightbox-video')) {
            document.querySelector('.lightbox-video').currentTime = 0;
            document.querySelector('.lightbox-video').pause();
        } 
    };

    const handleRightArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data[0].length);

        if (document.querySelector('.lightbox-video')) {
            document.querySelector('.lightbox-video').currentTime = 0;
            document.querySelector('.lightbox-video').pause();
        } 
    }

    const handleCloseClick = () => {
        document.getElementById('lightbox').style.display = 'none';
        const lightboxVideo = document.querySelector('.slide.active .lightbox-video');
        
        if (lightboxVideo) {
            lightboxVideo.currentTime = 0;
            lightboxVideo.pause();
        }
    }

    const videoConversion = (source) => {
        const assetRef = source.asset !== undefined ? source.asset._ref : null;
        const withoutFilePrefix = assetRef !== null ? assetRef.replace('file-', '') : null;
        const modifiedAssetRef = withoutFilePrefix !== null ? withoutFilePrefix.replace(/-(?=[^-]*$)/, '.') : null;
        const mutatedRef = 'https://cdn.sanity.io/files/gvoh9rir/production/' + modifiedAssetRef;

        return (
            <video id='lightbox-video' className='lightbox-video' controls autoPlay={false}>
                <source src={mutatedRef} type="video/mp4" />
            </video>
        );
    }

    useEffect(() => {
        if (data.length === 3) {
            setCurrentIndex(data[2]);
        } else {
            setCurrentIndex(data[1]);
        }
    }, [data[data.length === 3 ? 2 : 1]]);

    return (
        <>
            <div id='lightbox' className='lightbox'>
                <TfiClose className='close-lightbox' onClick={handleCloseClick} />
                <div className='left-column'>
                    <MdArrowBackIosNew onClick={handleLeftArrowClick} />
                </div>
                {data.length === 3 && data[0] && data[1] && (
                    [data[0], data[1]].map((dataArray, dataIndex) => (
                        dataArray.map((item, index) => (
                            <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                                {item._type === 'image' && item.asset !== undefined ? (
                                    <img src={urlFor(item.asset._ref).url()} alt={`Slide ${index}`} />
                                ) : (
                                   videoConversion(item)
                                )}
                            </div>
                        ))
                    ))
                )}
                {data.length === 2 && (
                    data[0].map((item, index) => {
                        return (
                            <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                                {item._type === 'image' ? (
                                    <img src={urlFor(item.asset._ref).url()} alt={`Slide ${index}`} />
                                ) : (
                                    videoConversion(item)
                                )}
                            </div>
                        )
                    })
                )}
                <div className='right-column'>
                    <MdArrowForwardIos onClick={handleRightArrowClick} />
                </div>
            </div>
        </>
    )
}

export default LightBox;