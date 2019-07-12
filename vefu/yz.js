
function pk(keyt)//获取keyt参数
{        var  keyt
       var dz= window.location.search.substring(1);
       var vars = dz.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == keyt){return pair[1];}
       }
	  
       return(false);
	   
}
function  mai(){
	     var  mi=decodeURI(pk(keyt))
		 var   time=getTime
		 alert(time)
		 


	
	
	
	
}