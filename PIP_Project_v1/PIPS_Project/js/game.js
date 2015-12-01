
$(document).ready(function(){
	$(".point").click(function(){
		var rotation = $(this).data('rotation')*1;
		$(this).find('.pipe').removeClass('rotation-'+rotation);
		rotation += 1;
		if (rotation > 4) rotation = 1;
		$(this).data('rotation', rotation);
		$(this).find('.pipe').addClass('rotation-'+rotation);
	});
})
