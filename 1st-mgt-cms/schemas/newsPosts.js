export default {
    name: 'newsPosts',
    title: 'News Posts',
    type: 'document',
    description: 'Data Bank for all Newws Posts',
    fields: [
        {
            name: 'postTitle',
            type: 'string',
            title: 'Post & Slice Title',
            description: 'This is the title for this News Post. *Note: This will be displayed in the "View All" list as well as act as the title for the post itself.".'
        },
        {
            name: 'postDetails',
            title: 'Post Details (models, brands, etc)',
            type: 'object',
            description: 'This is where you can add the names of the models in this post, and the brands that were involved.',
            fields: [
                {
                    name: 'modelNames',
                    title: 'Model Names',
                    type: 'array',
                    description: 'Add names of the models invovled in this post',
                    of: [{ type: 'string' }],
                    options: {
                        layout: 'default'
                    }
                },
            ]
        },
        {
            name: 'postThumb',
            title: 'Post Thumbnail',
            description: 'The thumbnail image that appears when hovering over the list item.',
            type: 'image',
        },
        {
            name: 'postMedia',
            title: 'Post Media',
            type: 'array',
            description: 'Add any media content related to this post.',
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