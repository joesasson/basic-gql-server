import { sampleLocations,
         sampleEvents,
         sampleOrganizations } from './models'

export default {
  Query: {
    events: () => sampleEvents,
    locations: () => sampleLocations,
    organizations: () => sampleOrganizations,
    event: (parent, { _id }) => sampleEvents.find(event => event._id === _id ),
    location: (parent, { _id }) =>
      sampleLocations.find(location => location._id === _id )
    ,
    organization: (parent, { _id }) =>
      sampleOrganizations.find(organization => organization._id === _id )
  },

  Event: {
    organization: event => sampleOrganizations.find(org => org.id === sampleOrganizations._id)
  }
}
