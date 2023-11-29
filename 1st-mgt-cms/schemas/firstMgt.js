export default {
    name: '1stMgtPage',
    title: '1st Mgt Page',
    type: 'document',
    description: 'Content for the 1st Mgt page',
    fields: [
        {
            name: 'sliceTitle',
            type: 'string',
            title: 'Slice Title',
            description: 'This is the title for this component. *Note: This is important if you have a lot of components.'
        },
        {
            name: 'headingText',
            title: 'Heading Text',
            type: 'string',
            description: 'The text for the heading title.'
        },
        {
            name: 'leftColumn',
            type: 'object',
            title: 'Left Column Content',
            description: 'Content in this section will populate the left column on the 1st mgt page.',
            fields: [
                {
                    name: 'bodyText_EN',
                    type: 'array',
                    title: 'Body Text (EN)',
                    description: 'This is the (EN) text for the left column',
                    of: [
                        {
                            type: 'block'
                        }
                    ]
                },
                {
                    name: 'bodyText_KR',
                    type: 'array',
                    title: 'Body Text (KR)',
                    description: 'This is the (KR) text for the left column',
                    of: [
                        {
                            type: 'block',
                        }
                    ]
                },
                {
                    name: 'trailingTags',
                    type: 'array',
                    title: 'Trailing Tags',
                    description: 'Text for the trailing tags at the bototm of the page.',
                    of: [
                        {
                            type: 'block'
                        }
                    ]
                }
            ]
        },
        {
            name: 'rightColumn',
            type: 'object',
            title: 'Right Column Content',
            fields: [
                {
                    title: 'Image Upload',
                    name: 'image',
                    type: 'image',
                },
            ]
        }
    ]
}