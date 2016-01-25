$(document).ready(function() {
var images = true //global var keeping track of whether or not images are shown
var instr = 0 //global var keeping track of which instruction is the current one

	//if a checkbox is ticked, the sibling element of that checkbox (the text)
	//receives the .crossed-out class if it's not present, removes the class if it's there
	$('input[type="checkbox"]').click(function() {
	    if (this.checked) {
	        $(this).siblings().addClass('crossed-out');
	    } else {
	        $(this).siblings().removeClass('crossed-out');
	    }
	});

	//executed when the "Hide Images" button is clicked
	$(".hide-image").click(function(){
		//if the images are currently being show - the images are hidden, else they are shown
		//text on button changes accordingly
		if(images == true){
			$("img").hide("slow");
			images = false;
			$(this).text("Show Images");
		}
		else{
			$("img").show("slow");
			images = true;
			$(this).text("Hide Images");
		}
		
	});

	$(".scroll").click(function(){
		//if the images are currently being show - the images are hidden, else they are shown
		//text on button changes accordingly
		if($("#start").length != 0){
			//$("p").addClass("test");
			$('html, body').animate({scrollTop:($('#start').offset().top-100)}, 'slow');
			$("#start").addClass("current")
			$("#start").removeAttr('id');
			$(this).text("Next");
			instr = instr + 1;
		}
		else if(instr == 8){
			instr = 0;
			$(".instr").first().attr('id','start');
			$(".current").addClass("complete");
			$(".current").last().removeClass("current");
			$(this).text("Start Cooking");
		}
		else{
			$('html, body').animate({scrollTop:($(".current").last().offset().top-100)}, 'slow');
			$(".current").addClass("complete");
			$(".instr").eq(instr).addClass("current");
			$(".current").first().removeClass("current");
			instr = instr + 1;
			if (instr == 7){
				$(this).text("Finish");
			}
		}
		
	});

	

	/*// When #scroll is clicked
	jQuery('#scroll').click(function(){

		if($("#start").length != 0){
			$('html, body').animate({scrollTop:startTopPosition}, 'slow');
			$("#start").removeAttr('id');
			$("span").first().attr('id','instr-anchor');
			return false;
		}
		else{
			jQuery('html, body').animate({scrollTop:anchorTopPosition}, 'slow');

		}

		// Scroll down to 'catTopPosition'
		
		// Stop the link from acting like a normal anchor link
		
	});*/

});