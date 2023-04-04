'use strict';
let person = prompt("Please enter your name");
if( person=="")

   prompt("Please enter your name");
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

let books = prompt("Do you love reading books in your free time ? yes/no")


var sport = prompt("Do you like doing exercises in your free time? yes/no")

var meet = prompt("Do you like meeting friends in your free time ? yes/no")

 
   let arr=[]
 function answers (){

arr.push(books)
arr.push(sport)
arr.push(meet)

 }
answers()

 console.log (arr)

 function correctAnswers (){
    for ( let i=0 ; i<=arr.length-1 ;i++){
        if (arr[i]==''){
            arr[i]="invalid"
        }
    }
 }
 correctAnswers()
 console.log(arr)
 function answersTraverse(){
    for ( let n=0 ; n<=arr.length-1 ; n++)
    console.log (arr[n])
 }
 answersTraverse()