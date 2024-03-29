import { useEffect, useState, useRef } from 'react';
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
    const [postThumb, setPostThumb] = useState([]);
    const [imageIndex, setImageIndex] = useState(null);
    const [showViewAll, setShowViewAll] = useState(false);
    const [modelData, setModelData] = useState([]);
    const [showThumb, setShowThumb] = useState(false);
    const [thumbPos, setThumbPos] = useState({
        x: 0,
        y: 0,
    });

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

    const fetchModelData = async () => {
        try {
            const query = `*[_type == 'girlsClubModels' || _type == 'boysSquadModels']`;
            const result = await sanityClient.fetch(query);
            setModelData(result);
        } catch (error) {   
            console.error(error);
        }
    }

    const handleViewAllEnter = () => {
        setShowViewAll(true);
    }

    const handleViewAllLeave = () => {
        setShowViewAll(false);
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

    const handleMouseMove = (e) => {
        setThumbPos({ x: e.clientX, y: e.clientY });
    };

    const handlePostHover = (e) => {
        let handle = e.target.innerText;
        postData.forEach((post) => {
            if (handle === post.postTitle.toUpperCase()) {
                setPostThumb(urlFor(post.postThumb.asset._ref).url());
                setShowThumb(true);
            }
        });
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

    const modelPageChecker = (modelLink, index) => {
        const model = modelData.find(model => model.modelName === modelLink);

        if (model) {
            if (model._type === 'boysSquadModels') {
                return (
                    <li key={index}>
                        <a href={`/boys-squad/${modelLink}`}>
                            {model.modelName}
                        </a>
                    </li>
                );
            } else if (model._type === 'girlsClubModels') {
                return (
                    <li key={index}>
                        <a href={`/girls-club/${modelLink}`}>
                            {model.modelName}
                        </a>
                    </li>
                );
            }
        }
        return (
            <li key={index}>{modelLink}</li>
        );
    };
    
    useEffect(() => {
        fetchData();
        fetchModelData();

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

    const useHorizontalScroll = () => {
        const elRef = useRef();

        useEffect(() => {
          const el = elRef.current;
          if (el) {
            const onWheel = e => {
              if (e.deltaY == 0) return;

              e.preventDefault();
              el.scrollTo({
                left: el.scrollLeft + e.deltaY,
                behavior: "smooth"
              });
            };

            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
          }
        }, []);
        return elRef;
    }
    
    const scrollRef = useHorizontalScroll();

    const addAnimations = () => {
        const leftColumn = document.querySelector('.news-page .left-column');
        const rightColumn = document.querySelector('.news-page .right-column');

        setTimeout(() => {
            leftColumn.classList.add('animate-left');
        }, 425);

        setTimeout(() => {
            rightColumn.classList.add('animate-right');
        }, 525);
    }

    useEffect(() => {
        postData.forEach((post) => {
            if (post.hasOwnProperty('postMedia') && post.hasOwnProperty('postDetails')) {
                setPostTitle(post.postTitle)
                setPostDetails(post.postDetails)
                setPostMedia(post.postMedia)
            }
        })
    }, [postData]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    useEffect(() => {
        addAnimations();
    }, []);

    return (
        <>
            <main className='news-page'>
                <div className='left-column'>
                    <div className='post-details'>
                        <h2>{postTitle ? postTitle : null}</h2>
                        <ul>
                            {Object.keys(postDetails).map((detail) => {
                                return postDetails[detail].map((model, index) => {
                                    return modelPageChecker(model, index)
                                });
                            })}
                        </ul>
                    </div>
                </div>
                <div className='right-column'>
                    <div className='view-all-container'>
                        {showThumb && (
                            <img 
                                id='hover-thumbnail' 
                                src={postThumb}
                                style={{
                                    top: thumbPos.y,
                                    left: thumbPos.x,
                                }}
                            />
                        )}
                        <button 
                            id='view-all-button' 
                            onMouseEnter={handleViewAllEnter}
                            onMouseLeave={handleViewAllLeave}
                        >View All
                        <ul className={`view-all-list ${showViewAll ? 'active' : ''}`}>
                            {postData && (
                                postData.map((post, index) => {
                                    return (
                                        <li 
                                            key={index} 
                                            onClick={(e) => handlePostClick(e)}
                                            onMouseEnter={(e) => handlePostHover(e)}
                                            onMouseLeave={() => setShowThumb(false)}
                                        >
                                            {post.postTitle}
                                        </li>
                                    )
                                })
                            )}
                        </ul>
                        </button>
                    </div>
                    <div id='post-gallery' className='post-gallery' ref={scrollRef} style={{ overflow: "auto" }}>
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