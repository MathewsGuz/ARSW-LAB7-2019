
var ControllerModule =(function(){
	
	CinemaByname =function(cine){
		var tabla= $('table');
		var html;
		if(cine!=null){
			var funciones=cine[0].functions;
			console.log(funciones);
		}		
	    console.log(cine);
	    html = '<tr>';
	    html+=("<td>"+cine[0].name+"<td>");
	    html+=("<td>"+cine[0].functions.length+"<td>");
	    html+='</tr>';
	    tabla.append(html)
	};
	

	return {
		
		metodoNombre:function (){
			var movie= $('#movie').val();
			apimock.getCinemaByName(movie,CinemaByname)
			
		}
	}
})();