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
        },
        {
          name: 'additionalInfo',
          type: 'array',
          title: 'Additional Info',
          description: 'Additional information can be added here. This block is displayed below the contact information.',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'enText',
                  title: 'English Text',
                  type: 'array',
                  of: [{ type: 'block'}]
                },
                {
                  name: 'krText',
                  title: 'Korean Text',
                  type: 'array',
                  of: [{ type: 'block'}]
                },
              ]
            }
          ],
          options: {
            layout: 'default'
          }
        },
        {
          name: 'mapSection',
          title: 'Map Section',
          type: 'object',
          description: 'This is the content that is displayed in the map section',
          fields: [
            {
              name: 'phoneNumbers',
              type: 'array',
              title: 'Phone Numbers',
              description: 'Please enter both English & Korean phone numbers as well as the text that is to the left of the phone numbers.',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'enText',
                      title: 'English Phone Number',
                      type: 'array',
                      description: 'When adding the telephone number please add it as a link',
                      of: [{ type: 'block'}]
                    },
                    {
                      name: 'krText',
                      title: 'Korean Phone Number',
                      type: 'array',
                      description: 'When adding the telephone number please add it as a link',
                      of: [{ type: 'block'}]
                    },
                  ]
                }
              ],
              options: {
                layout: 'default'
              },  
            },
            {
              name: 'mapIframe',
              title: 'Map Embed Link',
              type: 'string',
              description: 'Please copy and paste the google maps iframe embed here. Please make sure that the custom size is set to: 1920 x 500',
            }
          ]
        }
    ]
}