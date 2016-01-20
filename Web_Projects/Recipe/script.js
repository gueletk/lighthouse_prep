$(document).ready(function() {
var images = true

	$('input[type="checkbox"]').click(function() {
	    if (this.checked) {
	        //alert('Checked');
	        $(this).siblings().addClass('crossed-out');
	    } else {
	        //alert('Unchecked');
	        $(this).siblings().removeClass('crossed-out');
	    }
	});

	$(".hide-image").click(function(){
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
});