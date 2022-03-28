'use strict';

var themes = require('./custom-path'),
    _ = require('underscore'),
    uglifyOptions = {};

_.each(themes, function (theme, name) {
    uglifyOptions = {
        svg_min: {
            files: {
                [theme['theme'] + '/Magento_Theme/web/js/utils/svg-sprite.min.js']:
                    [theme['theme'] + '/Magento_Theme/web/js/utils/svg-sprite.min.js']
            }
        }
    };
});

module.exports = uglifyOptions;
