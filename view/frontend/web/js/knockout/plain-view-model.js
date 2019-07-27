define([
    'ko'
], function (ko) {
    'use strict';

    return function (config) {
        return {
            title: ko.observable('This is a simple view-model'),
            config: config
        };
    }
});
