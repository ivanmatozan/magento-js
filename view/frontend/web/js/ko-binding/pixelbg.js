define([
    'ko',
    'Magento_Ui/js/lib/knockout/template/renderer',
    'Matozan_MagentoJs/js/plain/pixelbg'
], function (ko, renderer, pixelBackground) {
    'use strict';

    const TYPE_COMMENT = 8;

    /**
     * Check if element is comment (ko virtual element)
     *
     * @param node
     * @returns {boolean}
     */
    function isVirtualElement(node) {
        return node.nodeType === TYPE_COMMENT;
    }

    function makeRealElement(virtualElement) {
        const div = document.createElement('div');
        const children = ko.virtualElements.childNodes(virtualElement);
        ko.virtualElements.emptyNode(virtualElement);

        for (let i = 0; i < children.length; i++) {
            div.appendChild(children[i]);
        }

        ko.virtualElements.insertAfter(virtualElement, div);

        return div;
    }

    function execute(node, valueAccessor, allBindings, maybeCanvas) {
        const value = ko.unwrap(valueAccessor()) || {};
        const config = {
            src: typeof value === 'string' ? value : value.src,
            pixelSize: typeof value === 'string' ? allBindings.get('pixelSize') : value.pixelSize,
            opaque: typeof value === 'string' ? allBindings.get('opaque') : value.opaque
        };

        return pixelBackground(config, node, maybeCanvas);
    }

    // Create custom ko binding
    ko.bindingHandlers.pixelbg = {
        // Init handler
        init: function (node, valueAccessor, allBindings, viewModel, bindingContext) {
            const element = isVirtualElement(node) ? makeRealElement(node) : node;
            const canvas = execute(element, valueAccessor, allBindings);
            bindingContext.$data.pixelbg = {canvas: canvas, element: element};
        },

        // Update handler
        update: function (node, valueAccessor, allBindings, viewModel, bindingContext) {
            const element = bindingContext.$data.pixelbg.element;
            const canvas = bindingContext.$data.pixelbg.canvas;
            execute(element, valueAccessor, allBindings, canvas);
        }
    };

    // Make binding available for use by virtual elements
    ko.virtualElements.allowedBindings.pixelbg = true;

    renderer.addNode('pixelbg');
    renderer.addAttribute('pixelbg');

    return ko;
});
