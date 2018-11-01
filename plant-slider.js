$(document).ready(function() {
	$('.plant-slider .slide').each(function() {
		$(this).find('img:first').fadeIn();
	});
	(function(){

	var ps 	= $('.plant-slider'),
			i 	= 0;
	ps.on('click', function(e){
			e.preventDefault();
			var s = $(this).find('img')
	    i = (i + 1) % s.length;
	    s.hide().eq(i).show();
	});

	})();
});