export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    description: 'These special settings pretain to attributes such as font sizes, colours, margins etc.',
    fields: [
        {
            name: 'sliceTitle',
            type: 'string',
            title: 'Slice Title',
            description: 'This is the title for this component. *Note: This is important if you have a lot of components.'
        },
        {
            name: 'popUpSettings',
            title: 'Pop Up Container Settings',
            type: 'object',
            description: 'Configure settings for the pop up container',
            fields: [
                {
                    name: 'file',
                    title: 'Font File Upload',
                    type: 'file',
                    description: 'Upload a font file.'
                }
            ]
        },
        {
            name: 'firstMgtSettings',
            title: '1st Mgt Page Settings',
            type: 'object',
            description: 'Configure settings for the 1st Mgt Page',
            fields: [
                {
                    name: 'file',
                    title: 'Font File Upload',
                    type: 'file',
                    description: 'Upload a font file.'
                }
            ]
        },
        {
            name: 'newsSettings',
            title: 'News Page Settings',
            type: 'object',
            description: 'Configure settings for the news page',
            fields: [
                {
                    name: 'file',
                    title: 'Font File Upload',
                    type: 'file',
                    description: 'Upload a font file.'
                }
            ]
        },
        {
            name: 'contactPageSettings',
            title: 'Contact Page Settings',
            type: 'object',
            description: 'Configure settings for the contact page',
            fields: [
                {
                    name: 'file',
                    title: 'Font File Upload',
                    type: 'file',
                    description: 'Upload a font file.'
                }
            ]
        },
        {
            name: 'girlsClubPagesSettings',
            title: 'Girls Club Sub Pages Settings',
            type: 'object',
            description: 'Configure settings for the Girls Club sub pages',
            fields: [
                {
                    name: 'file',
                    title: 'Font File Upload',
                    type: 'file',
                    description: 'Upload a font file.'
                },
                {
                    name: 'rowCount',
                    title: 'Model Thumbnail Count Per Row',
                    description: 'Adjust the amount of Model thumbnails per row (Maximum 3, Minnimum 1)',
                    type: 'number'
                }
            ]
        },
        {
            name: 'boysSquaPagesSettings',
            title: 'Boys Squad Sub Pages Settings',
            type: 'object',
            description: 'Configure settings for the Boys Squad sub pages',
            fields: [
                {
                    name: 'file',
                    title: 'Font File Upload',
                    type: 'file',
                    description: 'Upload a font file.'
                },
                {
                    name: 'rowCount',
                    title: 'Model Thumbnail Count Per Row',
                    description: 'Asjust the amount of Model thumbnails per row (Maximum 3, Minnimum 1)',
                    type: 'number'
                }
            ]
        },
        {
            name: 'individualModelPageSettings_boys',
            title: 'Individual Model Page Settings (Boys Squad)',
            type: 'object',
            description: 'Configure settings for the individual Model page',
            fields: [
                {
                    name: 'collageGap',
                    title: 'Collage Gap Amount',
                    description: 'Adjust the spacing between images in the collage area. *NOTE This unit will be converted into pixels',
                    type: 'number'
                },
                {
                    name: 'file',
                    title: 'Font File Upload',
                    type: 'file',
                    description: 'Upload a font file.'
                }
            ]
        },
        {
            name: 'individualModelPageSettings_girls',
            title: 'Individual Model Page Settings (Girls Club)',
            type: 'object',
            description: 'Configure settings for the individual Model page',
            fields: [
                {
                    name: 'collageGap',
                    title: 'Collage Gap Amount',
                    description: 'Adjust the spacing between images in the collage area. *NOTE This unit will be converted into pixels',
                    type: 'number'
                },
                {
                    name: 'file',
                    title: 'Font File Upload',
                    type: 'file',
                    description: 'Upload a font file.'
                }
            ]
        }
    ]
}