define(function(require,exports,module){
	// 指令模块
	require('angular');
	var dModule=angular.module('dM',[]);

	// 导航toggle directive切换导航点击样式
	dModule.directive('navToggle',function(){
		return {
			restrict:'A',
			link:function(scope,ele,attr){
				$(ele).delegate('li','click',function(){
					var oLi=$(this);
					scope.$apply(function(){
						scope.curIndex=oLi.index();
					});
				});
			}
		}
	});

	//侧边导航栏手风琴菜单
	dModule.directive('leftClick',function(){
		return {
			restrict:'A',
			link:function(scope,ele,attr){
				$(ele).bind('click',function(){
					var $span=$(this).find('.left-menu-title');
					if($span.hasClass('open')){
						$(".left-menu-title").removeClass('open');
						$('.sub-list').hide();
					}
					else{
						$(".left-menu-title").removeClass('open');
						$('.sub-list').hide();
						$span.addClass('open');
						$span.siblings('.sub-list').show();
					}
				});
			}
		}
	});
	module.exports=dModule;
});