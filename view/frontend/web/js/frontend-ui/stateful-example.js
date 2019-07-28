define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            input: 'Some random string',
            tracks: {
                input: true
            },
            statefull: {
                input: true
            }
        }
    });
});
