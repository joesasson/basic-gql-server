import uuidv4 from 'uuid/v4'

export default {
  Query: {
    events: (parent, args, { models })  => models.sampleEvents,
    event: (parent, { _id }, { models }) =>
      models.sampleEvents.find(event => event._id === _id ),
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
  },

  Event: {
    organization: (event, args, { models }) => models.sampleOrganizations.find(org => event.organizationId === org._id)
  },
}
