define(function () {
    'use strict';
    
    return function (checkoutData) {
        const origin = checkoutData.getSelectedShippingAddress;

        checkoutData.getSelectedShippingAddress = function () {
            const address = origin.call(checkoutData);
            console.log('Selected shipping address', address);
            return address;
        };

        return checkoutData;
    }
});
