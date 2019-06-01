jQuery(document).ready(function($) {
	$('.mobile').click(function(event) {
        /* Act on the event */
        $('.fa-bars').toggleClass('fa-times-circle');
		$('body').toggleClass('menu-show');
    });
});
