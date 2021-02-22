export const FETCH_ORGANIZATION = 'FETCH_ORGANIZATION';
export const FETCH_ORGANIZATION_SUCCESS = 'FETCH_ORGANIZATION_SUCCESS';

export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES';
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';

export const fetchOrganization = name => {
  return {
    type: FETCH_ORGANIZATION,
    payload: { name }
  }
}

export const fetchOrganizationSuccess = organization => {
  return {
    type: FETCH_ORGANIZATION_SUCCESS,
    payload: organization
  }
}

export const fetchRepositories = organization => {
  return {
    type: FETCH_REPOSITORIES,
    payload: { organization }
  }
}

export const fetchRepositoriesSuccess = repositories => {
  return {
    type: FETCH_REPOSITORIES_SUCCESS,
    payload: repositories
  }
}
