define([
    'jquery',
    'collapsible'
], function ($) {
    'use strict';

    const waitForUpdate = function () {
        if (!this.content.attr('aria-busy')) {
            return this.content.trigger('contentUpdated');
        }

        setTimeout(waitForUpdate.bind(this), 100);
    };

    $.widget('mage2tv.collapsible', $.mage.collapsible, {
        _loadContent: function () {
            this._super();
            waitForUpdate.call(this);
        }
    });

    return $.mage2tv.collapsible;
});
