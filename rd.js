


function   dg()  {
	var ac="https://www.baidu.com/baidu?tn=monline_3_dg&ie=utf-8&wd="  ;
	var  zz="<html>"
	var zzx="</html>"
	var  cv ="<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">"
  var  cs=document.getElementById("dd").value
var ee=("https://i.loli.net/2019/02/16/5c67992bc4822.jpg")
  function   aco(){
 // setTimeout(kal,3000)
  document.write(zz+cv+"<body  background="+ee+">"+"<script>setTimeout(kal,3000); function kal(){ window.location.assign(\""+ac+cs+"\")} </script>"+"</body>"+zzx)   }
function  kal(){
window.location.assign(ac+cs)}
if(cs !="")
{aco()
}
 else{ 
 alert ("请输入内容")}
}

