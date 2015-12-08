var seajsTimestamp=new Date().getTime();
seajs.config({

	// 别名配置
	alias:{
		'jquery':'jquery/jquery.min',
		'bootstrap':'bootstrap/dist/js/bootstrap.min',
		'underscore':'underscore/underscore-min',
		'angular':'angular/angular.min',
		'ui-router':'angular-ui-router/release/angular-ui-router.min'
	},

	//路径配置
	paths:{
		'plugin':'../jquery/plugins'
	},

	//预加载
	preload:['bootstrap'],

	//配置基本映射,在所有加载的文件后面自动添加后缀
	map: [
		[ /^(.*\.(?:css|js|tpl))(.*)$/i, '$1?v='+seajsTimestamp ]
	],

	debug:true,

	//文本编码
	charset:'utf-8'

});