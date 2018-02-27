/*
 * define(id?, dependencies?, factory);
 * 其中 id 格式為字串，代表模組的名稱，可以不寫。如果要寫的話，
 * 就必須是相對於main.js 的檔案路徑，但不用加上 js 副檔名，例如 ../lib/foo 或 ./js/bar 。
 * 而 dependencies 格式為陣列，作用與 require 中的 dependencies 相同。
 * 一般來說如果我們在main.js 中定義好相依性後，這裡可以不需要特別指定。
 * 最後的 factory 則為一個工廠方法，它必須回傳一個物件，也就是我們的模組。
 */
define([], function() {
	console.log('rqSrc_AMD.js loaded');
	var foo_AMD = 'AMD';
	var bar_AMD = function() {
		return 'HaHa';
	}
	
	return{
		foo_AMD:foo_AMD,
		bar_AMD:bar_AMD
	};
	
});