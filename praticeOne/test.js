var fName="Greg"; //string
var book="Greg's Dog";
var lName="Brooks";
var myAge=27;//Number
var student=true;//boolean
//var student=false

let hometown="Indianapolis";
//let hometown="Chicago";
const DIMEVAL = 10;

let fullName= fName + " "+ lName;

console.log(hometown);
document.write("I love my dog");

document.getElementById('fullName').innerHTML += fullName + " is<i> " + myAge +"</i> years old!";

console.log("Student:" + typeof student);
console.log("DIMEVAL:"+ typeof DIMEVAL);

//lunch Problem
let banana = 1.5;
let sandwich = 4.3;
let chips = 1.23;
let drink = 3;
let lunch= banana +sandwich+ drink+ chips*2;

console.log("lunch" +" "+lunch);

const TAXRATE=0.07;
let lunchTotal = lunch + (lunch*TAXRATE);
let cash = 12.40;
document.write("<p>Do you have enough cash for lunch?:" + (cash>lunchTotal) + "</p>");