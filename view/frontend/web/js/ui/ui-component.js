define([
    'uiElement'
], function (UiElement) {
    'use strict';

    return UiElement.extend({
        defaults: {
            label: 'ViewModel defaults.label property' // Best practice
        },
        label: 'ViewModel label property'
    });
});
