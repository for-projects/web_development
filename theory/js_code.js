var isTrue = confirm("Are you ready?");
if (isTrue){
    var data = prompt("What is your name?")
    alert("Привет " + data)
}
else{
    alert("Tell me when you ready")
}