import { sampleLocations,
         sampleEvents,
         sampleOrganizations } from './models'
import uuidv4 from 'uuid/v4';

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

  Mutation: {
    createEvent: (parent, args) => {
      let event = args
      const _id = uuidv4()
      event._id = _id

      sampleEvents.push(event)
      sampleOrganizations[event.organizationId].eventIds.push(_id)

      return event
    },
    updateEvent: (parent, args) => {
      let event = sampleEvents.find(event => args._id === event._id)
      event = Object.assign(event, {...args})
      return event
    },
    deleteEvent: (parent, args) => {
      let event = sampleEvents.find(event => args._id === event._id)
      let eventIndex = sampleEvents.findIndex(event => args._id === event._id)
      if(eventIndex < 0) return false
      let orgEvents = sampleOrganizations[event.organizationId].eventIds
      orgEvents.splice(orgEvents.indexOf(event._id), 1)
      sampleEvents.splice(eventIndex, 1)
      return true
    },
    createLocation: (parent, args) => {
      let location = args
      const _id = uuidv4()
      location._id = _id

      sampleLocations.push(location)
      sampleOrganizations[location.organizationId].locationIds.push(_id)
      return location
    },
    updateLocation: (parent, args) => {
      let location = sampleLocations.find(location => args._id === location._id)
      location = Object.assign(location, {...args})
      return location
    },
    deleteLocation: (parent, { _id }) => {
      let location = sampleEvents.find(location => _id === location._id)
      let locationIndex = sampleEvents.findIndex(location => _id === location._id)
      if(locationIndex < 0) return false
      let orgLocations = sampleOrganizations[location.organizationId].locationIds
      orgLocations.splice(orgLocations.indexOf(location._id), 1)
      sampleLocations.splice(locationIndex, 1)
      return true
    },
    createOrganization: (parent, args) => {
      let organization = args
      const _id = uuidv4()
      organization._id = _id
      sampleOrganizations.push(organization)

      return organization
    },
    updateOrganization: (parent, args) => {
      let organization = sampleOrganizations.find(organization => args._id === organization._id)
      organization = Object.assign(organization, {...args})
      return organization
    },
    deleteOrganization: (parent, { _id }) => {
      sampleOrganizations = sampleOrganizations.filter(org => org._id !== _id)
      return true
    },
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
