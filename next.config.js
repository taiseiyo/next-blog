module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": {page: "/"},
    };
  },
  images: {
    domains: ["external-content.duckduckgo.com"],
    loader: "imgix",
    path: "",
  },

  productBrowserSourceMaps: true,
};

// module.exports = withOptimizedImages({
//   reactStrictMode: true,
//   trailingSlash: true,
//   handleImages: ["jpg"],
//   path: "",
// });
