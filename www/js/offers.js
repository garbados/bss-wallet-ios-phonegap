$(document).ready(function() {

	$.getJSON('http://localhost:3000/offers.json', function(data){
		$.each(data, function(key, value){
			$('.ui-listview').append("<li class='ui-li ui-li-static ui-btn-up-c ui-li-last'>" + value.name + "</li>");
		});	
	});
	
	// $('.ui-listview').append("<li>This is a Test</li>")

	$('.ui-listview').listview('refresh');

});