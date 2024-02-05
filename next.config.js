const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
  transpilePackages: ['@mep-agency/next-iubenda'],
  // Other Next.js configuration ...
});