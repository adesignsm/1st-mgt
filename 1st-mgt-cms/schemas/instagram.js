export default {
    name: 'instagramContent',
    title: 'Instagram Content',
    type: 'document',
    description: 'Content for the instagram sections in the 1st mgt page.',
    fields: [
        {
            name: 'sliceTitle',
            type: 'string',
            title: 'Slice Title',
            description: 'This is the title for this component. *Note: This is important if you have a lot of components.'
        },
        {
            name: 'firstMgtInstagram',
            type: 'object',
            title: '1st Mgt Instagram Content',
            description: 'Content in this section will be applied to the 1st Mgt Instgaram section.',
            fields: [
                {
                    name: 'englishText',
                    title: 'English Text',
                    type: 'string',
                    description: 'The text that will appear to the left of the instagram images'
                },
                {
                    name: 'koreanText',
                    type: 'string',
                    title: 'Korean Text',
                    description: 'The text that will appear to the left of the instagram images',
                },
                {
                    name: 'igOptions',
                    type: 'object',
                    title: 'Instagram Options',
                    description: 'Set up options for your instagram feed content.',
                    fields: [
                        // {
                        //     name: 'accessToken',
                        //     title: 'Access Token',
                        //     type: 'string',
                        //     description: 'Provide an access token to connect your instagram account. (Contact your developer if you dont have a token)',
                        // },
                        {
                            name: 'limit',
                            title: 'Instagram Post Limit',
                            type: 'number',
                            description: 'Set a limit for the amount of Instagram posts that show.'
                        },
                    ]
                }
            ]
        },
        {
            name: 'boysSquadandNaughtyGirlsCLubInstagram',
            type: 'object',
            title: 'Boys Squad & Naughty Girls CLub Instagram Content',
            description: 'Content in this section will be applied to the Boys Squad Instgaram section & the Naughty Girls Club section.',
            fields: [
                {
                    name: 'englishText',
                    title: 'English Text',
                    type: 'string',
                    description: 'The text that will appear below both Instagram feeds.'
                },
                {
                    name: 'koreanText',
                    type: 'string',
                    title: 'Korean Text',
                    description: 'The text that will appear below both Instagram feeds.',
                },
                {
                    name: 'igOptions',
                    type: 'object',
                    title: 'Instagram Options',
                    description: 'Set up options for your instagram feed content.',
                    fields: [
                        // {
                        //     name: 'accessToken',
                        //     title: 'Access Token',
                        //     type: 'string',
                        //     description: 'Provide an access token to connect your instagram account. (Contact your developer if you dont have a token)',
                        // },
                        {
                            name: 'limit',
                            title: 'Instagram Post Limit',
                            type: 'number',
                            description: 'Set a limit for the amount of Instagram posts that show.'
                        },
                    ]
                }
            ]
        },
    ]
}