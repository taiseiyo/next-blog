

module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  images: {
    domains: ['external-content.duckduckgo.com'],
    loader:"imgix",
    path:"",
  },
};

