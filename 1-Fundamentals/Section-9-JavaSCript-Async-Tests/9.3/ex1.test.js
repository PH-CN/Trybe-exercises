// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

it('gets a list of repositories names', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  const result = await getRepos(url);
  
  expect(result).toContain('iss-location');

});