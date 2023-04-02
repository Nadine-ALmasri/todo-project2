'use strict';
let person = prompt("Please enter your name");
let gender = prompt("Please enter your gender ( male /female)");
var age = prompt("Please enter your age");
if (age<=0){
    alert("age is less than or equal to zero! please re-enter your age ");
    var age = prompt("Please enter your age");
}


let con = confirm("Do you want to show the welcoming message ?")
if (con)
    switch(gender){
    case "female":
        alert(" Ms "+" " +person+" " +" welcome to our website!")
        break
        case"male":
        alert(" Mr " +" "+person +" "+" welcome to our website!")
        break
        default:
        alert(person +" "+"  welcome to our website!")

}