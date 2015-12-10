define(function(require,exports,module){
	//控制器模块
	var appController=require('./appController');//app运营
	var stageCtrlModule=require('./stageController');//平台运营
	var ctrlModule=angular.module('cM',[
		'appCtrlModule',
		'stageCtrlModule'
	]);

	//导航条登录信息
	ctrlModule.controller('navCtrl',['$scope','adminGet',function($scope,adminGet){
		//获取登录条内容
		adminGet.data('loginList',function(d){
			$scope.data=d;
		});
	}]);

	//导航条分类信息
	ctrlModule.controller('listCtrl',['$scope','adminGet',function($scope,adminGet){
		// 获取导航条内容
		adminGet.data('navList',function(d){
			$scope.barList=d;
		});
		$scope.curIndex=0;
		$scope.changeModel=function(idx){
			$scope.curIndex=idx;
		}
	}]);

	module.exports=ctrlModule;
});