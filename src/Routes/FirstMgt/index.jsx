import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

const FirstMgt = () => {
    const [leftColumn, setLeftColumn] = useState();
    const [rightColumn, setRightColumn] = useState();

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
      return builder.image(source);
    }
  
    const fetchData = async () => {
      try {
        const query = `*[_type == '1stMgtPage'][0]`;
        const result = await sanityClient.fetch(query);
        setLeftColumn(result.leftColumn);
        setRightColumn(result.rightColumn);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchData();
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
        </>
    )
}

export default FirstMgt;