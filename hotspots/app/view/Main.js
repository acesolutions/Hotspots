Ext.define('hotshots.view.Main', {
     extend: 'Ext.ux.slidenavigation.View',
    
    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom'
    ],
    
    config: {
        fullscreen: true,
        slideSelector: 'x-toolbar',
        containerSlideDelay: 10,
        selectSlideDuration: 200,
        itemMask: true,

        slideButtonDefaults: {
            selector: 'toolbar'
        },
         
         
        list: {
            maxDrag: 400,
            width: 200,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',                    
                title: {
                    title: 'Navigation',
                    centered: false,
                    width: 200,
                    left: 0
                },
                items: [{
                    docked: 'top',
                    xtype: 'searchfield',
                    placeHolder: 'search',
                    width: 180
                }]
            }] 
        },
        listPosition: 'left',

        groups: {
            'Explore': 1,
            "Settings" : 2 
        },
        
        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },
        
        items: [{
            title: 'Home',
            group: 'Explore',
            order: 0,

            // Extend `slideButtonDefaults`
            slideButton: {
                iconMask: false,
                iconCls: null,
                text: 'menu'
            },

            items: [{
                xtype: 'toolbar',
                title: 'Home',
                docked: 'top'
            },{
                xtype: 'container',
                scrollable: 'vertical',
                style: 'margin: auto !important; text-align: center;',
                maskOnOpen: true,
                items: [{
                    
                }]
            }]
        },{
            title: 'Events',
            group: 'Explore',
            order: 1,

            // Extend `slideButtonDefaults`
            slideButton: {
                iconMask: false,
                iconCls: null,
                text: 'menu'
            },

            items: [{
                xtype: 'toolbar',
                title: 'Events',
                docked: 'top'
            },{
                xtype: 'container',
                scrollable: 'vertical',
                style: 'margin: auto !important; text-align: center;',
                maskOnOpen: true,
                items: [{
                    
                }]
            }]
        },
        {
            title: 'Hotspots',
            group: 'Explore',
            order: 2,

            // Extend `slideButtonDefaults`
            slideButton: {
                iconMask: false,
                iconCls: null,
                text: 'menu'
            },

            items: [{
                xtype: 'toolbar',
                title: 'Hotspots',
                docked: 'top'
            },{
                xtype: 'container',
                scrollable: 'vertical',
                style: 'margin: auto !important; text-align: center;',
                maskOnOpen: true,
                items: [{
                    
                }]
            }]
        },
        {
            title: 'Plan',
            group: 'Explore',
            order: 3,

            // Extend `slideButtonDefaults`
            slideButton: {
                iconMask: false,
                iconCls: null,
                text: 'menu'
            },

            items: [{
                xtype: 'toolbar',
                title: 'Item 8',
                docked: 'top'
            },{
                xtype: 'container',
                scrollable: 'vertical',
                style: 'margin: auto !important; text-align: center;',
                maskOnOpen: true,
                items: [{
                    
                }]
            }]
        },
        {
            title: 'Options',
            group: 'Settings',
            order: 0,

            // Extend `slideButtonDefaults`
            slideButton: {
                iconMask: false,
                iconCls: null,
                text: 'menu'
            },

            items: [{
                xtype: 'toolbar',
                title: 'Options',
                docked: 'top'
            },{
                xtype: 'container',
                scrollable: 'vertical',
                style: 'margin: auto !important; text-align: center;',
                maskOnOpen: true,
                items: [{
                    
                }]
            }]
        },
        {
            title: 'About',
            group: 'Settings',
            order: 1,

            // Extend `slideButtonDefaults`
            slideButton: {
                iconMask: false,
                iconCls: null,
                text: 'menu'
            },

            items: [{
                xtype: 'toolbar',
                title: 'About',
                docked: 'top'
            },{
                xtype: 'container',
                scrollable: 'vertical',
                style: 'margin: auto !important;',
                maskOnOpen: true,
                items: [{
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
                }]
            }]
        }]
    }
});
