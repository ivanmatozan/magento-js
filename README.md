# Matozan_MagentoJs

Learning Magento 2 JavaScript (Mage2 TV)

Debugging UiComponents:
 - require('uiRegistry').get('componentName'); // get component by name
 - require('uiRegistry').get('componentName.childComponent'); // get component by name
 - require('uiRegistry').get('index = childIndex'); // get component by index
 - require('uiRegistry').get('ns = componentNamespace'); // get first component with this namespace
 - require('uiRegistry').get('ns = componentNamespace, index = childIndex'); // combined selectors
 - require('uiRegistry').get('componentName', function (c) {console.log(c)});  // callback function for component
 - require('uiRegistry').get(function (c) {console.log(c)}); // callback function for all components on the page
 