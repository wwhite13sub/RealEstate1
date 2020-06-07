function myFunction() {
    var x = document.getElementById("firstNumber").value;
    x = x * 50; 
    if (isNaN(x)) {
        return "";
    }
    document.getElementById("result").innerHTML = x;           
}