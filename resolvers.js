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
      let { name, dateTime, description, createdAt, updatedAt, organizationId } = args
      const _id = uuidv4()
      const event = {
        _id,
        name,
        dateTime,
        description,
        createdAt,
        updatedAt,
        organizationId
      }

      sampleEvents.push(event)
      sampleOrganizations[organizationId].eventIds.push(_id)

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
    createLocation: () => '',
    createOrganization: () => '',
    // updateLocation: () => '',
    // updateOrganization: () => '',
    // deleteLocation: () => '',
    // deleteOrganization: () => '',
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
