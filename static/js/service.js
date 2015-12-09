define(function(require,exports,module){
	// 服务模块
	require('angular');
	require('underscore');
	var serviceModule=angular.module('sM',[]);

	//监听窗口变化
	serviceModule.service('adminWindowCheck',function(){

		function getResize(){
			$("#content").height( $(window).height()-$(".bar").height()-$('.navbar-header').height()-10 );
		}
		return {
			watchResize:function(){
				getResize();
				var lazyResize=_.debounce(getResize,200);
				$(window).on('resize',lazyResize);
			}
		}
	});

	//http获取json数据(adminGet)
	serviceModule.service('adminGet',['$http',function($http){
			var baseUri="../data/";
			return {
				data:function(dataName,cb){
					$http.get(baseUri+dataName+'.json')
					.success(function(d){
						cb && cb(d);
					});
				}
			}
	}]);
	module.exports=serviceModule;
});