define(function(require,exports,module){
	var routerModule=angular.module('rM',['ui.router']);
	//��·��״̬����������
	routerModule.run(['$rootScope','$state','$stateParams',
		function($rootScope,$state,$stateParams){
			$rootScope.$state=$state;
			$rootScope.$stateParams=$stateParams;
			$rootScope.$on('$stateChangeStart',function(){
					console.log($state);
			});
		}]);
	//����·��
	routerModule.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){
			//·���ض���
			$urlRouterProvider
			.otherwise('/index');

			//·��
			$stateProvider
			.state('index',{
				url:'/index',
				templateUrl:'./tpl/panel.html'
			})
			.state('index.app',{
				url:'/app',
				views:{
					leftPanel:{
						templateUrl:'./tpl/leftPanel.html',
						controller:'appListCtrl'
					}
				}
			})
		}]);

	module.exports=routerModule;
});