console.log('window is loaded')

	$('button').on('click', function(){
	console.log('button is working');
	var stock = $('input').val();
		$.ajax({
			url: 'https://api.iextrading.com/1.0/stock/'+stock+'/batch?types=quote',
			type: 'Get',
			dataType: 'json',
			success: function(data) {
				console.log(data);
				console.log(data.quote.symbol);
				console.log(data.quote.close);
				var symbol = data.quote.symbol;
				var close = data.quote.close
				document.getElementById("message").innerHTML = symbol + " closed at " + close;
			},
			error: function(err) {
				console.log(err);
			}
		})
		// $.ajax({
		// 	url: 'https://api.iextrading.com/1.0/stock/'+symbol+'/price'
		// 	type: 'Get',
		// 	dataType: 'json',
		// 	success: function(data){
		// 		console.log(data)
		// 	},
		// 	error: function () {
		// 		console.log(err);
		// 	}
		// })

	})





	