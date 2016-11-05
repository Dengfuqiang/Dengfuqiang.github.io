	$(function(){
			//请求带数据的js文件
			var script = document.createElement('script');
            script.src = "js/json.js";
            document.body.appendChild(script);
            //滑动页面时，改变header透明度
		    var taolunchushi=$("#dajiataolun").offset().top;
		    var adTopChuShi=$("#ad_tab").offset().top
		    var contain=document.getElementById("contain");
		    var scrolltop=0;
			$(document).scroll(function(){
				//判断上滑还是下滑，改变评论模块的位置
				if(scrolltop-$(document).scrollTop()>0){
					$("#contain").css("bottom","2.053333rem");
				}else{
					$("#contain").css("bottom","-1.5rem");
				}
				scrolltop=$(document).scrollTop();
				//跟据下滑的程度，改变header透明度
				if(scrolltop<taolunchushi){
					$("header").css("background-color","rgba(0,93,174,"+scrolltop/taolunchushi+"");
					$("header").children("#toutiao").css("color","#4d4d4d").next().css("background-position","-0.946667rem 0px").next().css("background-position","0 0");
					
				}else{
					
					$("header").css("background-color","rgba(0,93,174,1)");
					$("header").children("#toutiao").css("color","white").next().css("background-position","-2.626667rem 0").next().css("background-position","-1.84rem 0");
				}
				var adTop=adTopChuShi-$(document).scrollTop();
				if(adTop<104){
					$("#ad_tab").addClass("ad_addclass");
				}else{
					$("#ad_tab").removeClass("ad_addclass");
				}
			})
			//评论模块的点击事件处理程序
		    $(document).on("click","#guandian_wenti",function(){
		    	$(this).toggleClass("guandian_wenti").siblings("#guandian").toggleClass("guandian").siblings("#wenti").toggleClass("wenti");
		    });
		    //评论模块收起判断
		    EventUtil.addHandler(document,"touchstart",start);
		    function start(event){
		        var event = EventUtil.getEvent(event);
		        var target= EventUtil.getTarget(event);
		        var guandianBottom=parseInt(window.getComputedStyle(contain.children[1],null).bottom);
		        if(target.id!="guandian_wenti"&&guandianBottom>0){
		        	event.preventDefault();
		        	$("#guandian").removeClass("guandian").siblings("#wenti").removeClass("wenti").siblings("#guandian_wenti").removeClass("guandian_wenti");
		        }
		    }
		});
		//jsonp回调函数
		function callback(data){
            	var dat=data;
            	var VM=new Vue({
				el:"#mayi_body",
					data:{
						user:dat,
						persons:dat.discover.person,
						activeFlag:true,
						discoverFlag:false
					},
					methods:{
						tab:function(num){
							if(num){
								this.activeFlag=false;
								this.discoverFlag=true;
							}else{
								this.activeFlag=true;
								this.discoverFlag=false;
							}
						}
					}
			});
            document.body.style.display="block";
         }