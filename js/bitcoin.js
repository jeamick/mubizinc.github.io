/**
 * @author	Albin CAUDERLIER
 * @date	24/02/2017
 * 
 * Script jQuery appelant l'API de Blockchain.info et affichant les données.
 * 
 */

$(document).ready(function() {
	$.ajax({
		url : "https://blockchain.info/latestblock",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.height);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append("N/A");
			$('#bitcoin_network_hash').append("N/A");
		}
	});
	
	$.ajax({
		url : "https://blockchain.info/ticker",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_usd_price').append(data.USD[last]+" $");
		},

		error : function(xhr, status, err) {
			$('#bitcoin_usd_price').append("N/A");
		}
	});
	
	
});

