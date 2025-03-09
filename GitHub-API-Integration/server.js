
require("dotenv").config();
const express = require("express");
const githubRoutes = require("./routes/githubRoutes");

const app = express();
app.use(express.json());

// ✅ Root Route for API Information
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Welcome to GitHub API Service</h1>
    <p>Use <code>/github</code> to fetch user details.</p>
    <p>Use <code>/github/:repoName</code> to get repo details.</p>
    <p>Use <code>/github/:repoName/issues</code> to create an issue.</p>
  `);
});

app.use("/", githubRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
