export default {
    name: 'popUp',
    title: 'Pop-Up',
    type: 'document',
    description: 'Content for the pop up banner when users enter the website.',
    fields: [
        {
            name: 'sliceTitle',
            type: 'string',
            title: 'Slice Title',
            description: 'This is the title for this component. *Note: This is important if you have a lot of components.'
        },
        {
            name: 'popUpEntry',
            type: 'object',
            title: 'Pop-Up Entry Page Content',
            description: 'Content in this section is what users will see when they first enter the website in the pop up container.',
            fields: [
                {
                    name: 'headingText',
                    title: 'Heading Text',
                    type: 'string',
                    description: 'The text for the heading title.'
                },
                {
                    name: 'enterButtonText',
                    type: 'string',
                    title: 'Enter Button Text',
                    description: 'This is the text for the Pop Up enter button',
                },
            ]
        },
        {
            name: 'popUpPage',
            type: 'object',
            title: 'Pop-Up Page Content',
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