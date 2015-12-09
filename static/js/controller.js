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

	//APP列表模块控制器(测试)
	ctrlModule.controller('appListCtrl',['$scope','$filter','$stateParams','adminGet','adminArr',
		function($scope,$filter,$stateParams,adminGet,adminArr){
			adminGet.data('appList',function(d){
				$scope.perItem=8;//分页,每页的个数
				$scope.curId=$stateParams.queryId || 1;
				//给所有数据标上id
				_.each(d,function(obj,idx){
					obj._id=idx;
				})
				$scope.listData=d;//总数
				$scope.showData=adminArr.range($scope.listData,($scope.curId-1)*$scope.perItem,($scope.curId-1)*$scope.perItem+$scope.perItem)// 展示的数据
				var len=$filter('int')($scope.listData.length/$scope.perItem);
				$scope.pagination=_.range(1,len+1);
			});
		}]);
	module.exports=ctrlModule;
});