Ext.define('hotspots.view.Main', {
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
                xtype: 'aboutcard',
                maskOnOpen: true,
            }]
        }]
    }
});
