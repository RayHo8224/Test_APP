// Karma configuration
// Generated on Thu Nov 02 2017 21:19:05 GMT+0800 (台北標準時間)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files,
		// exclude)
		basePath : '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter

		/** *** [1_JavaScript] [2_AngularJS] 用下面的設定**** */
		frameworks: ['jasmine'],
//------------------------------------------------------------------------
		/** *** [3_RequireJS] [4_RequireJS_AngularJS] [5_Example]  改用下面的設定**** */
//		frameworks : [ 'jasmine', 'requirejs' ],

		
		
		// list of files / patterns to load in the browser
		files : [

		/** 1_JavaScript* */
		 'js/1_JavaScript/*.js',
		 'test/1_JavaScript/*.js'

			
//------------------------------------------------------------------------
		/** 2_AngularJS* */
//		 'node_modules/angular/angular.js',
//		 'node_modules/angular-mocks/angular-mocks.js',
//		 'js/2_AngularJS/*.js',
//		 'test/2_AngularJS/*.js'

			
//------------------------------------------------------------------------
		/** 3_RequireJS    需至test-main.js進行相關設定* */ 
//		{
//			pattern : 'js/3_RequireJS/*.js',
//			included : false //false 表示初始化的時候不會使用 script 標簽直接將相關 js 引入到瀏覽器，需要自己寫代碼加載
//		},
//		{
//			pattern : 'test/3_RequireJS/*.js',
//			included : false
//		},
//		'test-main.js'

		
//------------------------------------------------------------------------
		/** 4_RequireJS_AngularJS   需至test-main.js進行相關設定* */
//		'node_modules/angular/angular.js',
//		'node_modules/angular-mocks/angular-mocks.js',
//		{
//			pattern : 'js/4_RequireJS_AngularJS/*.js',
//			included : false //false 表示初始化的時候不會使用 script 標簽直接將相關 js 引入到瀏覽器，需要自己寫代碼加載
//		},
//		{
//			pattern : 'test/4_RequireJS_AngularJS/*.js',
//			included : false
//		},
//		'test-main.js'

			
//------------------------------------------------------------------------
		/** 5_Example   需至test-main.js進行相關設定* */
//		'node_modules/angular/angular.js',
//		'node_modules/angular-mocks/angular-mocks.js',
//		{
//			pattern : 'js/5_Example/*.js',
//			included : false //false 表示初始化的時候不會使用 script 標簽直接將相關 js 引入到瀏覽器，需要自己寫代碼加載
//		},
//		{
//			pattern : 'test/5_Example/*.js',
//			included : false
//		},
//		'test-main.js'
		
		
		],

		// list of files to exclude
		exclude : [],

		// preprocess matching files before serving them to the browser
		// available preprocessors:
		// https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors : {},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters : [ 'progress' ],

		// web server port
		port : 9876,

		// enable / disable colors in the output (reporters and logs)
		colors : true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR ||
		// config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel : config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file
		// changes
		autoWatch : true,

		// start these browsers
		// available browser launchers:
		// https://npmjs.org/browse/keyword/karma-launcher
		browsers : [ 'Chrome' ],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun : false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency : Infinity
	})
}
