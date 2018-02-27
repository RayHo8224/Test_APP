console.log('main.js loaded');



require.config({
	baseUrl:'',
	//替 script 建立 module ID
	paths:{
		rqSrc:'rqSrc',
		rqSrc_AMD:'rqSrc_AMD'
	},
	//如不符合AMD規範,必須於shim定義
	shim:{
		rqSrc:{
			exports:'getStr'
		}
	}
});

	require(['rqSrc','rqSrc_AMD'], function (getStr,rqSrc_AMD) {

	//非AMD規範的用法
	console.log(getStr().str());

	console.log('---------------------------');
    //符合AMD規範的用法
    console.log(rqSrc_AMD.foo_AMD);
    console.log(rqSrc_AMD.bar_AMD());
 
    
});