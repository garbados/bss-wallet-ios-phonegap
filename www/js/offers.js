$(document).ready(function() {

	$.getJSON('http://localhost:3000/offers.json', function(data){
		$.each(data, function(key, value){
			$('ul').append("<li>" + value.name + "</li>");
		});	
	});
});