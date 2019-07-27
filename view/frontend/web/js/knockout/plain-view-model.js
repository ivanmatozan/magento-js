define([
    'ko',
    'jquery'
], function (ko, $) {
    'use strict';

    return function (config) {
        const title = ko.observable('This is a simple view-model');
        let currencyInfo = ko.observable();
        
        $.getJSON(config.baseUrl + 'rest/V1/directory/currency', currencyInfo);

        title.subscribe(function (newValue) {
            console.log('Changed to', newValue);
        });

        title.subscribe(function (oldValue) {
            console.log('Will be changed from', oldValue);
        }, this, 'beforeChange');

        const viewModel = {
            title: title,
            config: config,
            label: ko.observable('Currency Info'),
            exchangeRates: ko.observableArray([
                {
                    currencyTo: 'USD',
                    rate: 1.0
                },
                {
                    currencyTo: 'EUR',
                    rate: 0.68
                },
                {
                    currencyTo: 'NZD',
                    rate: 1.43
                }
            ]),
            values: ko.observableArray([1, 3, 5, 7, 9])
        };

        viewModel.output = ko.computed(function () {
            if (currencyInfo()) {
                return this.label() + ':\n' + JSON.stringify(currencyInfo(), null, 4);
            }

            return '...loading';
        }.bind(viewModel));

        return viewModel;
    }
});
