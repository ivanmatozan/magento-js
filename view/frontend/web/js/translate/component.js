define([
    'uiComponent',
    'jquery',
    'mage/translate'
], function (Component, $, $t) {
    'use strict';

    const remaining = 60 - new Date().getSeconds();

    return Component.extend({
        getTitle: function () {
            return 'Place order within %1 seconds!'.replace('%1', remaining);
        },

        getJQueryTitle: function () {
            return $.mage.__('Place order within %1 seconds!').replace('%1', remaining);
        },

        getMageTitle: function () {
            return $t('Place order within %1 seconds!').replace('%1', remaining);
        }
    });
});
