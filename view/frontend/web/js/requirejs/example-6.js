define([
    'jquery'
],function ($) {
    'use strict';

    return function (config, element) {
        $.getJSON(config.baseUrl + 'rest/V1/directory/currency', function (result) {
            element.innerText = JSON.stringify(result, null, 4);
        })
    }
});
