let sub=document.getElementById("submit");
sub.addEventListener("click", submit, false);

function submit(){
  let mail=document.getElementById("mail");
  let pass=document.getElementById("pass");
  if(confirm("Would you show the Informations ?")){
    alert(mail.value);
    alert(pass.value);
  }
}
