$(function(){
	//二级菜单鼠标悬浮时增加样式
	$("li[class='liNext']").find(".a_addclass").click(function(){
		$(".studyInfinite").eq($(".a_addclass").index(this)).toggle("400");
		$(".headerCopy i").toggle();
		$(".headerCopy span:nth-child(1)").toggle();
		$(".headerCopy ul").toggle("300");

	});
	//移动端下拉菜单
	$(".headerCopy i").click(function(){
		$(this).toggle();
		$(".studyInfinite").css("display","none");
		$(".headerCopy span:nth-child(1)").toggle();
		$(".headerCopy ul").toggle("300");
	});
	var setIn=0;
	var outer=document.getElementById("outer");
	var inner=document.getElementById("inner");
	inner.innerHTML+=inner.innerHTML;
	//图片轮播
	function autoscroll(){
		outer.scrollLeft++;
		var scrollLeft=Math.ceil(outer.scrollLeft);
		//alert(scrollLeft);//Chrome浏览器自加不是加1?????????????
		if(scrollLeft==1000){
			outer.scrollLeft=0;
		}
		setIn=setTimeout(autoscroll,20);
	}
	autoscroll();
	//图片悬浮增加样式
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
	//首页菜单
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
			},function(){
				$(this).children().next().removeClass("menuChildaddclass2");
			}
	);
	//scrollTop>200显示回到顶部按钮
	$(window).scroll(function(){ 
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop; 
		if( scrollt >200){ 
			$(".huiDingbu").fadeIn(400); 
		}else{      
			$(".huiDingbu").stop().fadeOut(400);
		}
		
	});
	//回到顶部			
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
	//图片预加载
	(function(){
		var imgList =document.images;
	    var num = 0;
	    var geyan=document.getElementById("geYanId").children;
	    var menu=document.getElementById("menu");
	    var wenZhangTuiJianId=document.getElementById("wenZhangTuiJianId");
	    var bodyRightId=document.getElementById("bodyRightId");
	    //图片预加载
	    for(var i = 0;i<imgList.length;i++){
	        var img = new Image();
	        img.onload = imgload;
	        img.src = imgList[i].getAttribute('data-src');
	    }
	    //背景图自预加载
	    var bgimg=new Image();
	    bgimg.src="img/xc-bg.jpg";
	    bgimg.onload=imgload;
	    var bgimg2=new Image();
	    bgimg2.src="img/1H03633L-3.jpg";
	    var bgimg3=new Image();
	    bgimg3.src="img/bodys.png";
	    bgimg3.onload=imgload;
	    //图片load事件处理函数
	    function imgload(){
	            // img.onload = null;
	            num++;
	            if(num==imgList.length+1){
	                // callback();
	                for(var j = 0;j<imgList.length;j++){
	                    imgList[j].src = imgList[j].getAttribute('data-src');
	                }
					var div=document.getElementById("myblogCover");
					div.style.display="none";
					for(var k=0;k<3;k++){
						geyan[k].style.display="block";
					}
					//触发进入动画
					menu.style.display="block";
					wenZhangTuiJianId.style.display="block";
					bodyRightId.style.display="block";
	            }
	        }
		})();
    
});