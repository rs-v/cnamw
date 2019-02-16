


function   dg()  {
	var ac="https://www.baidu.com/baidu?tn=monline_3_dg&ie=utf-8&wd="  ;
	var  zz="<html>"
	var zzx="</html>"
  var  cs=document.getElementById("dd").value
var ee=("https://i.loli.net/2019/02/16/5c67992bc4822.jpg")
  function   aco(){
 // setTimeout(kal,3000)
  document.write(zz+"<body  background="+ee+">"+"<script>setTimeout(kal,3000); function kal(){ window.location.assign(\""+ac+cs+"\")} </script>"+"</body>"+zzx)   }
function  kal(){
window.location.assign(ac+cs)}
if(cs !="")
{aco()
}
 else{ 
 alert ("请输入内容")}
}
