export default {
    name: 'boysSquadModels',
    title: 'Boys Squad Models',
    type: 'document',
    description: 'Database for all models in BoysSquad',
    fields: [
        {
            name: 'modelName',
            type: 'string',
            title: 'Model Name',
            description: 'Name of the model'
        },
        {
            name: 'status',
            type: 'string',
            title: 'Model Status',
            description: 'Select the status option from the dropdown below',
            options: {
                list: [
                    {title: 'IN TOWN', value: 'in-town'},
                    {title: 'OUT OF TOWN', value: 'out-of-town'},
                    {title: 'UPCOMING', value: 'up-coming'},
                ],
                layout: 'dropdown',
            }
        },
        {
            name: 'modelStats',
            type: 'object',
            title: 'Portfolio Stats',
            description: 'These are the individual Stats which will be shown on individual model pages.',
            fields: [
                {
                    name: 'height',
                    title: 'Height',
                    type: 'object',
                    description: 'Model height and unit measurement selection (cm, ft, inches, mm, etc.).',
                    fields: [
                        {
                            name: 'initialMeasurement',
                            type: 'number',
                            title: 'Raw Height',
                            description: 'This is the raw and unconverted height measurement.',
                        },
                        {
                            name: 'unit',
                            type: 'string',
                            title: 'Unit Measurement',
                            description: 'This is the unit meaasurement that the raw measuremnet will be converted to and displayed.',
                            options: {
                                list: [
                                    {title: 'CM', value: 'cm'},
                                    {title: 'FT', value: 'ft'},
                                    {title: 'INCHES', value: '"'},
                                    {title: 'MM', value: 'mm'},
                                ],
                                layout: 'dropdown',
                            }
                        },
                    ]
                },
                {
                    name: 'chest',
                    title: 'Chest',
                    type: 'object',
                    description: 'Model chest and unit measurement selection (cm, ft, inches, mm, etc.).',
                    fields: [
                        {
                            name: 'initialMeasurement',
                            type: 'number',
                            title: 'Raw Chest',
                            description: 'This is the raw and unconverted chest measurement.',
                        },
                        {
                            name: 'unit',
                            type: 'string',
                            title: 'Unit Measurement',
                            description: 'This is the unit meaasurement that the raw measuremnet will be converted to and displayed.',
                            options: {
                                list: [
                                    {title: 'CM', value: 'cm'},
                                    {title: 'FT', value: 'ft'},
                                    {title: 'INCHES', value: '"'},
                                    {title: 'MM', value: 'mm'},
                                ],
                                layout: 'dropdown',
                            }
                        },
                    ]
                },
                {
                    name: 'waist',
                    title: 'Waist',
                    type: 'object',
                    description: 'Model waist and unit measurement selection (cm, ft, inches, mm, etc.).',
                    fields: [
                        {
                            name: 'initialMeasurement',
                            type: 'number',
                            title: 'Raw Waist',
                            description: 'This is the raw and unconverted waist measurement.',
                        },
                        {
                            name: 'unit',
                            type: 'string',
                            title: 'Unit Measurement',
                            description: 'This is the unit meaasurement that the raw measuremnet will be converted to and displayed.',
                            options: {
                                list: [
                                    {title: 'CM', value: 'cm'},
                                    {title: 'FT', value: 'ft'},
                                    {title: 'INCHES', value: '"'},
                                    {title: 'MM', value: 'mm'},
                                ],
                                layout: 'dropdown',
                            }
                        },
                    ]
                },
                {
                    name: 'hips',
                    title: 'Hips',
                    type: 'object',
                    description: 'Model hips and unit measurement selection (cm, ft, inches, mm, etc.).',
                    fields: [
                        {
                            name: 'initialMeasurement',
                            type: 'number',
                            title: 'Raw Hips',
                            description: 'This is the raw and unconverted height measurement.',
                        },
                        {
                            name: 'unit',
                            type: 'string',
                            title: 'Unit Measurement',
                            description: 'This is the unit meaasurement that the raw measuremnet will be converted to and displayed.',
                            options: {
                                list: [
                                    {title: 'CM', value: 'cm'},
                                    {title: 'FT', value: 'ft'},
                                    {title: 'INCHES', value: '"'},
                                    {title: 'MM', value: 'mm'},
                                ],
                                layout: 'dropdown',
                            }
                        },
                    ]
                },
                {
                    name: 'foot',
                    title: 'Foot Size',
                    type: 'object',
                    description: 'Model foot size and unit measurement selection (cm, ft, inches, mm, etc.).',
                    fields: [
                        {
                            name: 'initialMeasurement',
                            type: 'number',
                            title: 'Raw Foot Size',
                            description: 'This is the raw and unconverted foot size measurement.',
                        },
                        {
                            name: 'unit',
                            type: 'string',
                            title: 'Unit Measurement',
                            description: 'This is the unit meaasurement that the raw measuremnet will be converted to and displayed.',
                            options: {
                                list: [
                                    {title: 'CM', value: 'cm'},
                                    {title: 'FT', value: 'ft'},
                                    {title: 'INCHES', value: '"'},
                                    {title: 'MM', value: 'mm'},
                                ],
                                layout: 'dropdown',
                            }
                        },
                    ]
                },
                {
                    name: 'hair',
                    title: 'Hair Colour',
                    type: 'string',
                    description: 'Model hair colour',
                    options: {
                        list: [
                            {title: 'BLACK', value: 'black'},
                            {title: 'BROWN', value: 'brown'},
                            {title: 'BLONDE', value: 'blonde'},
                            {title: 'GINGER', value: 'ginger'},
                            {title: 'LIGHT BROWN', value: 'light-brown'},
                            {title: 'DARK BROWN', value: 'dark-brown'},
                        ],
                        layout: 'dropdown',
                    }
                },
                {
                    name: 'eye',
                    title: 'Eye Colour',
                    type: 'string',
                    description: 'Model eye colour',
                    options: {
                        list: [
                            {title: 'BLACK', value: 'black'},
                            {title: 'BROWN', value: 'brown'},
                            {title: 'BLUE', value: 'blue'},
                            {title: 'GREEN', value: 'green'},
                            {title: 'HAZEL', value: 'hazel'},
                            {title: 'GREY BLUE', value: 'grey-blue'},
                            {title: 'BLUE GREEN', value: 'blue-green'},
                            {title: 'GREEN GREY', value: 'green-grey'},
                            {title: 'DARK BROWN', value: 'dark-brown'},
                        ],
                        layout: 'dropdown',
                    }
                },
            ]
        },
        {
            name: 'modelPictures',
            type: 'object',
            title: 'Portfolio Media',
            description: 'These section covers all the media related to this model.',
            fields: [
                {
                    name: 'intownImage',
                    type: 'image',
                    title: 'In Town Thumbnail',
                    description: 'The thumbnail for "In Town".'
                },
                {
                    name: 'outOfTownImage',
                    type: 'image',
                    title: 'Out Of Town Thumbnail',
                    description: 'The thumbnail for "Out Of Town".'
                },
                {
                    name: 'upcomingImage',
                    type: 'image',
                    title: 'Upcoming Thumbnail',
                    description: 'The thumbnail for "Upcoming".'
                },
                {
                    name: 'content',
                    title: 'Individual Model Media',
                    type: 'array',
                    description: 'You can add multiple pieces of media per model in this field. (Please note: the first image in this list will be treated as the cover picture on the individual model page.)',
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
    ]
}