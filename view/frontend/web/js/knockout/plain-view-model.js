define([
    'ko'
], function (ko) {
    'use strict';

    return function (config) {
        const title = ko.observable('This is a simple view-model');

        title.subscribe(function (newValue) {
            console.log('Changed to', newValue);
        });

        title.subscribe(function (oldValue) {
            console.log('Will be changed from', oldValue);
        }, this, 'beforeChange');

        return {
            title: title,
            config: config
        };
    }
});
