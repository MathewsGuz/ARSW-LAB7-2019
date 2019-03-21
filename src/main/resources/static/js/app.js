
var ControllerModule=(function(){


	CinemaByname =function(cine){
		var tabla= $('#Cine');
		var html;
		tabla.empty();
		if(cine!=null){			
			html =' <tr style="border: 1px solid black"> <th colspan="2">Cinema</th> </tr>	<tr style="border: 1px solid black">'
				html+='<th>Name</th>	<th>NumFunciones</th> </tr>'
					html+='<tr>'+"\n	<td>"+cine[0].name+"</td>"+"\n	<td>"+cine[0].functions.length+"</td>"+'\n</tr>';		    
		}		

		tabla.append(html);

		var tabla2=$('#funcion');
		html="";
		tabla2.empty();
		if(cine!=null){
			var funciones=cine[0].functions;				
			html='<tr style="border: 1px solid black"> <th colspan="4">Funciones</th></tr><tr><th>Name</th>	<th>genero</th>	<th>asientos</th><th>fechas</th> </tr>';
			tabla2.append(html);
			for(var i =0;i<funciones.length;i++){
				var asientos=funciones[i].seats.length*funciones[i].seats[0].length;
				html='<tr>';
				html+='<td><input type="checkbox" value='+funciones[i]+'>'+funciones[i].movie+' <span class="checkmark"></span> </input></td>';
				html+='<td>'+funciones[i].movie.genre + '</td>';
				html+='<td>'+asientos + '</td>';
				html+='<td>'+funciones[i].date + '</td>';
				html+='</tr>'
					tabla2.append(html);					
			}				
		}
		else{
			alert("cine no encontrado");
		}	    

	};	


	metodoRest=function(datos){
		datos2=datos;
		var tabla= $('#Cine');
		var html;
		html =' <tr style="border: 1px solid black"> <th colspan="2">Cinema</th> </tr>	<tr style="border: 1px solid black">'
		html+='<th>Name</th>	<th>NumFunciones</th> </tr>'
		tabla.empty();
		if(datos!=null){			
			html+='<tr>'+"\n	<td>"+datos.name+"</td>"+"\n	<td>"+datos.functions.length+"</td>"+'\n</tr>';		    
		}else{
			alert("cine no encontrado");
		}	
		tabla.append(html);



		var tabla2=$('#funcion');
		html='<tr style="border: 1px solid black"> <th colspan="4">Funciones</th></tr><tr><th>Name</th>	<th>genero</th>	<th>asientos</th><th>fechas</th> </tr>';
		tabla2.empty();
		tabla2.append(html);
		if(datos!=null){
			var funciones=datos.functions;				

			for(var i =0;i<funciones.length;i++){
				var asientos=funciones[i].seats.length*funciones[i].seats[1].length;
				html='<tr>';
				html+='<td><input type="checkbox" value='+String(funciones[i].movie.name)+'>'+funciones[i].movie.name+' <span class="checkmark"></span> </input></td>';
				html+='<td>'+funciones[i].movie.genre + '</td>';
				html+='<td>'+asientos + '</td>';
				html+='<td>'+funciones[i].date + '</td>';
				html+='</tr>'
					tabla2.append(html);										
			}				
		}	 
		 

	};


	dibasientos= function(datos,chk){		
		var tabla=$('#asientos');
		if(datos!=null){
			var funciones=datos.functions;
			var fun;
			tabla.empty();
			for(var i =0;i<funciones.length;i++){
				var html;
				if(funciones[i].movie.name==chk.value){
					fun=funciones[i];
					html='<thead><tr>';
					html='<th colspan="'+funciones[i].seats.length+'">ASIENTOS</th>';
					html+='</tr></thead>';
					console.log(html);
				}				
			}
			tabla.append(html);
			fun.seats[5][3]=false;
			for(var i =0;i<fun.seats.length;i++){
				html='<tr>';
				for(var j=0;j<fun.seats[i].length;j++){	
					if(fun.seats[i][j]==true){
						html+='<td><img src="silla.jpg" width="20" height="20" alt="titulo enlace" border="0"/></td>';
					}else{
						html+='<td><img src="silla2.jpg" width="20" height="20" alt="titulo enlace" border="0"/></td>';
					}
				}
				html+='</tr>';
				tabla.append(html);
				console.log(html);
			}
		}

	};


	return {		
		metodoNombre:function (){
			var cine= $('#cine').val();
			apimock.getCinemaByName(cine,CinemaByname);			
		},
		metodoCheck:function () {
			var cine= $('#cine').val();
			$(document).ready(function() {
				$('table [type="checkbox"]').each(function(i, chk) {
					if (chk.checked) {
						clienteRest.getSeatsCinema(cine,chk,dibasientos);
					}
				});

			});

		},
		metodoNombreREST:function (){
			var cine= $('#cine').val();
			clienteRest.getCinemaByName(cine,metodoRest);
		}	
	}
})();