//Question 1
for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '#';
    }
    console.log(line);
}

//if and if else statements
let num = 2;
if(num > 7){
    console.log("The number is less than seven")
}
else if (num > 1){
    console.log("The number is less than 2")
}

else{
    console.log("End")
}

//Functions
//Functions without parameters
function Action(){
    console.log("I am sleeping now")
}
//calling the function 
Action();

//Functions with one parameter
function Stud_ID(regNo){
    console.log(regNo)
}
Stud_ID(7873)

//function with 2 parameters
function add(a, b){
    return a + b ;
}
console.log(add(12, 4));

//Write a function min that takes two arguments and returns their minimum.
function min(a,b){
    return Math.min(a,b);
}
console.log(min(10, 6));

// if Statement
let x = 4;
if(x>5){
    console.log("It is already Friday")
}
else if(x>6){
    console.log("It is already Saturday")
}
else{
    console.log("Its a new week")
}