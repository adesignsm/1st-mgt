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
            name: 'leftColumn',
            type: 'object',
            title: 'Left Column Content',
            description: 'Content in this section will populate the left column on the 1st mgt page.',
            fields: [
                {
                    name: 'headingText',
                    title: 'Heading Text',
                    type: 'string',
                    description: 'The text for the heading title.'
                },
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
        },
        {
            name: 'projectsColumn',
            type: 'object',
            title: 'The Projects Section',
            description: 'Content for the Projects section that is below the Instagram section.',
            fields: [
                {
                    title: 'Projects Section English Title',
                    name: 'projectsEnTitle',
                    type: 'string',
                    description: 'The English title for the Projects Section'
                },
                {
                    title: 'Projects Section Korean Title',
                    name: 'projectsKrTitle',
                    type: 'string',
                    description: 'The Korean title for the Projects Section'
                },
                {
                    name: 'projectsMedia',
                    title: 'Project Media',
                    type: 'array',
                    description: 'You can add multiple project media peices here.',
                    of: [
                        {
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            type: 'file',
                            title: 'Video'
                        }
                    ]
                }
            ]
        },
        {
            name: 'clientsColumn',
            type: 'object',
            title: 'The Clients Section',
            description: 'Content for the Clients section that is below the Instagram section.',
            fields: [
                {
                    title: 'Clients Section English Title',
                    name: 'clientsEnTitle',
                    type: 'string',
                    description: 'The English title for the Clients Section'
                },
                {
                    title: 'Clients Section Korean Title',
                    name: 'clientsKrTitle',
                    type: 'string',
                    description: 'The Korean title for the Clients Section'
                },
                {
                    name: 'clientsMedia',
                    title: 'Client Media',
                    type: 'array',
                    description: 'You can add multiple client media pieces here.',
                    of: [
                        {
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            type: 'file',
                            title: 'Video'
                        }
                    ]
                }
            ]
        }
    ]
}