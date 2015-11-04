Ext.define('ExCalcApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.main',

    config: {
        refs: {
        	Total: '#mTotal',
        	Different: '#mDifferent',
        	SGD : '#mSGD',
        	USD: '#mUSD',
        	VND: '#mVND',
        	RM: '#mRM'
        },
		control: {
			Total: {change: 'onNumberChange'},
			SGD:   {change: 'onNumberChange'},
			USD:   {change: 'onNumberChange'},
			VND:   {change: 'onNumberChange'},
			RM:    {change: 'onNumberChange'}
		}
    },

    onNumberChange: function(field){
    	var maps = {
    		'SGD': {item: this.getSGD(), rate: 1}, 
    		'USD': {item: this.getUSD(), rate: 0.8},
    		'VND': {item: this.getVND(), rate: 17000},
    		'RM' : {item: this.getRM(),  rate: 3}
    	};
    	
    	var total = this.getTotal().getValue() ? this.getTotal().getValue() : 0;
    	var different = total;
    	
    	for (var aKey in maps) {
    		if(field == this.getTotal()) maps[aKey].item.setValue();
    		if(maps[aKey].item.getValue()){
    			different -= maps[aKey].item.getValue()/maps[aKey].rate;
    		}
    		else {
    			var value = total;
    			for (var key in maps) {
    				if(key != aKey){
    					var enteredValue = maps[key].item.getValue() ? maps[key].item.getValue() : 0;
    					value -= enteredValue / maps[key].rate;
    				}
    			}
    			value = value*maps[aKey].rate;
    			maps[aKey].item.setPlaceHolder(value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));//toLocaleString()
    		}
    	}
    	this.getDifferent().setPlaceHolder((-different).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
	}
});