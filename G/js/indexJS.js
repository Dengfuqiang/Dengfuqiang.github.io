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
	for(var i=1;i<29;i++){
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
        var str= (imgCont/36*100).toFixed(0)+"%";
        var width=6.71875*imgCont/36+"rem";
        $("#red_tiao span").html(str);
        $("#red_tiao").css("width",width);
        if(imgCont==36){
        	$("#jingdutiao").fadeOut("400");
        	$("#big_logo").addClass("animated bounceInRight");
        	$("#gaoerfu_GTI").addClass("animated flash");
        	$("#big_logo").show().next().show();
        }
    }
	//上下滑动判断
	 var beginPoint;
	 var index=0;
    document.addEventListener('touchstart',function(e){
        beginPoint = e.touches[0];
    });
    document.addEventListener('touchmove',function(e){
        e.preventDefault();
        e.stopPropagation();
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
            	if(index<=1){
            		index++;
		    		resets();
		    	}
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
    	choujiangFlag=true;
    	//中什么奖判断
    	var zhongjiang=3;
    	$("#zhuan_pan").addClass("addanimation"+zhongjiang+"");
    	//11S后删除样式
    	setTimeout(function(){
    		choujiangFlag=false;
    		$("#zhuan_pan").removeClass("addanimation"+zhongjiang+"");
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