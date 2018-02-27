console.log('main.js');



require.config({
	baseUrl:'',
	paths:{
        angular:'bower_components/angular.min',
        myApp:'js/5_Example/myApp',
  	  	myController:'js/5_Example/myController',
        mySrc:'js/5_Example/mySrc',
        start:'modules/base/bootstrap'
	},
    shim:{
    	angular:{
            exports:'angular'
        },
        mySrc:{
        	exports:'mySrc'
        }
    },
    deps:['start']
});

