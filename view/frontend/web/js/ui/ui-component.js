define([
    'uiElement'
], function (UiElement) {
    'use strict';

    return UiElement.extend({
        defaults: {
            label: 'ViewModel defaults.label property',
            values: [22, 1, 5, 1024, 777],
            template: 'Matozan_MagentoJs/ui-component-template'
        },
        label: 'ViewModel label property'
    });
});
