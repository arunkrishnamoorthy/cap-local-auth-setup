sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/interactions/interactionitems/test/integration/FirstJourney',
		'com/interactions/interactionitems/test/integration/pages/Interactions_ItemsList',
		'com/interactions/interactionitems/test/integration/pages/Interactions_ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Interactions_ItemsList, Interactions_ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/interactions/interactionitems') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInteractions_ItemsList: Interactions_ItemsList,
					onTheInteractions_ItemsObjectPage: Interactions_ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);