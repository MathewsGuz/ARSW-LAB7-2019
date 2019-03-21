clienteRest=(function(){

	return {
		getCinemaByName:function(name,callback){
			$.getJSON( "/cinema/"+name, function( data ) {				
				callback(data);				
			});

		},

		getSeatsCinema:function(name,chk,callback){
			$.getJSON( "/cinema/"+name, function( data2 ) {				
				callback(data2,chk);				
			});
		}
	}


})();
