	$(function(){
		$("#newsList").click(function(){
			$.ajax({
				type: 'get',
				dataType: 'json',
				url:'ajax/ajax商业模式json数据.html',
				beforeSend:function(){
					$(".news_left").html("<img src='img/img1.gif' width='100' height='100'/>");
				},success:function(abc){
					$(".news_left").html("");
					$.each(abc, function(i) {
						$(".newstop").append("<h4>"+abc[i].tag_name+"</h4>");
					});
				},error:function(event,request,settings){
					alert(settings);
				}
			})
		})
		$("#newsList2").click(function(){
			$.ajax({
				type: 'get',
				dataType: 'json',
				url:'ajax/ajax商业模式json数据.html',
				beforeSend:function(){
					$(".news_left").html("<img src='img/img1.gif' width='100' height='100'/>");
				},success:function(abc){
					$(".news_left").html("");
					$.each(abc, function(i) {
						$(".newstop").append("<h4>"+abc[i].tag_name+"</h4>");
					});
				},error:function(){
					
				}
			})
		})
		//location='index.html';
	})
