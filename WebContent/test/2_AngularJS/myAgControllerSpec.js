describe('myAgContrillerSpec',function(){
	console.log("myAgContrillerSpec.js loaded");
	
	var ctrl;	
	
	//每個it區塊之前,都會被執行一次
	//每次測試前實體化新模組
	beforeEach(module('myAgApp'));

	//每次都實體化新的controller實體
	beforeEach(inject(function($controller) {
		ctrl = $controller('myAgController');
	}));
	
	//每個it區塊各自獨立
	it('AgFoo should be 1',function(){
		expect(ctrl.AgFoo).toEqual(3);
	});

	it('function AgBar should return 123Bar',function(){
		expect(ctrl.AgBar('1')).toEqual('123Bar');
	});
	
});