
function error(a)
{
    if(a=='')
    {
        document.getElementById("error").style.opacity ="1";
        document.getElementById("number").style.borderColor = "red";
    }else
    {
        document.getElementById("error").style.opacity ="0";
        document.getElementById("number").style.border = "none";
        
    }
}

function calculator()
{
var totalBill = document.getElementById("bill").value;
var selectedTip = document.querySelector('input[name="radio"]:checked').value;

var personNumber = document.getElementById("number").value;
var totalTipamount = (selectedTip/100)*totalBill;
var personAmount = totalTipamount/personNumber;
error(personNumber);
var total = (totalBill/personNumber)+ personAmount;

if(personNumber)
{
document.getElementById("tiperPerson").innerHTML ="$"+ Number(personAmount).toFixed(2);
document.getElementById("perPerson").innerHTML ="$"+ Number(total).toFixed(2);
}
}

function myReset()
{
    document.getElementById("bill").value = '';
    document.querySelector('input[name="radio"]:checked').value = '';
    document.getElementById("number").value = '';    
    document.getElementById("tiperPerson").innerHTML ="$0.00";
    document.getElementById("perPerson").innerHTML ="$0.00";
}


