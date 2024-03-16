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
            name: 'toggle',
            type: 'boolean',
            title: 'Toggle Pop-Up',
            description: 'Toggle this switch to enable/disable the pop-up system.',
            options: {
                layout: 'switch',
                label: 'top',
            }
        },
        {
            name: 'popUpEntry',
            type: 'object',
            title: 'Pop-Up Entry Container Content',
            description: 'Content in this section is what users will see when they first enter the website in the pop up container.',
            fields: [
                {
                    name: 'headingText',
                    title: 'Heading Text',
                    type: 'string',
                    description: 'The text for the heading title.'
                },
                {
                    name: 'bannerSize',
                    title: 'Banner Size',
                    description: 'Please be advised these values will be applied as percentages for responsive layout reasons.',
                    type: 'object',
                    fields: [
                        {
                            name: 'height',
                            title: 'Height',
                            type: 'number'
                        },
                        {
                            name: 'width',
                            title: 'Width',
                            type: 'number'
                        }
                    ]
                },
                {
                    name: 'enterButtonText',
                    type: 'object',
                    title: '"Click for more button" Settings',
                    description: 'Adjust the settings for the pop up "Click for more" button',
                    fields: [
                        {
                            name: 'text',
                            title: 'Button text',
                            type: 'string',
                            description: 'The text that will appear in the button.'
                        },
                        {
                            name: 'modelRedirect',
                            title: 'Models.com Redirect',
                            type: 'object',
                            description: 'Adjust settings for the Models.com redirect.',
                            fields: [
                                {
                                    name: 'toggle',
                                    title: 'Toggle on/off',
                                    type: 'boolean'
                                },
                                {
                                    name: 'url',
                                    title: 'Models.com Url',
                                    type: 'url',
                                },
                            ]
                        },
                        {
                            name: 'customPage',
                            title: 'Custom Page Redirect',
                            type: 'object',
                            description: 'Adjust settings for the Models.com redirect.',
                            fields: [
                                {
                                    name: 'toggle',
                                    title: 'Toggle on/off',
                                    type: 'boolean'
                                },
                            ]
                        }
                    ]
                },
                {
                    name: 'backgrounImage',
                    title: 'Background Image',
                    type: 'array',
                    description: 'Upload an image or video here to apply a background image to the pop up. *Remove the image to leave th pop up blank.',
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
                },
                {
                    name: 'popupTiming',
                    type: 'number',
                    title: 'Pop Up Entry timing',
                    description: 'The timing for how long it takes the pop up to appear after the browser has loaded. *Note: this unit is measured in seconds. If left empty, the default timing value will be 3 seconds.',
                    validation: Rule => Rule.custom(value => {
                        if (value && (value < 0 || value > 9)) {
                          return 'Only single digits are allowed.';
                        }
                        return true;
                    })
                }
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