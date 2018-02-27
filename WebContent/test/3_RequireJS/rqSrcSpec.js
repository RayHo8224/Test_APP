define(['rqSrc','rqSrc_AMD'],function(getStr,rqSrc){
	console.log('rqSrcSpec.js loaded');

	describe('rqSrcSpec',function(){
		
		it('getStr().str() should be Hello World !',function(){
			expect(getStr().str()).toEqual('Hello World !');
		});

		it('rqFoo should be AMD',function(){
			expect(rqSrc.foo_AMD).toEqual('AMD');
		});
		
		it('function rqBar should return HaHa',function(){
			expect(rqSrc.bar_AMD()).toEqual('HaHa');
		});
		
	});
});