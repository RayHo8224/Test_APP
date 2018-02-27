define(['myController'],function(myController){
	describe('myControllerSpec',function(){
		console.log("myControllerSpec.js loaded");
		
		
		var ctrl;	
		beforeEach(module('myApp'));

		beforeEach(inject(function($controller) {
			ctrl = $controller('myController');
		}));
		
		it('AgFoo should be Hello',function(){
			expect(ctrl.AgFoo).toEqual('Hello');
		});

		it('function AgBar should be str+Bar',function(){
			expect(ctrl.AgBar('Foo')).toEqual('FooBar');
		});
		
		
		
	});
});