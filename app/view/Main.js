Ext.define('ExCalcApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Number'
    ],
    config: {
    	fullscreen: true,
        tabBarPosition: 'top',

        items: [
            {
                title: 'Money Exchange Calculator',
                layout : 'vbox',
                defaults    : {
                	xtype : 'numberfield',
                	cls: 'custom-text-field',
                	labelCls:'custom-text-label',
                    flex  : 1
                },
                items: [
                    {
                    	id: 'mTotal',
                    	label: 'Total (SGD)',
                    },
                    {
                    	xtype: 'container',
                    	flex: 0.1
                    },
                    {
                    	xtype: 'container',
                    	layout: 'hbox',
                    	defaults    : {
                        	xtype : 'numberfield',
                        	clearIcon : false,
                        	labelCls:'custom-text-label',
                        },
                		items:[
                		       {
                		    	   label: 'SGD',
                		    	   id: 'mSGD',
                		    	   flex  : 0.7
                		       },
                		       {
									label: 'VND',
									id: 'mVND',
									flex  : 1
								}
                		]
                    },
                    {
                    	xtype: 'container',
                    	flex: 0.1
                    },
                    {
                    	xtype: 'container',
                    	layout: 'hbox',
                    	defaults    : {
                    		xtype : 'numberfield',
                    		clearIcon : false,
                    		labelCls:'custom-text-label',
                    		flex  : 1
                    	},
                    	items:[
                		       	{
                		    	   label: 'USD',
                		    	   id: 'mUSD',
                		    	   flex  : 0.7
                		       	},
								{
									label: 'RMs',
									id: 'mRM',
									flex  : 1
								}
                    	]
                    },
                    {
                    	xtype: 'container',
                    	flex: 0.1
                    },
                    {
                    	id: 'mDifferent',
                    	label: 'Different (SGD)',
                    	disabled: true,
                    }
                ]

            }
        ]
    }
});
