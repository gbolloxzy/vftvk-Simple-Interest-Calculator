function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var amount = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
function updateRate()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rate").innerText=rate;
}
document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
function checkdata(){
    var principal = document.getElementById("principal");
    if(principal.value == ""){
          alert("Please enter a positive number");
          principal.focus();
          return false;
    }
   alert("OK")
    return true;
}