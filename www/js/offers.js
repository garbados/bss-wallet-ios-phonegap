//---- DOCUMENT READY
$(document).ready(function() {

	//---- GET offers.json into a ui-listview
	var jsonOffersList = $.getJSON('http://localhost:3000/offers.json', function(data){
		$.each(data, function(key, value){
			$('.ui-listview').append("<li data-theme='c' class='ui-li ui-li-static ui-btn-up-c ui-li-last'>" + value.name + ".... points: " + value.point_value + "</li>");
		});	
	});
	$('.ui-listview').listview('refresh');
	alert();
	//---- view details of offer
	$('.ui-li-static').click(function(){
		$(this).parent().slideDown();
	});

});