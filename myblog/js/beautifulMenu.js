$(function(){
	//轮播图，鼠标悬浮时，停止
	$("#inner img").hover(
		function(){
			clearTimeout(setIn);
			$(this).addClass("luboImageclass");
		},
		function(){
			autoscroll();
			$(this).removeClass("luboImageclass");
		}
	);
	//菜单特效
	$(" #beautifulMenu li").hover(
		function(){
			$(this).children().next().css("visibility","visible");
			$(this).children().next().children(":nth-child(2n+1)").addClass("menuChildaddclass");
			$(this).children().next().children(":nth-child(2n)").addClass("menuChildaddclass1");
		},function(){
			$(".drop-menu").css("visibility","hidden");
			$(".menuChild:nth-child(2n+1)").removeClass("menuChildaddclass");
			$(".menuChild:nth-child(2n)").removeClass("menuChildaddclass1");
		}
	);
	$(".menuChild").hover(function(){
				$(this).children().next().addClass("menuChildaddclass2");
			},function(){
				$(this).children().next().removeClass("menuChildaddclass2");
			}
	);
	//滚动条滚动大于200显示回到顶部按钮
	$(window).scroll(function(){ 
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop; 
		if( scrollt >200){ 
			$(".huiDingbu").fadeIn(400); 
		}else{      
			$(".huiDingbu").stop().fadeOut(400);
		}
		
	});
	//回到顶部按钮
	$(".huiDingbu").click(function(){ 
		
		$("html,body").animate({scrollTop:"0px"},200);
		});
});
