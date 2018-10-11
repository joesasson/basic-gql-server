import { sampleLocations,
         sampleEvents,
         sampleOrganizations } from './seeds'

export default {
  Query: {
    allLocations: () => sampleLocations
  }
}
