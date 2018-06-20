$(document).ready(()=>{
		// $(".modal-body").css("font-size":"2rem")
		$(".click").click(function(){
			event.preventDefault();
			$(".click").animate({
				width:"500px",
				height:"200px"
			},1000);
			$(".modal").show().animate({opacity: '1'},3000);
		// 	// $('.modal').show();
		// 	// $(".modal-title").text("Hello world!");
		});
		$(".close").click(function(event){
			event.preventDefault();
			$(".click").animate({
				width:"50px",
				height:"56px"
			},1000);
			$(".modal").show().animate({opacity: '0'},3000);
		// 	// $('.modal').show();
		// 	// $(".modal-title").text("Hello world!");
		});
		$(".bcolour1").click(function(){
			event.preventDefault();		
			$(".click").animate({
				width:"50px",
				height:"56px"
			},1000);
			$(".modal").show().animate({opacity: '0'},3000);
			});
	})