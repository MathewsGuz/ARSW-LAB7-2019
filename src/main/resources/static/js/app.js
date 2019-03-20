
var app =(function(){
	
	CinemaByname =function(cine){
		var tabla= $('#Cine');
		var html;
		tabla.empty();
		if(cine!=null){			
			var funciones=cine[0].functions;
			html =' <tr style="border: 1px solid black"> <th colspan="2">Cinema</th> </tr>	<tr style="border: 1px solid black">'
			html+='<th>Name</th>	<th>NumFunciones</th> </tr>'
			html+='<tr>'+"\n	<td>"+cine[0].name+"</td>"+"\n	<td>"+cine[0].functions.length+"</td>"+'\n</tr>';		    
		}		
	  
		 tabla.append(html);
	    
	    
	};
	

	return {
		
		metodoNombre:function (){
			var movie= $('#movie').val();
			apimock.getCinemaByName(movie,CinemaByname)
			
		}
	}
})();