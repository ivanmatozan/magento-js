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
            },
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Matozan_MagentoJs/js/jquery/catalog-add-to-cart-mixin': true
            },
            'Magento_Checkout/js/view/minicart': {
                'Matozan_MagentoJs/js/frontend-ui/minicart-mixin': true
            }
        }
    },

    // Loads module on every page
    deps: [
        'Matozan_MagentoJs/js/requirejs/log-when-loaded'
    ],

    shim: {
        'Magento_Catalog/js/view/compare-products': {
            deps: [
                // Load module before some other module
                'Matozan_MagentoJs/js/requirejs/before-compare-products'
            ]
        }
    },

    // Rewrite modules
    paths: {
        // 'matozanTitle': 'Matozan_MagentoJs/js/requirejs/v1'
        'matozanTitle': 'Matozan_MagentoJs/js/requirejs/v2'
    }
};
