$(function(){
	//移动端菜单的toggle效果
	$("li[class='liNext']").find(".a_addclass").click(function(){
		$(".studyInfinite").eq($(".a_addclass").index(this)).toggle("400");
		$(".headerCopy i").toggle();
		$(".headerCopy span:nth-child(1)").toggle();
		$(".headerCopy ul").toggle("300");

	});
	//移动端子菜单toggle效果
	$(".headerCopy i").click(function(){
		$(this).toggle();
		$(".studyInfinite").css("display","none");
		$(".headerCopy span:nth-child(1)").toggle();
		$(".headerCopy ul").toggle("300");
	});
	//回到顶部按钮
	$(".huiDingbu").click(function(){ 
		$("html,body").animate({scrollTop:"0px"},200);
	});
	$(".headerCopy span:nth-child(1)").click(function(){
		$(".headerCopy ul").toggle("300");
	});
	$(".liChildMenu").click(function(){
		$(this).next().siblings(".liNext").slideUp("300");
		$(this).next().toggle("300");
		$(this).siblings(".liChildMenu").removeClass("liAddClass");
		$(this).addClass("liAddClass");
	});
	//鼠标悬浮停止滚动
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
	$("#menu li").hover(
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
				$(this).children().next().css("width","360px");
			},function(){
				$(this).children().next().removeClass("menuChildaddclass2");
				$(this).children().next().css("width","0px");
			}
	);
	//滚动条scrolTop>200显示回到顶部按钮
	$(window).scroll(function(){ 
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop; 
		if( scrollt >200){ 
			$(".huiDingbu").fadeIn(400);
			$(".header").slideUp(400);
		}else{      
			$(".huiDingbu").stop().fadeOut(400);
			$(".header").slideDown(400);
		}
		
	});
	//判断scrolTop是否大于200
	var scrolltes = document.documentElement.scrollTop + document.body.scrollTop; 
		if(scrolltes>200){
			$(".header").slideUp(400);
		}
		$(".headerXiaola").hover(function(){
			$(".header").slideDown(400);
		});
				
	$(".huiDingbu").click(function(){ 
		
		$("html,body").animate({scrollTop:"0px"},200);
	});
	$(".yuanDaima p").click(function(){
		$(this).next().toggle();
	});
});
