'use strict';

var themes = require('../tools/files-router').get('themes'),
    _ = require('underscore'),
    themesArea = 'app/design/',
    customUtilsArea = 'Magento_Theme/web/js/utils/',
    customThemes = {},
    themeData = {};

_.each(themes, function (theme, name) {
    if (theme.name.match(/^CustomVendor/)) {
        themeData['theme'] =  themesArea + theme.area + '/' + theme.name;
        themeData['utils'] = themesArea + theme.area + '/' + theme.name + '/' + customUtilsArea;

        customThemes[name] = themeData;
    }
});

module.exports = customThemes;
