export default {
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    description: 'Contact Page Configuration',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string'
        },
        {
            name: 'generalContact',
            title: 'General Inquiry',
            description: 'Edit Title text and emails for General Inquiry',
            type: 'object',
            fields: [
                {
                  name: 'title',
                  description: 'The title for the "General Inquiry" block',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'titleEn',
                          type: 'string',
                          title: 'English Title'
                        },
                        {
                          name: 'titleKr',
                          type: 'string',
                          title: 'Korean Title'
                        }
                      ]
                    }
                  ]
                },
                {
                    name: 'emails',
                    description: 'Create, Update, Delete, emails',
                    type: 'array',
                    of: [
                      {
                        type: 'object',
                        fields: [
                          {
                            name: 'emailAddress',
                            title: 'Email Address',
                            type: 'string'
                          },
                          {
                            name: 'emailType',
                            title: 'Email Type',
                            type: 'string'
                          }
                        ]
                      }
                    ],
                    options: {
                      layout: 'default'
                    }
                }                  
            ]
        },
        {
            name: 'placementContact',
            title: 'Placement Inquiry',
            description: 'Edit Title text and emails for Placement Inquiry',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    description: 'The title for the "Placement Inquiry" block',
                    type: 'array',
                    of: [
                      {
                        type: 'object',
                        fields: [
                          {
                            name: 'titleEn',
                            type: 'string',
                            title: 'English Title'
                          },
                          {
                            name: 'titleKr',
                            type: 'string',
                            title: 'Korean Title'
                          }
                        ]
                      }
                    ]
                },
                {
                    name: 'emails',
                    description: 'Create, Update, Delete, emails',
                    type: 'array',
                    of: [
                      {
                        type: 'object',
                        fields: [
                          {
                            name: 'emailAddress',
                            title: 'Email Address',
                            type: 'string'
                          },
                          {
                            name: 'emailType',
                            title: 'Email Type',
                            type: 'string'
                          }
                        ]
                      }
                    ],
                    options: {
                      layout: 'default'
                    }
                }
            ]
        },
        {
            name: 'creativeAndPrContact',
            title: 'Creative/PR Inquiry',
            description: 'Edit Title text and emails for Creative/PR Inquiry',
            type: 'object',
            fields: [
                {
                  name: 'title',
                  description: 'The title for the "Creative/PR Inquiry" block',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'titleEn',
                          type: 'string',
                          title: 'English Title'
                        },
                        {
                          name: 'titleKr',
                          type: 'string',
                          title: 'Korean Title'
                        }
                      ]
                    }
                  ]
                },
                {
                    name: 'emails',
                    description: 'Create, Update, Delete, emails',
                    type: 'array',
                    of: [
                      {
                        type: 'object',
                        fields: [
                          {
                            name: 'emailAddress',
                            title: 'Email Address',
                            type: 'string'
                          },
                          {
                            name: 'emailType',
                            title: 'Email Type',
                            type: 'string'
                          }
                        ]
                      }
                    ],
                    options: {
                      layout: 'default'
                    }
                }
            ]
        }
    ]
}