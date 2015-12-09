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
			.otherwise('/stage');

			//路由
			$stateProvider
			.state('stage',{//平台运营
				url:'/stage',
				views:{
					'mainPanel':{
							templateUrl:'./tpl/mainPanel.html',
							controller:'stageCtrl'
						}
					}
			})
			.state('stage.module',{//平台运营模块
				url:'/:module',
				views:{
					rightMain:{
						templateUrl:function(stateParams){
							return './tpl/stage/stage.'+stateParams.module+'.html';
						}
					}
				}
			})
			.state('app',{//APP运营
				url:'/app',
				views:{
					'mainPanel':{
						templateUrl:'./tpl/mainPanel.html',
						controller:'appCtrl'
					}
				}
			})
			.state('app.module',{
				url:'/:module',
				views:{
					'rightMain':{
						templateUrl:function(stateParams){
							return './tpl/app/app.'+stateParams.module+'.html';
						}
					}
				}
			})
			.state('app.list',{
				url:'/list/:queryId',
				resolve:{
					qId:function($stateParams){
						return {'pageId':$stateParams.queryId}
					}
				},
				views:{
					'rightMain':{
						templateUrl:function(stateParams){
							// console.log(stateParams.queryId);
							return './tpl/app/app.list.html';
						}
					}
				}
			});
		}]);

	module.exports=routerModule;
});