/**
 * 
 */
$(function () {
	
	$('.order-btn').click(function (e) {
		e.preventDefault();
		var elDetails = $(this).closest('.product-details');
		elDetails.css('visibility', 'hidden');
		elDetails.next().slideDown();
	});
	
	$('.order-form [data-as-action=close]').click(function (e) {
		e.preventDefault();
		$(this).closest('form').fadeOut('fast', function () {
			$(this).prev().css('visibility', 'visible');
		});
		
	});
	
});