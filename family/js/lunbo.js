function lunboFc(outerElement,innerElements,controlBt,preNext){
		var index=0;
		var len=controlBt.length;
		var timer=0;
		var prenextFlag=true;
		for(var i=0;i<len;i++){
			controlBt[i].index=i;
			controlBt[i].onclick=function(){
				index=this.index;
				tab();
			}
		}
		function tab(){
			clearInterval(timer);
			for(var j=0;j<len;j++){
				controlBt[j].className="";
			}
			if(index==len){
				controlBt[0].className="lunboBtns lunboBtnaddclass";
			}else{
				controlBt[index].className="lunboBtns lunboBtnaddclass";
			}
			var start=innerElements.offsetLeft;
			var end=-index*innerElements.clientWidth/(len+1);
			var change=end-start;
			var step=0;
			var totalstep=20;
			timer=setInterval(function(){
				step++;
				if(step>=totalstep){
					clearInterval(timer);
					prenextFlag=true;
				}
			 	innerElements.style.left=change/totalstep*step+start+"px";
			},16)
		}
		function next(){
				if(prenextFlag){
					index++;
					if(index>len){
						index=1;
						innerElements.style.left=0;
					}
					
				}
				tab();
				prenextFlag=false;
			};
		if(preNext){
			preNext.children[0].onclick=function(){
				if(prenextFlag){
					index--;
					if(index<0){
						index=len-1;
						innerElements.style.left = -len*510+"px";
					}
					
				}
				tab();
				prenextFlag=false;
			};
			preNext.children[1].onclick=next;
		}
		var outoGo=setInterval(next,3000);
		outerElement.onmouseenter=function(){
			clearInterval(outoGo);
		}
		outerElement.onmouseleave=function(){
			outoGo=setInterval(next,3000);
		}
	}