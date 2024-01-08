import { useEffect, useState } from "react";
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import { TfiClose } from 'react-icons/tfi';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import './index.css';

const LightBox = ({data}) => {
    console.log(data);
    const [currentIndex, setCurrentIndex] = useState(0);

    const builder = ImageUrlBuilder(sanityClient);
    const urlFor = (source) => {
      return builder.image(source);
    }

    const handleLeftArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data[0].length) % data[0].length);
    };

    const handleRightArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data[0].length);
    }

    const handleCloseClick = () => {
        document.getElementById('lightbox').style.display = 'none';
    }

    useEffect(() => {
        setCurrentIndex(data[1]);
    }, [data[1]]);

    return (
        <>
            <div id='lightbox' className='lightbox'>
                <TfiClose className='close-lightbox' onClick={handleCloseClick}/>
                <div className='left-column'>
                    <MdArrowBackIosNew onClick={handleLeftArrowClick}/>
                </div>
                {data[0].map((image, index) => {
                    return (
                        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                            <img src={urlFor(image.asset._ref).url()} />
                        </div>
                    )
                })}
                <div className='right-column'>
                    <MdArrowForwardIos onClick={handleRightArrowClick}/>
                </div>
            </div>
        </>
    )
}

export default LightBox;