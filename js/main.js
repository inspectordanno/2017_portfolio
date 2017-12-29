
$(document).ready(function() {
	var height = $(window).height();

    $('#header').css('height', height);


    //Scrollspy plugin
    $('body').scrollspy({ target: '.navbar-spy'});


		//collapse mobile navbar
		$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
		});	

});
