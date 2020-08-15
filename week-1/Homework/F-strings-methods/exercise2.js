// Task-Log a message that includes the length of your name
const name = "Daniel";
var nameLength = name.length;
console.log("My name is Naresh and my name is " +nameLength, "characters long");

// Task-Trim function

function fun(){
    var name = '   Daniel'
    var st = name.trim();
    var nameLength = name.length;
    console.log("My name is ",+st, +nameLength);
}
fun(); 
//Task- My name is Daniel and my name is 6 characters long
function fun(name){
    var name = "Daniel";
    var st = name.trim();
    var nameLength = name.length;
    console.log("My name is " +st, "and my name is " +nameLength, "characters long");
}
fun();