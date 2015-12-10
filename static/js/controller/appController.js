define(function(require,exports,module){
	//app运营控制器
	var appController=angular.module('appCtrlModule',['sM']);/*当需要配置服务的时候,需要引入服务模块*/

	appController.config(['adminValidatorProvider',function(adminValidatorProvider){
		var regAddr=[//地址正则
			{
				name:'ps_username',//中文、字母、数字 _
				exp:/^[\u4E00-\u9FA5\uF900-\uFA2D_\w]+$/,
				msg_err:'必须为中文、字母、数字和下划线'
			}
		];
		//添加配置项
		adminValidatorProvider.reg.addr=regAddr;
		// console.log(adminValidatorProvider);
	}]);

	//APP运营
	appController.controller('appCtrl',['$scope','adminGet',function($scope,adminGet){
		adminGet.data('app',function(d){
			$scope.leftData=d;
		});
	}]);
	//APP列表模块控制器(测试)
	appController.controller('appListCtrl',['$scope','$filter','$stateParams','adminGet','adminArr','adminValidator',
		function($scope,$filter,$stateParams,adminGet,adminArr,adminValidator){

			//列表生成
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

				//编辑/删除
				$scope.editModal=function(modalId,_id){
					$scope.editData=angular.copy( $scope.listData[_id] );
					// 表单验证
					$scope.isNameValid=adminValidator.valid($scope.editData.name,'str');
					$scope.isAddrValid=adminValidator.valid($scope.editData.addr,'addr');

					$(modalId).modal('show');
				}
				//ajax请求
				$scope.ajaxEdit=function(){

					// 表单验证
					$scope.isNameValid=adminValidator.valid($scope.editData.name,'str');
					$scope.isAddrValid=adminValidator.valid($scope.editData.addr,'addr');

					if($scope.isNameValid.rst && $scope.isAddrValid.rst){
						var oprateInfo={
							oprate:'edit',
							_token:'sdasda123asd1as3d2'
						};
						var postJSON=angular.extend(oprateInfo,$scope.editData);
						console.log(postJSON);//ajax发送请求
					}
				}

				$scope.deleteModal=function(modalId, _id){
					$scope.deleteData=angular.copy( $scope.listData[_id] );
					$(modalId).modal();
				}
				$scope.ajaxDelete=function(){
					var oprateInfo={
						oprate:'edit',
						_token:'sdasda123asd1as3d2'
					};
					var postJSON=angular.extend(oprateInfo,$scope.deleteData);
					console.log(postJSON);
				}
			});

		}]);

	module.exports=appController;
});