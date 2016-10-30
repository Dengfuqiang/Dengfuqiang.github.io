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
	//回到顶部按钮，延时特效
	$(".huiDingbu").click(function(){ 
		
		$("html,body").animate({scrollTop:"0px"},200);
	});
	$(".headerCopy span:nth-child(1)").click(function(){
		$(".headerCopy ul").toggle("300");
	});
	//菜单特效
	$(".liChildMenu").click(function(){
		$(this).next().siblings(".liNext").slideUp("300");
		$(this).next().toggle("300");
		$(this).siblings(".liChildMenu").removeClass("liAddClass");
		$(this).addClass("liAddClass");
	});
	//内嵌菜单特效
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
	//内嵌简单菜单特效
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
		//放大镜效果实现
		var contain=document.getElementById("conTain");
		var obj=document.getElementById("obj");
		var leftimg=document.getElementById("leftimg");
		var drag=document.getElementById("drag");
		var rightshow=document.getElementById("rightShow");
		var rightimg=document.getElementById("rightimg");
		//鼠标在图片上移动时，内嵌透明方块及右边大图显示
		obj.onmousemove=function(event){
			var e=event||window.event;
			drag.style.display='block';
			rightshow.style.display='block';
			var lefts=e.clientX-$("#obj").offset().left-drag.offsetWidth/2;
			var tops=e.clientY-obj.getBoundingClientRect().top-drag.offsetHeight/2;
			var leftss=obj.offsetLeft;
			//做临界判断
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
			//右边大图等比例移动
			drag.style.left=lefts+'px';
			drag.style.top=tops+'px';
			var num=rightimg.offsetWidth / leftimg.offsetWidth;
			
			rightshow.scrollLeft=drag.offsetLeft * num;
			rightshow.scrollTop=drag.offsetTop * num;
		}
		//图片轮播
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
		//微博发布效果
		var head=getClassNames("conTaines","div");
		var fubu=document.getElementById("faBubt");
		var shuoshuo=document.getElementById("shuosuo");
		fubu.onclick=function(){
			//输入信息不为空时，发布
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
	//拖拽效果
	var dRapes=document.getElementById("dRapes");
	var wRapes=document.getElementById("wRapes");
		//鼠标点击时触发
		dRapes.onmousedown=function(event){
			var event=event||window.event;
			var tmpX=event.clientX-dRapes.offsetLeft;
			var tmpY=event.clientY-dRapes.offsetTop;
			if(event.preventDefault){
				event.preventDefault()
			}else{
				event.returnValue=false;
			}
			//移动时，计算并改变方块位置
			wRapes.onmousemove=function(event){
				var event=event||window.event;
				var endX=event.clientX-tmpX;
				var endY=event.clientY-tmpY;
				var moseX=wRapes.clientWidth-dRapes.offsetWidth;
				var moseY=wRapes.clientHeight-dRapes.offsetHeight;
				//临界判断
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
		//取消事件处理程序
		wRapes.onmouseup=function(){
			wRapes.onmousemove=null;
		}
		//碰壁反弹
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
		//移动和临界条件判断
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
		//倒计时效果
		var spanArray=document.getElementById("xiaoGuotu").getElementsByTagName("span");
		var iArray=document.getElementById("youhuidates");
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
					iArray.innerHTML=0;
					spanArray[0].innerHTML=hours-youhuitime;
					spanArray[2].innerHTML=minutes;
					spanArray[4].innerHTML=sconds;
				}
				//如果时前在优惠小时之后
				else{
					iArray.innerHTML=0;
					spanArray[0].innerHTML=hours;
					spanArray[2].innerHTML=minutes;
					spanArray[4].innerHTML=sconds;
				}
				
			}
			//如果当前date是优惠的天之前时
			else if(dates<youhuidata){

				con.innerHTML="距离打拆优惠还有："
				iArray.innerHTML=youhuidata-dates;
				spanArray[0].innerHTML=hours;
				spanArray[2].innerHTML=minutes;
				spanArray[4].innerHTML=sconds;
			}
			//如果当前date是优惠的天之后时
			else{
				con.innerHTML="打折优惠已过期";
				iArray.innerHTML=0	;
			}
			
			
		}
		setInterval(times,1000);
		//旋转木马
		var xuanZhuanContain=document.getElementsByClassName("jsXuanZhuan");
		var containDiv=xuanZhuanContain[0].getElementsByTagName("div");
		var xuanzhuanbt1=document.getElementById("xuanzhuanbt1");
		var xuanzhuanbt2=document.getElementById("xuanzhuanbt2");
		var clickX=0;
		var clickY=0;
		var endX=0;
		var endY=0;
		var ints=0;
		var endXadd=0;
		var endXadd1=0
		var endYadd=0;
		var endYadd1=0;
		var cont=0;
		document.onmousedown=function(event){
			clickX= event.clientX;
			clickY=event.clientY;
			document.onmousemove=null;
			document.onmousemove=function(event){
				endXadd+=( event.clientX-clickX)/200;
				xuanZhuanContain[0].style.webkitTransform="translateZ(-2000px) rotateY("+endXadd+"deg)";
				endXadd1=endXadd;
			}
			
		}
		document.onmouseup=function(event){
			document.onmousemove=null;
		}
		var xuanzhuanCont=null;
		function xuanzhuan(){
			endXadd+=0.1;
			xuanZhuanContain[0].style.webkitTransform="translateZ(-2000px) rotateY("+endXadd+"deg)";
			xuanzhuanCont=setTimeout(xuanzhuan,1);
		}

				xuanzhuanbt2.onclick=function(){
				clearInterval(xuanzhuanCont);
			}
			xuanzhuanbt1.onclick=function(){
				xuanzhuanCont=setTimeout(xuanzhuan,1);
			}

				
});
//随即数
function selectfrom (lowValue,highValue){
				var choice=highValue-lowValue+1;
				return Math.floor(Math.random()*choice+lowValue);
			}
//getElementByClassName兼容处理
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
//指定类名的查找
function hasClass(tagStr,classStr){  
     var arr=tagStr.className.split(/\s+/ );  //这个正则表达式是因为class可以有多个,判断是否包含  
     for (var i=0;i<arr.length;i++){  
            if (arr[i]==classStr){  
                  return true ;  
            }  
     }  
     return false ;  
}  
