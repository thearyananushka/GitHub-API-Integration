

const { GITHUB_TOKEN } = require("../config/githubConfig");

const authHeaders = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github.v3+json",
  "User-Agent": "GitHub API Service",
};

module.exports = authHeaders;
