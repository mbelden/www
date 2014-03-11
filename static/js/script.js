$(document).ready(function() {
	$("div.block").fadeIn();
	$("div.block").mouseenter(function() {
    	$(this).css("opacity", "1.0");
  	});
    $("div.block").mouseleave(function() {
    	$(this).css("opacity", ".25");
  	});
});