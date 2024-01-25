import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';
import instafeed from "instafeed.js";

import './index.css';

const FirstMgt = () => {
    const [leftColumn, setLeftColumn] = useState();
    const [rightColumn, setRightColumn] = useState();

    let instagramFeed = new instafeed({
        accessToken: process.env.REACT_APP_FACEBOOK_TOKEN,
        limit: 12,
    });

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
      } catch (error) {
        console.error(error);
      }
    };

    const fetchIgData = async () => {
        try {
          const query = `*[_type == 'instagramContent'][0]`;
          const result = await sanityClient.fetch(query);
          console.log(result)
        } catch (error) {
          console.error(error);
        }
    };
  
    useEffect(() => {
      fetchPageData();
      fetchIgData();
      instagramFeed.run();
    }, []);

    return (
        <>
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
                <div className='instagram-container'>
                    <div id='instafeed'></div>
                </div>
            </main>
        </>
    )
}

export default FirstMgt;