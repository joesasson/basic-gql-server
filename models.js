export const sampleLocations = [
  {
    _id: '1',
    name: "Econify Office",
    address: "349 5th Ave New York NY",
    latitude: 42.575870,
    longitude: -73.683650,
    createdAt: '2018-01-10T21:33:15.233Z',
    updatedAt: '2018-01-10T21:33:15.233Z',
    organizationId: '1'
  },
  {
    _id: '2',
    name: "Joe Sasson's house",
    address: "1770 East 15th Street",
    latitude: 31.675345,
    longitude: -71.786362,
    createdAt: '2018-01-10T21:33:15.233Z',
    updatedAt: '2018-01-10T21:33:15.233Z',
    organizationId: '1'
  }

]

export const sampleOrganizations = [
  {
    _id: '1',
    name: "Econify",
    createdAt: '2018-01-10T21:33:15.233Z',
    updatedAt: '2018-01-10T21:33:15.233Z',
    locationIds: ['1', '2'],
    eventIds: ['1']
  },
  {
    _id: '2',
    name: "Marc Joseph New York",
    createdAt: '2018-01-10T21:33:15.233Z',
    updatedAt: '2018-01-10T21:33:15.233Z',
    locationIds: [],
    eventIds: ['2']
  }
]

export const sampleEvents = [
  {
    _id: '1',
    name: "Happy Hour",
    description: `An hour that's happy`,
    dateTime: '2018-01-10T21:33:15.233Z',
    createdAt: '2018-01-10T21:33:15.233Z',
    updatedAt: '2018-01-10T21:33:15.233Z',
    organizationId: '1'
  },
  {
    _id: '2',
    name: "Sad Hour",
    description: `An hour that's sad`,
    dateTime: '2018-01-10T21:33:15.233Z',
    createdAt: '2018-01-10T21:33:15.233Z',
    updatedAt: '2018-01-10T21:33:15.233Z',
    organizationId: '2'
  }

]
