import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

const GirlsClubInTown = () => {
    const [models, setModels] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
      return builder.image(source);
    }
  
    const fetchData = async () => {
      try {
        const query = `*[_type == 'girlsClubModels' && defined(modelStats) && defined(modelPictures)] {
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
      fetchData();
    }, []);

    console.log(models);

    return (
        <>
            
        </>
    )
}

export default GirlsClubInTown;