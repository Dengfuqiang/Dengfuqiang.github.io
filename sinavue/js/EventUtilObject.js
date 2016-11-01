var EventUtil={//IE8及以前是实现了DOM模型但用的是自已方式实现， IE事件有自已独有属性
				addHandler:function(elements,type,handler){
					if(elements.addEventListener){
						elements.addEventListener(type,handler,false);
					}else if(elements.attachEvent){
						elements.attachEvent("on"+type,handler);
					}else{
						elements["on"+type]=handler;
					}
				},
				getEvent: function(event){
					return event?event:window.event;//事件兼容IE8及以前
				},
				getTarget:function(event){
					return event.target||event.srcElement;//得到事件的实际目标
				},
				preventDefault:function(event){
						if(event.preventDefault){
							event.preventDefault();//阻止默认事件
						}else{
							event.returnValue=false; //IE事件有自已独有属性returnValue=false
						//相当于DOM 事件中的event.preventDefault();
						}
				},
				removeHandler:function(elements,type,handler){
					if(elements.removeEventListener){
						elements.removeEventListener(type,handler,false);
					}else if(elements.detachEvent){
						elements.detachEvent("on"+type,handler);
					}else{
						elements["on"+type]=null;
					}
				},
				stopPropagation:function(){
					if (event.stopPropagation) {
						event.stopPropagation();//阻止进一步冒泡和捕获
					} else{
						event.cancelBubble=true;//IE8及以前是实现的DOM模型但用的是自已的一套， IE事件有自已独有属性cancelBubble=true，
						//相当于DOM 事件中的stopPropagation()
					}
				},
				getRelatedTarget:function(event){//mouseover mouseout 得到相关元素
					if(event.relatedTarget){
						return event.relatedTarget;
					}else if(event.toElement){
						return event.toElement;
					}else if(event.fromElement){
						return event.fromElement;
					}else{
						return null;
					}
				},
				getButton:function(event){
					if(document.implementation.hasFeature("MouseEvents","2.0")){//得到鼠标按钮左:0 中:1 右:2的值
						return event.button;
					}else{
						switch(event.button){
							case 0:
							case 1:
							case 3:
							case 5:
							case 7:
								return 0;
							case 2:
							case 6:
								return 2;
							case 4:
								return 1;
						}
					}
				},
				getWheelDelta:function(event){//滚轮的值 
					if(event.wheelDelta){
						return event.wheelDelta;
					}else {
						return -event.detail*40;
					}
				},
				getCharcode:function(event){//keypress事件触发时的输入的字符charCode值
					if(typeof event.charCode=="number"){
						return event.charCode;
					}else{
						return event.keyCode;
					}
				},
				getClipboardText:function(event){//得到剪贴版的值
					var clipboardDate=(event.clipboardData||window.clipboardData);
					return clipboardDate.getData("text");
				},
				setClipboardText:function(event,value){
					if(event.clipboardData){
						return event.clipboardData.setData("text/plain",value);
					}else if(window.clipboardData){
						return window.clipboardData.setData("text",value);
					}
				}
			};