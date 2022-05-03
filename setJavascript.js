var p=1;
function call(obj)
{
  if(p<=19)
  {

  var input=document.getElementById(""+p+"a");
  input.value=obj.value;
  

  var pre=document.getElementById(""+p);
  var next=document.getElementById(""+(++p));
  
pre.style.display="none";
next.style.display="block";

  }
}
