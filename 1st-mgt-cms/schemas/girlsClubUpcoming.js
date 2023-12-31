export default {
    name: 'girlsClubUpcomingPage',
    title: 'GirlsClub - Upcoming Page',
    type: 'document',
    description: 'GirlsClub - Upcoming Page Configuration.',
    fields: [
        {
            name: 'sliceTitle',
            type: 'string',
            title: 'Slice Title',
            description: 'This is the title for this component. *Note: This is important if you have a lot of components.'
        },
        {
            name: 'subTitle',
            type: 'string',
            title: 'Sub Title for Upcoming',
            description: 'Sub Title that will display to the right side of the Heading.'
        },
        {
            name: 'breadcrumb',
            type: 'url',
            description: 'Url that leads to the Instagram account.'
        }
    ]
}