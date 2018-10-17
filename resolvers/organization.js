import uuidv4 from 'uuid/v4'

export default {
  Query: {
    organizations: (parent, args, { models })  => models.sampleOrganizations,
    organization: (parent, { _id }, { models }) =>
      models.sampleOrganizations.find(organization => organization._id === _id )
  },

  Mutation: {
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

  Organization: {
    events: (org, args, { models }) => models.sampleEvents.filter(event => event.organizationId === org._id),
    locations: (org, args, { models }) => models.sampleLocations.filter(location => location.organizationId === org._id)
  }
}
