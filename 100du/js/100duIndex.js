			$(function(){
				/*
				$(".bbsltbody ul li").hover(
					function(){
					$(".bbsltbody ul li:nth-child(1)").css({"height":"25px","background-color": "#f8f8f8","color":"black"});
					$(".bbsltbody ul li:nth-child(1) img").css("display","none").next().css("width","70%");
					$(".bbsltbody ul li:nth-child(1) .bbsspanclass").css("display","inline-block").next().css("display","none");
					$(this).css({"height":"70px","background-color": "#d90000","color":"white"}).children().css("display","inline-block").next().children().css("display","none").next().css("display","inline-block");
				}
					,function(){
						$(this).css({"height":"25px","background-color": "#f8f8f8","color":"black"});
						$(".bbsltbody ul li img").css("display","none").next().css("width","70%");
						$(".bbsltbody .bbsspanclass").css("display","inline-block").next().css("display","none");
					}
				);*/
				//search tab切换
				$(".title3span").click(function(){
					$(this).siblings(".title3span").css({"background-color":"white","color":"black"});
					$(this).css({"background-color":"#e21c01","color":"white"});
					
				});
				$(".soudian").click(function(){
					$("#titleinput").val("例如：荷棠鱼坊烤鱼 或 樱花日本料理");
				});
				$(".dizhi").click(function(){
					$("#titleinput").val("例如：深圳 上海 北京 广州");
				});
				$(".youhuijuan").click(function(){
					$("#titleinput").val("例如：淘宝优惠券 京东优惠卷 天猫优惠券");
				});
				$(".quanwen").click(function(){
					$("#titleinput").val("例如：钢铁是怎样练成的");
				});
				$(".shiping").click(function(){
					$("#titleinput").val("例如：女子开Jeep车硬上步兵战车被反怼");
				});
				//HOT SHOP 和EW SHOP的切换
				$(".bdlf2head ul li").click(function(){
					$(this).siblings().css("border-bottom","1px solid silver");
					$(this).css("border-bottom","white");
					$(".bdlf2body").eq($(this).index(".bdlf2head ul li")).css("display","block").siblings(".bdlf2body").css("display","none");
					
					
				});
				//subway 和map 切换
				$(".containleft .bdlf2head ul li").click(function(){
					$(this).siblings().css("border-bottom","1px solid silver");
					$(this).css("border-bottom","white");
					$(".bdlf2bds").eq($(this).index(".containleft .bdlf2head ul li")).css("display","block").siblings(".bdlf2bds").css("display","none");
				});
				//subway切换
				$("#2haoxian").click(function(){
					$(".bdlf2bdsimg").remove();
					var $str=$(
						"<div class='bdlf2bdsimg'>"
									+"<img src='img/2hao.jpg'/>"
						+"</div>"
					);
					$(this).parent().parent().prepend($str);
					$(this).css("border-width","4px").parent().siblings().children().css("border-width","2px");
				});
				$("#1haoxian").click(function(){
					$(".bdlf2bdsimg").remove();
					var $str=$(
						"<div class='bdlf2bdsimg'>"
									+"<img src='img/1hao.jpg'/>"
						+"</div>"
					);
					$(this).parent().parent().prepend($str);
					$(this).css("border-width","4px").parent().siblings().children().css("border-width","2px");
				});
				$("#3haoxian").click(function(){
					$(".bdlf2bdsimg").remove();
					var $str=$(
						"<div class='bdlf2bdsimg'>"
									+"<img src='img/3hao.jpg'/>"
						+"</div>"
					);
					$(this).parent().parent().prepend($str);
					$(this).css("border-width","4px").parent().siblings().children().css("border-width","2px");
				});
				$("#4haoxian").click(function(){
					$(".bdlf2bdsimg").remove();
					var $str=$(
						"<div class='bdlf2bdsimg'>"
									+"<img src='img/4hao.jpg'/>"
						+"</div>"
					);
					$(this).parent().parent().prepend($str);
					$(this).css("border-width","4px").parent().siblings().children().css("border-width","2px");
				});
				$("#5haoxian").click(function(){
					$(".bdlf2bdsimg").remove();
					var $str=$(
						"<div class='bdlf2bdsimg'>"
									+"<img src='img/5hao.jpg'/>"
						+"</div>"
					);
					$(this).parent().parent().prepend($str);
					$(this).css("border-width","4px").parent().siblings().children().css("border-width","2px");
				});
				$("#11haoxian").click(function(){
					$(".bdlf2bdsimg").remove();
					var $str=$(
						"<div class='bdlf2bdsimg'>"
									+"<img src='img/11hao.jpg'/>"
						+"</div>"
					);
					$(this).parent().parent().prepend($str);
					$(this).css("border-width","4px").parent().siblings().children().css("border-width","2px");
				});
				//抢券和知道分子切换
				$(".zdfzbdhd1:nth-of-type(1)").click(function(){
					$(this).css("border-bottom","2px solid white").siblings().css("border-bottom","1px solid white");
					$(".meishi").css("display","block").siblings(".wenti,.wande").css("display","none");
				});
				$(".zdfzbdhd1:nth-of-type(2)").click(function(){
					$(this).css("border-bottom","2px solid white").siblings().css("border-bottom","1px solid white");
					$(".wenti").css("display","block").siblings(".meishi,.wande").css("display","none");
				});
				$(".zdfzbdhd1:nth-of-type(3)").click(function(){
					$(this).css("border-bottom","2px solid white").siblings().css("border-bottom","1px solid white")
					$(".wande").css("display","block").siblings(".meishi,.wenti").css("display","none");
				});
				//搜索框得到焦点时
				$("#titleinput").focus(function(){
					var vale=$(this).val();
					if(vale=="例如：荷棠鱼坊烤鱼 或 樱花日本料理"){
						$(this).val("");
					}
					if(vale=="例如：深圳 上海 北京 广州"){
						$(this).val("");
					}
					if(vale=="例如：淘宝优惠券 京东优惠卷 天猫优惠券"){
						$(this).val("");
					}
					if(vale=="例如：钢铁是怎样练成的"){
						$(this).val("");
					}
					if(vale=="例如：女子开Jeep车硬上步兵战车被反怼"){
						$(this).val("");
					}
					
					
				});
				//失去焦点时
				$("#titleinput").blur(function(){
					var vale=$(this).val();
					if(vale=="")
					{
					$(this).val("例如：荷棠鱼坊烤鱼 或 樱花日本料理");	
					}
					if(vale=="")
					{
					$(this).val("例如：深圳 上海 北京 广州");	
					}
					if(vale=="")
					{
					$(this).val("例如：淘宝优惠券 京东优惠卷 天猫优惠券");	
					}
					if(vale=="")
					{
					$(this).val("例如：钢铁是怎样练成的");	
					}
					if(vale=="")
					{
					$(this).val("例如：女子开Jeep车硬上步兵战车被反怼");	
					}
					
				});
				//内嵌视频的play button
				$("#bofang").click(function(){
					var vd=document.getElementById("video1");
					if (vd.paused) {
						vd.play();
					} else {
						vd.pause();
					}
				});
		});