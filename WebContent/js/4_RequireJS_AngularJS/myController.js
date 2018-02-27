define(['myApp'],function(app){
	console.log('myController.js loaded');
//	console.log('mySrc.js的foo='+foo);

	 app.controller('myController',function(){
		var self = this;
		self.AgFoo = 'Hello';
		
		self.AgBar = function(str) {
			return str+'Bar';
		}
	});
	
	
});