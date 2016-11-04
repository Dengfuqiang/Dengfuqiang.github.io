(function(){
	//模拟后台拿数据
	//生成对象数组
	var jsonArray=[];
	for(var i=1;i<105;i++){
		var imgSrc="img/111 ("+i+").jpg";
		var price=""+selectfrom(1,200)+"元";
		var titles="移动电源5000mAh";
		var jieshao="四天线设计，更安全更稳定";
		var pingjia=""+selectfrom(1,9)+"."+selectfrom(0,9)+"万人评价";
		var shuoming="(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...";
		var obj=new CreatObj(imgSrc,titles,jieshao,price,pingjia,shuoming);
		jsonArray.push(obj);
	}
	//构造函数方法，自定义对象
	function CreatObj(src,titles,jieshao,price,pingjia,shuoming){
		this.imageSrc=src;
		this.titles=titles;
		this.price=price;
		this.pingjia=pingjia;
		this.shuoming=shuoming;
		this.jieshao=jieshao;
	}
	function selectfrom (lowValue,highValue){
		var choice=highValue-lowValue+1;
		return Math.floor(Math.random()*choice+lowValue);
	}
	 
	$(function(){
		var thisvalue=0;
		//鼠标悬浮时，改变数据
		$(".mxdpTitleflag a").mouseenter(function(){
			$(this).siblings("a").removeClass("titleNavaddclass");
			$(this).addClass("titleNavaddclass");
			var aIndex=$(".mxdpTitleflag a").index(this);
			var znyjleft= $(this).parent().parent().siblings(".znyjLeft").children().children("li");	
			thisvalue=this.innerHTML;
			//遍历子节点，并改变数据
			znyjleft.each(function(i,dom){
				var dom=$(dom);
				if(i<8){
				var num=aIndex*8+i;
				dom.children().children().attr("src",jsonArray[num].imageSrc);
				dom.children("h2").children().html(jsonArray[num].titles);
				dom.children("p:nth-child(4)").text(jsonArray[num].pingjia);
				dom.children("p:nth-child(3)").text(jsonArray[num].price);
				dom.children(".shanLaKuang").children().children().text(jsonArray[num].jieshao);
				}else{
					dom.children("p").text(thisvalue);
				}
				
			});
		});
		
		var znyjLefts=$(".znyjLeft2");
		//页面数据初始化
		znyjLefts.each(function(p,doc){
			var doc=$(doc);
			var index=p*32;
			var znyjLeftli= $(this).children().children();
			//遍历子节点，改变数据
			znyjLeftli.each(function(i,dom){
				var dom=$(dom);
				var num=index+i;
				dom.children().children().attr("src",jsonArray[num].imageSrc);
				dom.children("h2").children().html(jsonArray[num].titles);
				dom.children("p:nth-child(4)").text(jsonArray[num].pingjia);
				dom.children("p:nth-child(3)").text(jsonArray[num].price);
				dom.children(".shanLaKuang").children().children().text(jsonArray[num].jieshao);
			});
		});
		//购物车鼠标悬浮特效
		$(".shoppingCar").hover(function(){
			$(".shoppingCar a").addClass("shoppingCaraddclass");
			$(".shopMenu").slideDown();
		},
		function(){
			$(".shoppingCar a").removeClass("shoppingCaraddclass");
			$(".shopMenu").slideUp();
		}
		);
		//点击搜索框特效
		$("#search").focus(function(){
			$(".headerSearch").addClass("bordercolor");
			$("#suearchBtn").addClass("bordercolor");
			$(".abiaoqian").toggle();
			$(".searchlist").toggle()
		});
		//右边商品列表特效
		$(".mlFistChild li").mouseenter(function(){
			
			$(".ulListContain").css("display","none");
			$(".ulListContain").eq($(".mlFistChild li").index(this)).css("display","block");
		});
	
		$(".menuList").mouseleave(function(){
			$(".ulListContain").css("display","none");
		});
		$("#search").blur(function(){
			$(".abiaoqian").toggle();
			$(".searchlist").toggle();
			$(".headerSearch").removeClass("bordercolor");
			$("#suearchBtn").removeClass("bordercolor");
			
		});
		//Tab切换，添加事件处理函数
		for(var i=1;i<5;i++){
			var innerelements=document.getElementById("lunboctInner"+i+"");
			var lbli =document.getElementById("lunBoBtUl"+i+"").getElementsByTagName("li");
			var lbcontain =document.getElementById("lunboct"+i+"");
			var preNext=document.getElementById("preNext"+i+"");
			lunboFc(lbcontain,lbli,innerelements,preNext);
		}
		//根据传入的，节点动态添加事件处理函数
		function lunboFc(outerElement,controlBt,innerelements,preNext){
			var index=0;
			var len=controlBt.length;
			var timer=0;
			var prenextFlag=true;
			//为下方button添加事件处理函数
			for(var i=0;i<len;i++){
				controlBt[i].index=i;
				controlBt[i].onclick=function(){
					index=this.index;
					tab();
				}
			}
			//切换
			function tab(){
				clearInterval(timer);
				for(var j=0;j<len;j++){
					controlBt[j].firstChild.className="";
				}
				controlBt[index].firstChild.className="active";
				var end=index*innerelements.clientWidth/len;
				var change=end-outerElement.scrollLeft;
				var step=0;
				var totalstep=20;
				timer=setInterval(function(){
					step++;
					if(step>=totalstep){
						clearInterval(timer);
						prenextFlag=true;
					}
				 	outerElement.scrollLeft+=change/totalstep;
				},16)
			}
			//前进按钮
			preNext.children[0].onclick=function(){
				if(prenextFlag){
					index--;
					if(index<0){
						index=0;
					}
					
				}
				tab();
				prenextFlag=false;
			};
			//后退按钮
			preNext.children[1].onclick=function(){
				if(prenextFlag){
					index++;
					if(index>3){
						index=3;
					}
					
				}
				tab();
				prenextFlag=false;
			};
		}
		//导航slideDown效果
		$(".headerli").hover(function(){
			$(".headerList").slideDown();
			$(".headerList ul").siblings().css("display","none");
			$(".headerList ul").eq($(".headerli").index(this)).toggle();
		}
		);
		$(".header").mouseleave(function(){
			$(".headerList").stop().slideUp();
		});
		$(".headerlislideup").mouseenter(function(){
			$(".headerList").stop().slideUp();
		});
		//主轮播效果
		(function(){
			var lunbocontain=document.getElementById("lunboContain");
			var lunbobtn=document.getElementById("lunbobtn").getElementsByTagName("a");
			var len=lunbobtn.length;
			var luboImage=document.getElementById("lunboContain").getElementsByTagName("img");
			var pre=document.getElementById("pre");
			var next= document.getElementById("next");
			var time=0;
			var index=0;
			var clickFlag=true;
			//绑定点击事件
			for(var i=0;i<len;i++){
				lunbobtn[i].index=i;
				lunbobtn[i].onclick=function(){
					luboImage[index].style.zIndex=-1;
					index=this.index;
					tab();
				}
			}
			//渐隐，兼容ie8及以下
			function tab(){
					for(var j=0;j<len;j++){
							lunbobtn[j].className="lunboBtns";
					}
					luboImage[index].style.zIndex=0;
					lunbobtn[index].className="lunboBtns lunboBtnaddclass";
					var start=getStyle(luboImage[index],"opacity");
					var end=1;
					var step=0;
					var maxT=20;
					var change=end-start;
					clearInterval(time);
					time=setInterval(function(){
						step++;
						if(step>=maxT){
							for(var j=0;j<len;j++){
								luboImage[j].style.opacity=0;
								luboImage[j].style.filter="alpha(opacity=0)";
							}
							clearInterval(time);
							clickFlag=true;
						}
						luboImage[index].style.opacity=step*change/maxT+start;
						luboImage[index].style.filter="alpha(opacity="+(step*change/maxT+start)*100+")"
					},30)
			}
			//下按钮
			next.onclick=autoGo;
			function autoGo(){
				if(clickFlag){
					luboImage[index].style.zIndex=-1;
					index++;
					if(index>len-1){
						index=0;
					}
					tab();
				}
				clickFlag=false;
			}
			//上按钮
			pre.onclick=function (){
				luboImage[index].style.zIndex=-1;
				index--;
				if(index<0){
					index=4;
				}
				tab();
			}
			//自动走	
			var autogo=setInterval(autoGo,4000);
			lunbocontain.onmouseover=function(){
				clearInterval(autogo);
			}
			lunbocontain.onmouseout=function(){
				autogo=setInterval(autoGo,4000);
			}
		})();
			//明星单品轮播效果
			(function(){
				var outer=document.getElementById("mxdpout");
				var inner=document.getElementById("mxdpinner");
				var nextandpre=document.getElementById("rightandleft").getElementsByTagName("a");
				var next=document.getElementById("nexts");
				var pre=document.getElementById("prevent");
				var rightandleft=document.getElementById("rightandleft");
				var len=nextandpre.length;
				var index=0;
				var time=0;
				var clickFlag=true;
				//后一页
				next.onclick=autoGoes;
				function autoGoes(){
					if(clickFlag){
						index++;
						if(index>=len){
							index=0;
						}
						tab();
					}
					clickFlag=false;
				};
				//事件处理函数
				function tab(){
					for(var j=0;j<len;j++){
							nextandpre[j].style.color="#b0b0b0";
					}
					nextandpre[index].style.color="#e0e0e0";
					var start=inner.offsetLeft;
					var end=-index*1240;
					var step=0;
					var maxT=30;
					var change=end-start;
					clearInterval(time);
					time=setInterval(function(){
						step++;
						if(step>=maxT){
							clearInterval(time);
							clickFlag=true;
						}
						inner.style.left=step*change/maxT+start+"px";
					},10)
				}
				//前一页
				pre.onclick=function(){
					if(clickFlag){
						index--;
						if(index<0){
							index=0;
						}
						tab();
					}
					clickFlag=false;
				}
				//自动走
				var autogoes=setInterval(autoGoes,5000);
				outer.onmouseover=stop;
				rightandleft.onmouseover=stop;
				outer.onmouseout=start;
				rightandleft.onmouseout=start;
				function stop(){
						clearInterval(autogoes);
				}
				function start(){
						autogoes=setInterval(autoGoes,3000);
				}
			})();
			//为你推荐轮播效果
			(function(){
				var outer=document.getElementById("mxdpout1");
				var inner=document.getElementById("mxdpinner1");
				var nextandpre=document.getElementById("rightandleft1").getElementsByTagName("a");
				var next=document.getElementById("nexts1");
				var pre=document.getElementById("prevent1");
				var rightandleft=document.getElementById("rightandleft1");
				var len=nextandpre.length;
				var index=0;
				var time2=0;
				var clickFlag=true;
				//后一页
				next.onclick=autoGoes2;
				function autoGoes2(){
					if(clickFlag){
						index++;
						if(index>=len){
							index=0;
						}
						tab();
					}
					clickFlag=false;
				};
				function tab(){
					for(var j=0;j<len;j++){
							nextandpre[j].style.color="#b0b0b0";
					}
					nextandpre[index].style.color="#e0e0e0";
					var start=inner.offsetLeft;
					var end=-index*1240;
					var step=0;
					var maxT=30;
					var change=end-start;
					clearInterval(time2);
					time2=setInterval(function(){
						step++;
						if(step>=maxT){
							clearInterval(time2);
							clickFlag=true;
						}
						inner.style.left=step*change/maxT+start+"px";
					},10);
				}
				//前一页
				pre.onclick=function(){
					if(clickFlag){
						index--;
						if(index<0){
							index=0;
						}
						tab();
					}
					clickFlag=false;
				}
				//自动走
				var autogoes2=setInterval(autoGoes2,5000);
				outer.onmouseover=stop;
				rightandleft.onmouseover=stop;
				outer.onmouseout=start;
				rightandleft.onmouseout=start;
				function stop(){
						clearInterval(autogoes2);
				}
				function start(){
						autogoes2=setInterval(autoGoes2,3000);
				}
			})();
			 function getStyle(element,style){
	            if(window.getComputedStyle){
	                return getComputedStyle(element,null)[style];
	            }else{
	                //兼容ie，6，7，8，（不支持伪类）
	                return element.currentStyle[style];
	            }
	        }
	});

})();
