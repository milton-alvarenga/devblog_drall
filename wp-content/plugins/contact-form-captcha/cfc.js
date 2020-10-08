var bool=true;
function spam1(){
cap=document.getElementById('capimg');
rand=(Math.random()*10000000).toString();
rand=rand.substr(0,6);
if(bool){
capurl=cap.src;
bool=false;
}
cap.src=capurl+"/?q="+rand;


}


function validateform(thisform)
{
var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
var email = document.getElementById('cEmail').value;
  var fields = '';
  var errorcount = 0;
  if(document.getElementById('cName').value == "")
  {
    errorcount++;
    if(errorcount > 1)
        fields = fields + " and Name";
    else
        fields = fields + "Name";
  }

  if(document.getElementById('cEmail').value == "" || email.search(emailRegEx)== -1)
  {
    errorcount++;
    if(errorcount > 1)
        fields = fields + " and Email";
    else
        fields = fields + "Email";
  }
  if(document.getElementById('spam').value != rand)
  {
    errorcount++;
    if(errorcount > 1)
        fields = fields + " and Security";
    else
        fields = fields + "Security";
  }
  
  if(document.getElementById('cMsg').value == "")
  {
    errorcount++;
    if(errorcount > 1)
        fields = fields + " and Message";
    else
        fields = fields + "Message";
  }

  if(errorcount > 0)
  {
    document.getElementById('errormsg').innerHTML = '<span class="contactermsg">Invalid Fields: '+fields+'</span>';
    return false;
  }

  return true;
}
