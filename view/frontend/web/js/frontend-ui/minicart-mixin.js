define(function () {
    'use strict';

    return function (Minicart) {
        return Minicart.extend({
            update: function (updatedCart) {
                console.log('Minicart update is intercepted');
                console.log(updatedCart);

                return this._super(updatedCart);
            }
        });
    }
});
