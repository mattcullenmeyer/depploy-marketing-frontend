const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// https://stackoverflow.com/questions/60951575/next-js-using-sass-variables-from-global-scss
const sassOptions = {
  prependData: `@import "./src/styles/variables.scss";`,
};

// https://nextjs.org/docs/messages/export-image-api
const images = {
  loader: "akamai",
  path: "/",
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.sanity.io",
      port: "",
      pathname: "/images/**",
    },
  ],
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      env: {},
      sassOptions,
      images,
    };
  }
  return {
    ...defaultConfig,
    sassOptions,
    images,
  };
};
