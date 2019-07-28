define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            label: 'Component A',
            amount: 11,
            tracks: {
                label: true,
                amount: true
            },
            imports: {
                amount: 'component-b:value', // Imports property value from component-b
                onValueUpdate: 'component-b:value' // Call function when component-b value property changes
            },
            exports: {
                label: 'component-b:title' // Exports property label to component-b title property
            }
        },

        onValueUpdate: function (newValue) {
            console.log('Value updated to', newValue);
        }
    });
});
