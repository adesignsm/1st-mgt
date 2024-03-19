import algoliasearch from 'algoliasearch';
import sanityClient from '../../client';
import { useEffect } from 'react';

const client = sanityClient;
const algolia = algoliasearch('IBJWLTVXR7', '52846f405a90ad568ad9266f036ba68b');
const index = algolia.initIndex('dev_firstMgt');

export const Search = () => {
    const indexDataInAlgolia = async () => {
        try {

            const query = '*[_type == "girlsClubModels"]';
            const documents = await client.fetch(query);
      
            const objectsToIndex = documents.map((document) => ({
                objectID: document._id,
                title: document.title,
                content: document.content,
            }));

            await index.saveObjects(objectsToIndex);
            console.log(documents);
        } catch (error) {
            console.error('Error indexing data in Algolia:', error);
        }
    };

    useEffect(() => {
        indexDataInAlgolia();
    }, []);

    return (
        <>
        
        </>
    )
}