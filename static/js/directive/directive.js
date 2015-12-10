define(function(require,exports,module){
	// 指令
	var dModule=angular.module('dM',[]);

	//左侧手风琴指令
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
				$(ele).delegate('.sub-list','click',function(e){
					if(e.stopPropagation){
						e.stopPropagation();
					}
					else{
						e.cancelBubble=true;
					}
				});
			}
		}
	});
	
	module.exports=dModule;
});