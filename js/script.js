function myFunction() {
    var x, rest;
    x = document.getElementById("firstNumber").value;
    rest = x * 50; 
    if (isNaN(x)) {
        rest= "Input not valid";
    }
    document.getElementById("result").innerHTML = rest;           
}