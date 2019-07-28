define([
    'uiComponent',
    'Matozan_MagentoJs/js/frontend-ui/custom-app/counter-state'
], function (Component, state) {
    'use strict';

    return Component.extend({
        value: function () {
            return state.counter;
        }
    });
});
