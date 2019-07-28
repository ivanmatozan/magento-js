define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            label: 'Component A',
            amount: 11,
            description: 'Lorem ipsum dolor sit amet',
            tracks: {
                label: true,
                amount: true,
                description: true
            },
            imports: {
                // Used ${ $.provider } is => 'component-b'
                amount: '${ $.provider }:value', // Imports property value from component-b
                onValueUpdate: 'component-b:value' // Call function when component-b value property changes
            },
            exports: {
                label: 'component-b:title' // Exports property label to component-b title property
            },
            links: {
                description: 'component-b:details' // Two-way binding with component-b details property
            }
        },

        onValueUpdate: function (newValue) {
            console.log('Value updated to', newValue);
        }
    });
});
