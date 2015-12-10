define(function(require,exports,module){
	require('angular');
	//过滤器模块
	var filterModule=angular.module('fM',[]);

	filterModule.filter('int',function(){
		return function(num){
			return Math.ceil(num);
		}
	});
	module.exports=filterModule;
});