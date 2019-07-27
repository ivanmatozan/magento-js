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
            label: ko.observable('Currency Info')
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
