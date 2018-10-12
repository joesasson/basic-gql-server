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
    organization: event => sampleOrganizations.find(org => event.organizationId === org._id)
  },
  Location: {
    organization: location => sampleOrganizations.find(org => location.organizationId === org._id)
  },
  Organization: {
    events: org => sampleEvents.filter(event => event.organizationId === org._id),
    locations: org => sampleLocations.filter(location => location.organizationId === org._id)
  }
}
