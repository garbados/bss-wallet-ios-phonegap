$(document).ready(function() {

	//---- GET offers.json into a ui-listview
	$.getJSON('http://localhost:3000/offers.json', function(data){
		$.each(data, function(key, value){
			$('.ui-listview').append("<li class='ui-li ui-li-static ui-btn-up-c ui-li-last'>" + value.name + ".... points: " + value.point_value + "</li>");
		});	
	});
	$('.ui-listview').listview('refresh');

});