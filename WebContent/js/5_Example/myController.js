define(['myApp'],function(app){
	console.log('myController.js loaded');

	return app.controller('myController',function(){
		var self = this;
		self.AgFoo = 'Hello';
		
		self.AgBar = function(str) {
			return str+'Bar';
		}
	});
	
	
});