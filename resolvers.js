const locations = [
  { _id: 1, name: "Empire State Building", }
]

export default {
  Query: {
    allLocations: () => locations
  }
}
