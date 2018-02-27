define(['angular'],function(angular){
	console.log('myApp.js loaded');

	//module函式第一個引數為模組名稱,第二個為此模組依賴的模組陣列
	var app=angular.module('myApp',[]);
	
	return app;
});