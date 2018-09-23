console.log('window is loaded')

	$('button').on('click', function(){
	console.log('button is working');
	var stock = $('input').val();

		$.ajax({
			url: 'https://api.iextrading.com/1.0/stock/'+stock+'/batch?types=quote',
			type: 'Get',
			dataType: 'json',
			success: function(data) {
				console.log(data.name);	
			},
			error: function(err) {
				console.log(err);
			}
		})
})