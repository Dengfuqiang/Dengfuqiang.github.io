$(function(){
	$("li[class='liNext']").find(".a_addclass").click(function(){
		$(".studyInfinite").eq($(".a_addclass").index(this)).toggle("400");
		$(".headerCopy i").toggle();
		$(".headerCopy span:nth-child(1)").toggle();
		$(".headerCopy ul").toggle("300");

	});
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
	$(window).scroll(function(){ 
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop; 
		if( scrollt >200){ 
			$(".huiDingbu").fadeIn(400); 
		}else{      
			$(".huiDingbu").stop().fadeOut(400);
		}
		
	});
				
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
	(function(){
	var imgList =document.images;
    console.log(imgList);
    var num = 1;
    for(var i = 0;i<imgList.length;i++){
        var img = new Image();
        // img.src = imgList[i].getAttribute('data-src');
        img.onload = imgload;
        //img的src赋值要放到onload事件后面
        //因为低版本ie，放到前面可能不会出发onload事件
        img.src = imgList[i].getAttribute('data-src');
    }
    var bgimg=new Image();
    bgimg.src="img/xc-bg.jpg";
    function imgload(){
            // img.onload = null;
            num++;
            if(num==imgList.length){
                 alert("加载完了");
                // callback();
                for(var j = 0;j<imgList.length;j++){
                    imgList[j].src = imgList[j].getAttribute('data-src');
                }
				var div=document.getElementById("myblogCover");
				div.style.display="none";
            }
        }
	})();
    
});