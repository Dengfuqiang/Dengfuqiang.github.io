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
						$(this).children().next().css("width","360px");
					},function(){
						$(this).children().next().removeClass("menuChildaddclass2");
						$(this).children().next().css("width","0px");
					}
			);
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
	$("#menues ul li").hover(
		function(){
			$(this).children().next().children().hover(function(){
					$(this).addClass("hightLight");
				}
				,function(){
					$(this).removeClass();
				}
			);
			$(this).children().next().addClass("subdisplay");
			
		}
	
		,function(){
			$(this).children().next().removeClass("subdisplay");
		}
	);
	$(".yuanDaima p").click(function(){
		$(this).next().toggle();
	});
	var contain=document.getElementById("conTain");
		var obj=document.getElementById("obj");
		var leftimg=document.getElementById("leftimg");
		var drag=document.getElementById("drag");
		var rightshow=document.getElementById("rightShow");
		var rightimg=document.getElementById("rightimg");
		obj.onmousemove=function(event){
			var e=event||window.event;
			drag.style.display='block';
			rightshow.style.display='block';
			var lefts=e.clientX-$("#obj").offset().left-drag.offsetWidth/2;
			var tops=e.clientY-obj.getBoundingClientRect().top-drag.offsetHeight/2;
			var leftss=obj.offsetLeft;
			if(lefts<=0)
			{
				lefts=0;
			}else if(lefts>=obj.clientWidth-drag.offsetWidth){
				lefts=obj.clientWidth-drag.offsetWidth;
			}
			if(tops<=0)
			{
				tops=0;
			}else if(tops>=obj.clientHeight-drag.offsetHeight){
				tops=obj.clientHeight-drag.offsetHeight;
			}
			drag.style.left=lefts+'px';
			drag.style.top=tops+'px';
			var num=rightimg.offsetWidth / leftimg.offsetWidth;
			
			rightshow.scrollLeft=drag.offsetLeft * num;
			rightshow.scrollTop=drag.offsetTop * num;
		}
		var outeres=document.getElementById("outeres");
		var inneres=document.getElementById("inneres");
		inneres.innerHTML+=inneres.innerHTML;
		function autoscroll(){
			outeres.scrollLeft+=10;
			var scrollLeft=Math.ceil(outeres.scrollLeft);//Chrome浏览器自加不是加10?????????????
			if(scrollLeft==6000){
				outeres.scrollLeft=0;
			}
			if((scrollLeft%1200)==0){
				setTimeout(autoscroll,1000)
			}
			else{
				setTimeout(autoscroll,1)
			}
		}
		autoscroll();
		$(".toptitlediv").find(".toptitlediv-head1").click(function(){
			$(this).css("border-bottom","2px solid white").siblings().css("border-bottom","2px solid silver");
			$(".bodys-div").hide().eq($(".toptitlediv-head1").index(this)).show();
			
		});
		var head=getClassNames("conTaines","div");
				var fubu=document.getElementById("faBubt");
				var shuoshuo=document.getElementById("shuosuo");
				fubu.onclick=function(){
					if(shuosuo.value!=""){
						var xinxi=document.createTextNode(shuosuo.value);
						var fabuxinxi=document.createElement("div");
						fabuxinxi.className="fabuxinxi";
						var textAndimg=document.createElement("div");
						var img=document.createElement("img");
						var textspan=document.createElement("span");
						textspan.appendChild(xinxi);
						textAndimg.className="textAndimg";
						img.src="img/01.jpg";
						textAndimg.appendChild(img);
						textAndimg.appendChild(textspan);
						var span=document.createElement("span");
						var del=document.createTextNode("删除");
						span.className="delete";
						span.appendChild(del);
						fabuxinxi.appendChild(textAndimg);
						fabuxinxi.appendChild(span);
						head[0].appendChild(fabuxinxi);
						span.onclick=function(){
							head[0].removeChild(fabuxinxi);
						}
					}
					
				}
		var dRapes=document.getElementById("dRapes");
	var wRapes=document.getElementById("wRapes");
		dRapes.onmousedown=function(event){
			var event=event||window.event;
			var tmpX=event.clientX-dRapes.offsetLeft;
			var tmpY=event.clientY-dRapes.offsetTop;
			if(event.preventDefault){
				event.preventDefault()
			}else{
				event.returnValue=false;
			}
			document.onmousemove=function(event){
				var event=event||window.event;
				var endX=event.clientX-tmpX;
				var endY=event.clientY-tmpY;
				var moseX=wRapes.clientWidth-dRapes.offsetWidth;
				var moseY=wRapes.clientHeight-dRapes.offsetHeight;
				if(endX<=0){
					endX=0;
				}
				else if(endX>=moseX){
					endX=moseX;
				}
				if(endY<=0){
					endY=0;
				}
				else if(endY>=moseY){
					endY=moseY;
				}
				dRapes.style.left=endX+'px';
				dRapes.style.top=endY+'px';
				
			}
		}
		document.onmouseup=function(){
			document.onmousemove=null;
		}
		var main=document.getElementById("main");
				var ball=document.getElementById("ball");
				var posx=350;
				var posy=250;
				var moveX=true;
				var moveY=true;
				function chushihua(){
					ball.style.left=posx+'px';
					ball.style.top=posy+'px';
				}
				chushihua();
				function mov(){
					if(moveX){
						if(posx>0){
							posx--;
							ball.style.left=posx+'px';
						}
						else{
							moveX=false
						}
					}
					else{
						if(posx<main.clientWidth-ball.offsetWidth){
							posx++;
							ball.style.left=posx+'px';
						}else{
							moveX=true;
						}
					}
					if(moveY){
						if(posy>0){
							posy--;
							ball.style.top=posy+'px';
						}
						else{
							moveY=false
						}
					}
					else{
						if(posy<main.clientHeight-ball.offsetHeight){
							posy++;
							ball.style.top=posy+'px';
						}else{
							moveY=true;
						}
					}
				}
				setInterval(mov,1)
				var spanArray=document.getElementById("xiaoGuotu").getElementsByTagName("span");
				var iArray=document.getElementsByTagName("i");
				var con=document.getElementById("con");
				var time=new Date();
				var hour=time.getHours();
				var minute=time.getMinutes();
				var scond=time.getSeconds();
				var dates=time.getDate();
				var youhuitime=6;
				var youhuidata=23;
				var deshour=23;
				var desminutes=59;
				var dessconds=59;
				var hours=deshour-hour;
				var minutes=desminutes-minute;
				var sconds=dessconds-dates;
				function times(){
					
					sconds--;
					if(sconds==-1)
					{
						sconds=59;
						minutes--;
					}
					if(minutes==-1)
					{
						minutes=59;
						hours--;
					}
					//如果当前date是优惠的当天时
					if(dates==youhuidata){
						//如果时前在优惠小时之前
						if(hours>=youhuitime){
							con.innerHTML="距离打拆优惠还有："
							iArray[0].innerHTML=0;
							spanArray[0].innerHTML=hours-youhuitime;
							spanArray[2].innerHTML=minutes;
							spanArray[4].innerHTML=sconds;
						}
						//如果时前在优惠小时之后
						else{
							iArray[0].innerHTML=0;
							spanArray[0].innerHTML=hours;
							spanArray[2].innerHTML=minutes;
							spanArray[4].innerHTML=sconds;
						}
						
					}
					//如果当前date是优惠的天之前时
					else if(dates<youhuidata){
						con.innerHTML="距离打拆优惠还有："
						iArray[0].innerHTML=youhuidata-dates;
						spanArray[0].innerHTML=hours;
						spanArray[2].innerHTML=minutes;
						spanArray[4].innerHTML=sconds;
					}
					//如果当前date是优惠的天之后时
					else{
						con.innerHTML="打折优惠已过期";
						iArray[0].innerHTML=0	;
					}
					
					
				}
				setInterval(times,1000);
				
});
function selectfrom (lowValue,highValue){
				var choice=highValue-lowValue+1;
				return Math.floor(Math.random()*choice+lowValue);
			}
function getClassNames(classStr,tagName){  
      if (document.getElementsByClassName) {  
            return document.getElementsByClassName(classStr)  
      }else {  
            var nodes = document.getElementsByTagName(tagName),ret = [];           
            for(i = 0; i < nodes.length; i++) {  
         if(hasClass(nodes[i],classStr)){  
                ret.push(nodes[i])  
         }  
      }  
      return ret;  
       }  
}  
function hasClass(tagStr,classStr){  
     var arr=tagStr.className.split(/\s+/ );  //这个正则表达式是因为class可以有多个,判断是否包含  
     for (var i=0;i<arr.length;i++){  
            if (arr[i]==classStr){  
                  return true ;  
            }  
     }  
     return false ;  
}  
