console.log('myAgController.js loaded');

//module函式第一個引數為模組名稱,第二個為此模組依賴的模組陣列
angular.module('myAgApp',[]).controller('myAgController', function() {
	var self = this;
	self.AgFoo = 3;

	self.AgBar = function(str) {
		return str+'Bar';
	}
});