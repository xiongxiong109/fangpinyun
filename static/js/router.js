define(function(require,exports,module){
	var routerModule=angular.module('rM',['ui.router']);
	//绑定路由状态到根作用域
	routerModule.run(['$rootScope','$state','$stateParams',
		function($rootScope,$state,$stateParams){
			$rootScope.$state=$state;
			$rootScope.$stateParams=$stateParams;
		}]);
	//配置路由
	routerModule.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){
			//路由重定向
			$urlRouterProvider
			.otherwise('/index');

			//路由
			$stateProvider
			.state('index',{
				url:'/index',
				templateUrl:'./tpl/panel.html'
			});
		}]);

	module.exports=routerModule;
});