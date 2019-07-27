var config = {
    map: {
        '*': {
            coffee: 'Matozan_MagentoJs/js/requirejs/example-7'
        }
    },

    config: {
        mixins: {
            'Magento_Checkout/js/checkout-data': {
                'Matozan_MagentoJs/js/requirejs/checkout-data-mixin': true
            }
        }
    },

    // Loads module on every page
    deps: [
        'Matozan_MagentoJs/js/requirejs/log-when-loaded'
    ]
};
