let sub=document.getElementById("submit");
sub.addEventListener("click", submit, false);
let mail=document.getElementById("mail");
let pass=document.getElementById("pass");

function submit(){
  if(confirm("Would you show the Informations ?")){
    alert(mail.getAttribute("value");
    alert(pass.getAttribute("value");
  }
}
