// require("dotenv").config();

// module.exports = {
//   GITHUB_USERNAME: process.env.GITHUB_USERNAME,
//   GITHUB_TOKEN: process.env.GITHUB_TOKEN,
//   GITHUB_API: process.env.GITHUB_API,
// };



require("dotenv").config();

module.exports = {
  GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  GITHUB_API: process.env.GITHUB_API || "https://api.github.com",
};
