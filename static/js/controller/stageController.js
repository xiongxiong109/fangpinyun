define(function(require,exports,module){
	var stageController=angular.module('stageCtrlModule',[]);

	//平台运营
	stageController.controller('stageCtrl',['$scope','adminGet',function($scope,adminGet){
		adminGet.data('stage',function(d){
			$scope.leftData=d;
		});
	}]);
	
});