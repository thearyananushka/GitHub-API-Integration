
const axios = require("axios");
const { GITHUB_USERNAME, GITHUB_API } = require("../config/githubConfig");
const authHeaders = require("../middleware/authMiddleware");

const fetchProfile = async () => {
  return await axios.get(`${GITHUB_API}/users/${GITHUB_USERNAME}`, { headers: authHeaders });
};

const fetchRepoDetails = async (repoName) => {
  return await axios.get(`${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}`, { headers: authHeaders });
};

const createIssue = async (repoName, title, body) => {
  return await axios.post(
    `${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}/issues`,
    { title, body },
    { headers: authHeaders }
  );
};

module.exports = { fetchProfile, fetchRepoDetails, createIssue };
