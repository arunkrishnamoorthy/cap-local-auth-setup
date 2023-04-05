sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.interactions.interactionitems',
            componentId: 'Interactions_ItemsObjectPage',
            entitySet: 'Interactions_Items'
        },
        CustomPageDefinitions
    );
});