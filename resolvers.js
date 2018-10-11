import { sampleLocations,
         sampleEvents,
         sampleOrganizations } from './seeds'

export default {
  Query: {
    allEvents: () => sampleEvents,
    allLocations: () => sampleLocations,
    allOrganizations: () => sampleOrganizations,
    event: (parent, { _id }) => {
      return sampleEvents.find(event => event._id === _id )
    },
    location: (parent, { _id }) => {
      return sampleLocations.find(location => location._id === _id )
    },
    organization: (parent, { _id }) => {
      return sampleOrganizations.find(organization => organization._id === _id )
    }
  }
}
