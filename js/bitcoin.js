/**
 * @author	Albin CAUDERLIER
 * @date	24/02/2017
 * 
 * Script jQuery appelant l'API bitcoin.mubiz.com et affichant les données.
 * 
 * !!! Ne fonctionne pas sur les hébergements en https !!!
 * 
 */

var block_number;
var displayed_blocks_number = 10;

$(document).ready(function() {
	$.ajax({
		url : "http://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		//timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.blocks);
			$('#bitcoin_network_hash').append(data.difficulty);

			block_number = data.blocks;
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append("N/A");
			$('#bitcoin_network_hash').append("N/A");
		}
	});
});