
const express = require("express");
const { getGitHubProfile, getRepoDetails, postIssue } = require("../controllers/githubController");

const router = express.Router();

router.get("/github", getGitHubProfile);
router.get("/github/:repoName", getRepoDetails);
router.post("/github/:repoName/issues", postIssue);

module.exports = router;
