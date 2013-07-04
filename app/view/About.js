Ext.define('hotspots.view.About', {
	extend: 'Ext.Container',
	xtype: 'aboutcard',
	requires:[
  		
	],
	
	config: {
		 scrollable: 'vertical',
         style: 'margin: auto !important;',
	
		items: [
		{
			html: '<h1><b>The Goal</b></h1>'+
                    '<br>'+
                    '<div style="text-align:left;">'+
                    '<p>The goal of the application is simple Hotspot will allow all users to search for a gig or event by artist or event in which they can then find a gig they are interested in, once the specific event has been selected Hotspot aims to retrieve you all the places near the event which could be of interest. Being a fellow gig enthusiast, heres a number of places which could be of interest: Hotels, bars, clubs and maybe a restaurant.</p>'+
                    '<br>'+
                    '<p>More planning can equal a better experience, allowing you to relax and get you in the gigging mood without the hassle of searching several sources for places to see.</p>'+
                    "<br>"+
                    '<h2><b>Breakdown of features</b></h2>'+
                    '<br>'+
                    '<ul>'+
                    '<li>Search for upcoming gigs to an artist or search for a specific event</li>'+
                    '<br>'+
                    '<li>Using filters choose some location categories, with this a map can be created with the locations plotted</li>'+
                    '<br>'+
                    '<li>Shortlist places of interest</li>'+
                    '<br>'+
                    '<li>Create a plan of places to see or places to stay</li>'+
                    '<br>'+
                    '<li>Add your event to a calendar</li>'+
                    '</ul>'+
                    '</div>'
		},
		{
			xtype: 'button',
            text: 'Share App',
            ui: 'confirm',
            action: 'share'
		}]
	}
});

