define(function(require,exports,module){
	//控制器模块
	require('angular');
	var ctrlModule=angular.module('cM',[]);

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

	//平台运营
	ctrlModule.controller('stageCtrl',['$scope','adminGet',function($scope,adminGet){
		adminGet.data('stage',function(d){
			$scope.leftData=d;
		});
	}]);

	//APP运营
	ctrlModule.controller('appCtrl',['$scope','adminGet',function($scope,adminGet){
		adminGet.data('app',function(d){
			$scope.leftData=d;
		});
	}]);
	module.exports=ctrlModule;
});