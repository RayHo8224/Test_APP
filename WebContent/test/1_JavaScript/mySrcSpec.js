describe('mySrcSpec',function(){
	console.log('mySrcSpec.js loaded');
	
	it('foo should be 1',function(){
		expect(foo).toBe('1');
	});

	it('function bar should return 2',function(){
		expect(bar()).toEqual(2);
	});
});