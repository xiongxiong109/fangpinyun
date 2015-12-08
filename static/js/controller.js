define(function(require,exports,module){
	//控制器模块
	require('angular');
	var ctrlModule=angular.module('cM',[]);
	//导航条登录信息
	ctrlModule.controller('navCtrl',['$scope',function($scope){
		$scope.data={
			indexView:{
				content:'网站首页',
				link:'/login'
			},
			person:{
				name:'熊熊109',
				class:'超级管理员'
			},
			logoutView:{
				content:'注销',
				link:'/logout'
			}
		}
	}]);

	//导航条分类信息
	ctrlModule.controller('listCtrl',['$scope','$rootScope',function($scope,$rootScope){
		$scope.barList=[
			{
				content:"平台运营",
				data_uri:'index.stage'
			},
			{
				content:'APP运营',
				data_uri:'index.app'
			},
			{
				content:'后台管理测试',
				data_uri:'index.manage'
			}
		];
		$scope.curIndex=0;

	}]);

	//app运营板块控制器
	ctrlModule.controller('appListCtrl',['$scope',function($scope){
		$scope.data=[
			{
				title:'后台管理demo',
				list:[
					{
						name:'表单测试',
						data_uri:'app.form'
					},
					{
						name:'表格测试',
						data_uri:'app.table'
					}
				]
			},
			{
				title:'列表管理demo',
				list:[
					{
						name:'列表名单',
						data_uri:'app.list'
					},
					{
						name:'列表名单',
						data_uri:'app.listModify'
					}
				]
			}
		]
	}]);
	module.exports=ctrlModule;
});