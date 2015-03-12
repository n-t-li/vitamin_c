$(document).ready(function(){

	$.fn.wait = function(time, type){
		time = time || 0;
		type = type || "fx";
		return this.queue(type, function(){
			var self = this;
			setTimeout(function(){
				$(self).dequeue();
			}, time);
		});
	};
	function runIt(){
	$('.header_txt .p_1').wait()
		.animate({"color": "#780000"},800)
		.wait()
		.animate({"color": "#ff0000"},800,runIt);
	}
	runIt();


});