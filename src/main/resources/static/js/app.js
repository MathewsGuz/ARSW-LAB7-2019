
var ControllerModule =(function(){
	
	CinemaByname =function(name){	       
	       console.log(name); 
	       
	};
	

	return {
		
		metodoNombre:function (){
			var movie= $('#movie').val();
			apimock.getCinemaByName(movie,CinemaByname)
			
		}
	}
})();