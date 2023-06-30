function calculate(){
    var a=parseInt(document.getElementById('costroom').value); 
    var b=parseInt(document.getElementById('costaminities').value);
    var c=parseInt(document.getElementById('Advance').value);
    var d=parseInt(document.getElementById('bookfour').value);
    var e=parseInt(document.getElementById('bookthree').value);
  

    if (b<100) {
        alert("please enter a valid amount");
    }
    else{
             if (d>2) {
                var obtain=a*e+((d-2)*1000);
                document.getElementById("ftotal").innerHTML=obtain;
                }
            else{
                var obtain=a*e;
                document.getElementById("ftotal").innerHTML=obtain;
            }
        
        var aminities=e*b;
        document.getElementById("faminities").innerHTML=aminities;

        var balance=obtain+aminities-c;
        document.getElementById("balance").innerHTML=balance;

        var totalf=obtain+aminities;
        document.getElementById("totalf").innerHTML=totalf;

    
    }
    return false;


}