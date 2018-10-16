import uuidv4 from 'uuid/v4';

export default {
  Query: {
    events: (parent, args, { models })  => models.sampleEvents,
    locations: (parent, args, { models })  => models.sampleLocations,
    organizations: (parent, args, { models })  => models.sampleOrganizations,
    event: (parent, { _id }, { models }) => models.sampleEvents.find(event => event._id === _id ),
    location: (parent, { _id }, { models }) =>
      models.sampleLocations.find(location => location._id === _id )
    ,
    organization: (parent, { _id }, { models }) =>
      models.sampleOrganizations.find(organization => organization._id === _id )
  },

  Mutation: {
    createEvent: (parent, args, { models }) => {
      let event = args
      const _id = uuidv4()
      event._id = _id

      models.sampleEvents.push(event)
      models.sampleOrganizations[event.organizationId].eventIds.push(_id)

      return event
    },
    updateEvent: (parent, args, { models }) => {
      let event = models.sampleEvents.find(event => args._id === event._id)
      event = Object.assign(event, {...args})
      return event
    },
    deleteEvent: (parent, args, { models }) => {
      let event = models.sampleEvents.find(event => args._id === event._id)
      let eventIndex = models.sampleEvents.findIndex(event => args._id === event._id)
      if(eventIndex < 0) return false
      let orgEvents = models.sampleOrganizations[event.organizationId].eventIds
      orgEvents.splice(orgEvents.indexOf(event._id), 1)
      models.sampleEvents.splice(eventIndex, 1)
      return true
    },
    createLocation: (parent, args, { models }) => {
      let location = args
      const _id = uuidv4()
      location._id = _id

      models.sampleLocations.push(location)
      models.sampleOrganizations[location.organizationId].locationIds.push(_id)
      return location
    },
    updateLocation: (parent, args, { models }) => {
      let location = models.sampleLocations.find(location => args._id === location._id)
      location = Object.assign(location, {...args})
      return location
    },
    deleteLocation: (parent, { _id }, { models }) => {
      let location = models.sampleEvents.find(location => _id === location._id)
      let locationIndex = models.sampleEvents.findIndex(location => _id === location._id)
      if(locationIndex < 0) return false
      let orgLocations = models.sampleOrganizations[location.organizationId].locationIds
      orgLocations.splice(orgLocations.indexOf(location._id), 1)
      models.sampleLocations.splice(locationIndex, 1)
      return true
    },
    createOrganization: (parent, args, { models }) => {
      let organization = args
      const _id = uuidv4()
      organization._id = _id
      models.sampleOrganizations.push(organization)

      return organization
    },
    updateOrganization: (parent, args, { models }) => {
      let organization = models.sampleOrganizations.find(organization => args._id === organization._id)
      organization = Object.assign(organization, {...args})
      return organization
    },
    deleteOrganization: (parent, { _id }, { models }) => {
      const orgIndex = models.sampleOrganizations.findIndex(org => org._id === _id)
      if(orgIndex < 0) return false
      models.sampleOrganizations.splice(orgIndex, 1)
      return true
    },
  },


  Event: {
    organization: (event, args, { models }) => models.sampleOrganizations.find(org => event.organizationId === org._id)
  },
  Location: {
    organization: (location, args, { models }) => models.sampleOrganizations.find(org => location.organizationId === org._id)
  },
  Organization: {
    events: (org, args, { models }) => models.sampleEvents.filter(event => event.organizationId === org._id),
    locations: (org, args, { models }) => models.sampleLocations.filter(location => location.organizationId === org._id)
  }
}
