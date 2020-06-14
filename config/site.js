module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Ben Hunt Blogs', // Navigation and Site Title
  titleAlt: 'Ben Hunt Blogs', // Title for JSONLD
  description: 'Ben Hunt\'s blogs',
  url: 'https://benhunt.io', // Domain of your site. No trailing slash!
  siteUrl: 'https://benhunt.io', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'BensBlogs', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Ben', // Author for schemaORGJSONLD
  themeColor: '#121212',
  backgroundColor: '#121212',
  twitter: '@benhunt', // Twitter Username
};
