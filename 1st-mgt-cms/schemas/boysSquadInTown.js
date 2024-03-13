export default {
    name: 'boysSquadInTown',
    title: 'BoysSquad - In Town Page',
    type: 'document',
    description: 'BoysSquad - In Town Configuration.',
    fields: [
        {
            name: 'sliceTitle',
            type: 'string',
            title: 'Slice Title',
            description: 'This is the title for this component. *Note: This is important if you have a lot of components.'
        },
        {
            name: 'navigation',
            type: 'array',
            title: 'Navigation',
            description: '*NOTE The first item in this navigation list should match tha page title. E.g: In the Upcoming page the first item in the list will be "Upcoming"',
            of: [{
                title: 'Navigation Item',
                type: 'string'
            }]
        },
        {
            name: 'breadcrumb',
            type: 'url',
            description: 'Url that leads to the Instagram account.'
        }
    ]
}