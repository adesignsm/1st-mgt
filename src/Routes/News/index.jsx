import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';
import 'jquery-ui-bundle';
import $ from 'jquery';

import LightBox from '../../Components/LightBox';
import './index.css';

const News = () => {
    const [postData, setPostData] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postDetails, setPostDetails] = useState([]);
    const [postMedia, setPostMedia] = useState([]);
    const [imageIndex, setImageIndex] = useState(null);
    const [showViewAll, setShowViewAll] = useState(false);

    const builder = ImageUrlBuilder(sanityClient);
    const urlFor = (source) => {
      return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'newsPosts']`;
            const result = await sanityClient.fetch(query);
            setPostData(result);
        } catch (error) {   
            console.error(error);
        }
    };

    const handleViewAllClick = () => {
        setShowViewAll(!showViewAll);
    }

    const handlePostClick = (e) => {
        let handle = e.target.innerText;
        postData.forEach((post) => {
            if (handle === post.postTitle.toUpperCase()) {
                setPostTitle(post.postTitle);
                setPostDetails(post.postDetails ? post.postDetails : []);
                setPostMedia(post.postMedia ? post.postMedia : []);
            }
        });

        setShowViewAll(false);
    }

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
    
    useEffect(() => {
        fetchData();

        $(".right-column").draggable({disabled: true});
        $("#post-gallery").draggable({
            axis: "x",
            opacity: "0.95",
            cursor: "grabbing",
            scrollSpeed: 1,
            containment: [0, 0, $(window).width() - $("#post-gallery").outerWidth(), 0],
            drag: (e) => {
              // Your drag event handling code here
            },
            start: (e, ui) => {
              ui.helper.css({
                transition: "left 0.3s ease-out",
              });
            },
            stop: (e, ui) => {
              ui.helper.css({
                transition: "left 0.3s ease-out",
              });
            },
          });
    }, []);

    useEffect(() => {
        postData.forEach((post) => {
            if (post.hasOwnProperty('postMedia') && post.hasOwnProperty('postDetails')) {
                setPostTitle(post.postTitle)
                setPostDetails(post.postDetails)
                setPostMedia(post.postMedia)
            }
        })
    }, [postData]);

    return (
        <>
            <main className='news-page'>
                <div className='left-column'>
                    <div className='post-details'>
                        <h2>{postTitle ? postTitle : null}</h2>
                        <ul>
                            {Object.keys(postDetails).map((detail) => {
                                return postDetails[detail].map((model, index) => {
                                    return <li key={index}>{model}</li>;
                                });
                            })}
                        </ul>
                    </div>
                </div>
                <div className='right-column'>
                    <div className='view-all-container'>
                        <button id='view-all-button' onClick={handleViewAllClick}>View All</button>
                        <ul className={`view-all-list ${showViewAll ? 'active' : ''}`}>
                            {postData && (
                                postData.map((post, index) => {
                                    return (
                                        <li key={index} onClick={(e) => handlePostClick(e)}>{post.postTitle}</li>
                                    )
                                })
                            )}
                        </ul>
                    </div>
                    <div id='post-gallery' className='post-gallery'>
                        {postData && (
                            postMedia.map((media, index) => {
                                if (media._type === 'image') {
                                    return (
                                        <img 
                                            key={index} 
                                            src={urlFor(media.asset._ref).url()} 
                                            onClick={(e) => handleImageClick(e)}
                                            data-value={index}
                                        />
                                    )
                                } else if (media._type === 'file') {
                                    return (
                                        videoConversion(media.asset._ref)
                                    )
                                }
                            })
                        )}
                    </div>
                </div>
            </main>
            {postMedia.length > 0 && <LightBox data={[postMedia, imageIndex]} />}
        </>
    )
}

export default News;