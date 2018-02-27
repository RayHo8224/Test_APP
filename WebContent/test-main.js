var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i
console.log('test-main.js loaded');
// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(normalizedTestModule)
  }
})

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths:{

	  /** 3_RequireJS **/
	  'rqSrc':'js/3_RequireJS/rqSrc',
	  'rqSrc_AMD':'js/3_RequireJS/rqSrc_AMD'

	  
//------------------------------------------------------------------------
	  /** 4_RequireJS_AngularJS **/
//	  angular:'node_modules/angular/angular',
//	  myApp:'js/4_RequireJS_AngularJS/myApp',
//	  myController:'js/4_RequireJS_AngularJS/myController'

		  
		  
//------------------------------------------------------------------------
		  /** 5_Example**/
//		  angular:'node_modules/angular/angular',
//		  myApp:'js/5_Example/myApp',
//		  myController:'js/5_Example/myController'
  },
  shim:{
	  rqSrc:{
		exports:'getStr'
	},
  	angular:{
          exports:'angular'
      }
  },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
})
