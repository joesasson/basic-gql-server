import uuidv4 from 'uuid/v4'

export default {
  Query: {
    locations: (parent, args, { models })  => models.sampleLocations,
    location: (parent, { _id }, { models }) =>
      models.sampleLocations.find(location => location._id === _id ),
  },

  Mutation: {
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
  },

  Location: {
    organization: (location, args, { models }) => models.sampleOrganizations.find(org => location.organizationId === org._id)
  },
}
