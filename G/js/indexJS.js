$(function(){
	$("#car_audio").click(function(){
		
		if(this.paused){
			this.play();
			launchFullScreen(this);
			$(this).removeClass("car_addclsss");
		}else{
			this.pause();
			exitFullscreen(this);
			$(this).addClass("car_addclsss");
		}
		
});
	
	//图片预加载
	var imgCont=0;
	for(var i=1;i<28;i++){
		var img=new Image();
		img.onload=imgload;
		img.src="img/big_button"+i+".png";
	}
	for(var i=1;i<9;i++){
		var img=new Image();
		img.onload=imgload;
		img.src="img/bg_picture"+i+".jpg";
	}
	function imgload(){
        // img.onload = null;
        imgCont++;
        var str= (imgCont/35*100).toFixed(0)+"%";
        var width=6.71875*imgCont/35+"rem";
        $("#red_tiao span").html(str);
        $("#red_tiao").css("width",width);
        if(imgCont==35){
        	$("#jingdutiao").fadeOut("400");
        	$("#big_logo").addClass("animated bounceInRight");
        	$("#gaoerfu_GTI").addClass("animated bounceInRight");
        	$("#big_logo").show().next().show();
        }
    }
	//上下滑动判断
	 var beginPoint;
	 var index=0;
    document.addEventListener('touchstart',function(e){
        beginPoint = e.touches[0];
    });
    document.addEventListener('touchend',function(e){
        var endPoint = e.changedTouches[0];
        //水平方向
        var disX = endPoint.clientX-beginPoint.clientX;
        //竖直方向
        var disY = endPoint.clientY-beginPoint.clientY;
        //差值大于50才触发
        if(Math.abs(disY)>50){
            if(disY>0){
                index--;
                if(index<0){
		        	index=0;
		        }
                resets();
                
            }else{
            	index++;
            	if(index>2){
		    		index=2;
		    	}
            	resets();
            }
        }
    });
    //重构页面函数
    function resets(){
        if(index==0){
        	$("body").css("background-image","url(img/bg_picture1.jpg)");
        }else if(index==5||index==6){
        	$("body").css("background-image","url(img/bg_picture5.jpg)");
        }
        else{
        	$("body").css("background-image","url(img/bg_picture2.jpg)");
        }
        
        $("li").eq(index).show().siblings().hide();
    }
    //页面的一些按钮
    $("#first_little_btn").click(function(){
    	$("body").css("background-image","url(img/bg_picture3.jpg)");
    	$("#first_inner").show().siblings().hide();
    });
    $("#go_back").click(function(){
    	resets();
    });
    $("#first_btn").click(function(){
    	index=3;
    	resets();
    });
    $("#second_btn").click(function(){
    	index=4;
    	resets();
    });
    $("#third_btn").click(function(){
    	index=5;
    	resets();
    });
    $("#dinggou").click(function(){
    	index=6;
    	resets();
    });
    var choujiangFlag=false;
    //点击开如抽奖
    $("#start_zhuan").click(function(){
    	if(choujiangFlag){
    		return;
    	};
    	console.log(1)
    	choujiangFlag=true;
    	//中什么奖判断
    	var zhongjiang=2;
    	//反回转动度数
    	var deg=iszhongjiang(zhongjiang);
    	var sheet = document.styleSheets[1];
    	sheet.insertRule("@keyframes changeSize{0%   {transform:rotateZ(0);}100% {transform:rotateZ("+deg+"deg);}}",sheet.rules.length);
    	$("#zhuan_pan").addClass("addanimation");
    	//11S后删除样式
    	setTimeout(function(){
    		var sheet = document.styleSheets[1];
    		sheet.deleteRule(sheet.rules.length-1);
    		choujiangFlag=false;
    		if(zhongjiang==0){
    			$("#weizhongjiang").show().click(function(){
    			$(this).hide();
    		});
    		}else{
    			$("#zhongjiang").show();
    			if(zhongjiang==1){
    				$("#zhongjiang").css("background-image","url(img/bg_picture6.jpg)");
    			}else if(zhongjiang==2){
    				$("#zhongjiang").css("background-image","url(img/bg_picture7.jpg)");
    			}else{
    				$("#zhongjiang").css("background-image","url(img/bg_picture8.jpg)");
    			}
    		}
    		
    	},11000);
  		
    })
    //没中奖弹窗
    $("#weizhongjiang span").click(function(event){
    	event.stopPropagation();
    	$("#mengcheng").show().click(function(){
    		$(this).hide();
    	});
    });
    //中奖弹窗
    $("input[type=submit]").click(function(event){
    	event.preventDefault();
    	$("#mengcheng").show().click(function(){
    		$(this).hide();
    		$("#zhongjiang").hide();
    	});
    });
})
function selectfrom (lowValue,highValue){
	var choice=highValue-lowValue+1;
	return Math.floor(Math.random()*choice+lowValue);
}

function iszhongjiang (zhongjiang){
	//服务器反回中奖值，然后判断0,1,2,3
    	var suijiNum=selectfrom(1,6);
    	var deg=0;
    	switch (zhongjiang){
    		case 0:switch (suijiNum){
	    		case 1:deg=0;break;
	    		case 2:deg=90;break;
	    		case 3:deg=120;break;
	    		case 4:deg=180;break;
	    		case 5 :deg=210;break;
	    		default :deg=270; break;
    		};break;
    		case 1:deg=300;break;
    		case 2:if(suijiNum<4){
    			deg=60;
    		}else{
    			deg=150;
    		};break;
    		default :if(suijiNum<3){
    			deg=30;
    		}else if(suijiNum<5){
    			deg=240;
    		}else{
    			deg=330;
    		};break;
    	}
    	deg=20*360+deg;
    	return deg;
}
function launchFullScreen(element) {
	if(element.requestFullscreen) {
		element.requestFullscreen();
	} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if(element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if(element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}
function exitFullscreen() {
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.mozExitFullScreen) {
		document.mozExitFullScreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
}