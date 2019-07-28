define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            title: 'Component B',
            value: 5.5,
            details: 'Quisque viverra ultrices velit at aliquet',
            tracks: {
                title: true,
                value: true,
                details: true
            }
        }
    });
});
