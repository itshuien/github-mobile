import axios from 'axios';

export const getOrganization = async name => {
  try {
    const { data } = await axios.get(`https://api.github.com/orgs/${name}`);
    return data;
  } catch(e) {
    console.error(e);
  }
}

export const getRepositories = async organization => {
  try {
    const { data } = await axios.get(`https://api.github.com/orgs/${organization}/repos`);
    return data;
  } catch(e) {
    console.error(e);
  }
}

export const getRepoLanguages = async repoFullName => {
  try {
    const { data } = await axios.get(`https://api.github.com/repos/${repoFullName}/languages`);
    return data;
  } catch(e) {
    console.error(e);
  }
}

export const getRepoWatchers = async (owner, repository) => {
  try {
    const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repository}/subscribers`);
    return data;
  } catch(e) {
    console.error(e);
  }
}
