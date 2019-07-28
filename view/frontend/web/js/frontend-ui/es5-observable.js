define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            additionalCharge: 2,
            items: [
                {name: 'Surprise Box', qty: 4, price: 1.5},
                {name: 'Chunk of Goo', qty: 1, price: 7.5}
            ],
            template: 'Matozan_MagentoJs/es5-observable',
            // Declare observable properties
            tracks: {
                additionalCharge: true,
                items: true
            }
        },

        rowTotal: item => item.qty * item.price,
        total: function () {
            const sum = this.items.map(this.rowTotal).reduce((acc, curr) => acc + curr);
            return sum + this.additionalCharge;
        }
    });
});
