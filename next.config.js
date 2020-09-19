const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias.pages = path.join(__dirname, "pages");
    config.resolve.alias.styles = path.join(__dirname, "styles");
    config.resolve.alias.components = path.join(__dirname, "components");
    return config;
  },
};
