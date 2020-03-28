const withCss = require('@zeit/next-css');
const withImages = require('next-images');
module.exports = {
    exportPathMap: () => ({
        '/': {page: '/'}
    })
};

module.exports = withImages(withCss({}));