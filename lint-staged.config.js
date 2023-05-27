module.exports = {
  '{apps,tools,apps,libs}/**/*.{ts,tsx,js,json,md,html,css,scss}': [
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
    'nx format:write --uncommitted',
  ],
};
