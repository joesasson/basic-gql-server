import uuidv4 from 'uuid/v4'

// set up geocoding api
const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GEOCODING_API_KEY,
  Promise
})

const retrieveGeoCoords = (address) => {
  return googleMapsClient.geocode({
    address
  }).asPromise()
}



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

      // Call Google Maps API
      return retrieveGeoCoords(location.address).then(response => {
        const coords = response.json.results[0].geometry.location
        location.longitude = coords.lng
        location.latitude = coords.lat

        models.sampleLocations.push(location)
        models.sampleOrganizations[location.organizationId].locationIds.push(_id)
        return location
      }).catch(err => console.log(err))

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
