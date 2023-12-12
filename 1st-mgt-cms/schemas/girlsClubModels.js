export default {
    name: 'girlsClubModels',
    title: 'Girls Club Models',
    type: 'document',
    description: 'Database for all models in GirlsClub',
    fields: [
        {
            name: 'modelName',
            type: 'string',
            title: 'Model Name',
            description: 'Name of the model'
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
                                    {title: 'INCHES', value: 'inches'},
                                    {title: 'MM', value: 'millimeters'},
                                ],
                                layout: 'dropdown',
                            }
                        },
                    ]
                },
                {
                    name: 'bust',
                    title: 'Bust',
                    type: 'object',
                    description: 'Model bust and unit measurement selection (cm, ft, inches, mm, etc.).',
                    fields: [
                        {
                            name: 'initialMeasurement',
                            type: 'number',
                            title: 'Raw Bust',
                            description: 'This is the raw and unconverted bust measurement.',
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
                                    {title: 'INCHES', value: 'inches'},
                                    {title: 'MM', value: 'millimeters'},
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
                                    {title: 'INCHES', value: 'inches'},
                                    {title: 'MM', value: 'millimeters'},
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
                                    {title: 'INCHES', value: 'inches'},
                                    {title: 'MM', value: 'millimeters'},
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
                                    {title: 'INCHES', value: 'inches'},
                                    {title: 'MM', value: 'millimeters'},
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
            description: 'These are the individual Stats which will be shown on individual model pages.',
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
                }
            ]
        },
    ]
}