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
                }
            ]
        }
    ]
}