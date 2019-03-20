clienteRest=(function(){

	return {
		getCinemaByName:function(name,callback){
			$.getJSON( "/cinema/"+name, function( data ) {				
				console.log(data);	
				
				callback(
						data
				);			
				alert( "Load was performed." );
			});

		}
	}
	

})();
