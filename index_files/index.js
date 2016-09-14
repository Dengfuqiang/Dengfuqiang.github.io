function loadlbimg(a){
	$.ajax({
		type:"get",
		url:"js/index.json",
		async:true,
		dataType:"json",
		success:function(data){
			if(a==1){
				da=data.lbimg;
				id=$("#lbimg");
			}
			if(a==2){
				da=data.lbimg1;
				id=$("#lbimg1");
			}
			if(a==3){
				da=data.lbimg2;
				id=$("#lbimg2");
			}
			if(a==4){
				da=data.lbimg3;
				id=$("#lbimg3");
			}
			if(a==5){
				da=data.lbimg4;
				id=$("#lbimg4");
			}
			$.each(da, function(i,item) {
				
				if(i==0){
					id.append(
						"<div class='item active'>"+
							"<img src="+item.url+">"+
							
						"</div>"
					)
				}else{
					id.append(
						"<div class='item'>"+
							"<img src="+item.url+">"+
							
						"</div>"
					)
				}
			})
		},
		error:function(){
			alert("请求失败");
		}
	});
}
