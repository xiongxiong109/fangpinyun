define(function(require,exports,module){
	// 服务模块
	require('underscore');
	var serviceModule=angular.module('sM',[]);

	//监听窗口变化
	serviceModule.service('adminWindowCheck',function(){

		function getResize(){
			$("#content").height( $(window).height()-$(".bar").height()-$('.navbar-header').height()-10 );
			$("#J_mainPanel").height( $("#content").height() );
		}
		return {
			watchResize:function(){
				getResize();
				var lazyResize=_.debounce(getResize,200);
				$(window).on('resize',lazyResize);
			}
		}
	});

	//http获取json数据(adminGet)
	serviceModule.service('adminGet',['$http',function($http){
			var baseUri="../data/";
			return {
				data:function(dataName,cb){
					$http.get(baseUri+dataName+'.json')
					.success(function(d){
						cb && cb(d);
					});
				}
			}
	}]);

	//获取数组分页片段
	serviceModule.service('adminArr',function(){
		return {
			range:function(arr,start,end){
				end=end>arr.length ? arr.length : end;
				var pageArr=[];
				_.each(_.range(start, end),function(idx){
					pageArr.push(arr[idx]);
				});
				return pageArr;
			}
		}
	});

	//字符串正则验证
	//使用provider使得验证内容可配置
	serviceModule.provider('adminValidator',function(){
		var regStr=[//正则表达式匹配数组
			{
				name:'notempty',//非空
				exp:/^\S+$/,
				msg_err:'不能为空'
			},
			{
				name:'ps_username',//中文、字母、数字 _
				exp:/^[\u4E00-\u9FA5\uF900-\uFA2D_\w]+$/,
				msg_err:'必须为中文、字母、数字和下划线'
			}
		];

		//用某一个reg数组的所有验证项去验证某一个字段,并返回一个验证的字段k/v表
		function validatorRst(str,reg_key){
			reg=this.reg[reg_key] || this.reg['str'];
			var regArr=[];
			_.each(reg,function(obj,idx){
				regArr.push({
					'name':obj.name,
					'rst':obj.exp.test(str),
					'msg_err':obj.msg_err
				});
			});
			/*
			遍历结果数组,当遇到false的时候返回{rst:false,msg:msg_err}
			当全部pass时,返回{rst:true}
			*/
			var falseObj=_.find(regArr,{rst:false});//找到false项
			if(!falseObj){//没有false证明验证成功
				return {
					rst:true
				}
			}
			else{
				return {
					rst:false,
					msg:falseObj.msg_err
				}
			}
		}

		var ser=this;
		//暴露出去的接口,通过this.方法返回的值都是暴露到外部的
		this.$get=function(){
			return {//这里采用了闭包的方式,保护了内部变量
				reg:ser.reg,
				valid:validatorRst
			}
		}
		this.reg={'str':regStr};
		
	});

	module.exports=serviceModule;
});