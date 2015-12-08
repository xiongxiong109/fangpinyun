define(function(require,exports,module){
	//加载angular
	require.async('angular',function(){
		require.async('ui-router',function(){

			var ctrlModule=require('./controller');//控制器
			var direcModule=require('./directive');//指令
			var serviceModule=require('./service');//服务
			var routerModule=require('./router');
			//主要模块
			var adminModule=angular.module('admin',[
				'rM',//路由模块
				'cM',//控制器模块
				'dM',//指令模块
				'sM'//服务模块
			]);
			angular.bootstrap(document,['admin']);
		});
	});

});