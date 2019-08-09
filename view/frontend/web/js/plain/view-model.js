define([
    'uiComponent',
    'Matozan_MagentoJs/js/ko-binding/pixelbg'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            pixelSize: 10,
            tracks: {
                pixelSize: true
            }
        }
    });
});
