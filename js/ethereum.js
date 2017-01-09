


/**
 * TEST
 */

$(document).ready(function(){
	$.ajax({
		url: 		"http://ethereum-test.smoothie.tech/blocknumber",
		dataType:	"json",
		contentType: "application/json; charset=utf-8",
		type:  		"GET",
		//timeout:	"5000",
		async:		false,
		
		success: function(data){
			$('#block_number').append(data.blockNumber);
		},
		error: function(xhr, status, err){
			$('#block_number').append("N/A "+ err);
		}
	});
	
	$.ajax({
		url: 		"http://ethereum-test.smoothie.tech/syncing",
		dataType:	"json",
		contentType: "application/json; charset=utf-8",
		type:  		"GET",
		//timeout:	"5000",
		async:		true,
		
		success: function(data){
			$('#syncing').append(data);
		},
		error: function(xhr, status, err){
			$('#syncing').append("N/A");
		}
	});
	
	$.ajax({
		url: 		"http://ethereum-test.smoothie.tech/accounts",
		dataType:	"json",
		contentType: "application/json; charset=utf-8",
		type:  		"GET",
		//timeout:	"5000",
		async:		true,
		
		success: function(data){
			$('#accounts').append(data);
		},
		error: function(xhr, status, err){
			$('#accounts').append("N/A");
		}
	});

	$.ajax({
		url: 		"http://ethereum-test.smoothie.tech/defaultaccount",
		dataType:	"json",
		contentType: "application/json; charset=utf-8",
		type:  		"GET",
		//timeout:	"5000",
		async:		true,
		
		success: function(data){
			$('#default_account').append(data.defaultAccount);
		},
		error: function(xhr, status, err){
			$('#default_account').append("N/A");
		}
	});
	
	$.ajax({
		url: 		"http://ethereum-test.smoothie.tech/mining",
		dataType:	"json",
		contentType: "application/json; charset=utf-8",
		type:  		"GET",
		//timeout:	"5000",
		async:		true,
		
		success: function(data){
			$('#mining').append(data);
		},
		error: function(xhr, status, err){
			$('#mining').append("N/A");
		}
	});
	
	$.ajax({
		url: 		"http://ethereum-test.smoothie.tech/peercount",
		dataType:	"json",
		contentType: "application/json; charset=utf-8",
		type:  		"GET",
		//timeout:	"5000",
		async:		true,
		
		success: function(data){
			$('#peer_count').append(data.peerCount);
		},
		error: function(xhr, status, err){
			$('#peer_count').append("N/A");
		}
	});
	
});