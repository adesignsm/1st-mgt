import { useEffect, useState } from "react";
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import { TfiClose } from 'react-icons/tfi';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import './index.css';

const LightBox = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
        
        if (document.querySelector('.lightbox-video')) {
            document.querySelector('.lightbox-video').currentTime = 0;
            document.querySelector('.lightbox-video').pause();
        } 
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

    useEffect(() => {
        setCurrentIndex(data[2]);
    }, [data[2]]);

    console.log(data);

    return (
        <>
            <div id='lightbox' className='lightbox'>
                <TfiClose className='close-lightbox' onClick={handleCloseClick} />
                <div className='left-column'>
                    <MdArrowBackIosNew onClick={handleLeftArrowClick} />
                </div>
                {[data[0], data[1]].map((dataArray, dataIndex) => (
                    dataArray.map((item, index) => (
                        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                            {item._type === 'image' ? (
                                <img src={urlFor(item.asset._ref).url()} alt={`Slide ${index}`} />
                            ) : (
                               videoConversion(item)
                            )}
                        </div>
                    ))
                ))}
                <div className='right-column'>
                    <MdArrowForwardIos onClick={handleRightArrowClick} />
                </div>
            </div>
        </>
    )
}

export default LightBox;