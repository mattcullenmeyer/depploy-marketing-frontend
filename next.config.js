const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// https://stackoverflow.com/questions/60951575/next-js-using-sass-variables-from-global-scss
const sassOptions = {
  prependData: `@import "./src/styles/variables.scss";`,
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      env: {},
      sassOptions,
    };
  }
  return {
    ...defaultConfig,
    sassOptions,
  };
};
