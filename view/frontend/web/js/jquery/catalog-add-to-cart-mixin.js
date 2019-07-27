define([
    'jquery'
], function ($) {
    'use strict';

    return function (catalogAddToCart) {
        $.widget('mage.catalogAddToCart', catalogAddToCart, {
            submitForm: function (form) {
                console.log('Add to cart successfully intercepted', form);
                return this._super(form);
            }
        });

        return $.mage.catalogAddToCart;
    }
});