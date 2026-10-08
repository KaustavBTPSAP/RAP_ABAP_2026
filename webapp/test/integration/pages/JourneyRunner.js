sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travelkaustav/test/integration/pages/ZC_TRAVEL_KDAS_MList.gen",
	"travelkaustav/test/integration/pages/ZC_TRAVEL_KDAS_MObjectPage.gen",
	"travelkaustav/test/integration/pages/ZC_BOOKING_KDAS_MObjectPage.gen"
], function (JourneyRunner, ZC_TRAVEL_KDAS_MListGenerated, ZC_TRAVEL_KDAS_MObjectPageGenerated, ZC_BOOKING_KDAS_MObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travelkaustav') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_TRAVEL_KDAS_MListGenerated: ZC_TRAVEL_KDAS_MListGenerated,
			onTheZC_TRAVEL_KDAS_MObjectPageGenerated: ZC_TRAVEL_KDAS_MObjectPageGenerated,
			onTheZC_BOOKING_KDAS_MObjectPageGenerated: ZC_BOOKING_KDAS_MObjectPageGenerated
        },
        async: true
    });

    return runner;
});

