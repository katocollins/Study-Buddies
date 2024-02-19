//inline comment
console.log("Hello");

/*multi-line
comment.
calculating sum of the first ten numbers
*/
let total = 0, count = 1;
while (count <= 10) {
total += count;
count += 1;
}
console.log(total);

//Method 2
//console.log(sum(range(1, 10)));

//Factorial
function factorial(n) {
    if (n == 0) {
    return 1;
    } else {
    return factorial(n - 1) * n;
    }
}
console.log(factorial(8));

//back tick quoted strings
console.log(`half of 100 is ${100 / 2}`);

//unary operators-typeof operator
console.log(typeof 4.5)
console.log(typeof "x")

//The minus operator can be used both as a binary operator and as a unary operator.
console.log(- (10 - 2)) //-8

//Boolean datatype
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
console.log("Aardvark" < "Zoroaster") //true
//There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).
console.log(NaN == NaN)
// → false

//logical operators
console.log(true && false)
// → false
console.log(false || true)
// → true
//The value on the left of the question mark “picks” which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

//automatic type conversion
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
//short-circuiting of logical operators
//The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types.
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
/*The rules for converting strings and numbers to
Boolean values state that 0, NaN, and the empty string ("") count as false,
while all the other values count as true. So 0 || -1 produces -1, and "" ||
"!?" yields "!?".
The && operator works similarly but the other way around. When the
value to its left is something that converts to false, it returns that value, and
otherwise it returns the value on its right.
Another important property of these two operators is that the part
to their right is evaluated only when necessary. In the case of true || X,
no matter what X is—even if it’s a piece of program that does something
terrible—the result will be true, and X is never evaluated. The same goes
for false && X, which is false and will ignore X. This is called short-circuit
evaluation.*/

//expressions and statements
let one = 1, two = 2;
console.log(one + two);
// → 3
//The words var and const can also be used to create bindings, in a way similar to let.
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
/*Binding names can be any word. Digits can be part of binding names—
catch22 is a valid name, for example—but the name must not start with a
digit. A binding name may include dollar signs ($) or underscores (_) but
no other punctuation or special characters.
Words with a special meaning, such as let, are keywords, and they may
not be used as binding names.*/ 

//to enter text by the user but can be ran in the browser
//prompt("Enter passcode");

//return values
console.log(Math.max(2, 4));
// → 4
console.log(Math.min(2, 4) + 100);
// → 102

//control flow
//let theNumber = Number(prompt("Pick a number"));
//console.log("Your number is the square root of " + theNumber * theNumber);

//conditional execution
//if
if (1 + 1 == 2) console.log("It's true");
// → It's true

//if-else
let theNumber = 7 ;
if (theNumber == 7) {
console.log("The number is seven");
} else {
console.log("The number is not seven");
}

//multiple if-else
let myNumber = 7 ;
if (myNumber < 0) {
console.log("The number is so small");
} else if (myNumber == 7 ) {
console.log("The number is correct");
} else {
console.log("The number is wierd");
}

//while loop
let number=1;
while(number<=10){
    console.log(number);
    number=number+2;
}

//program to calculate 2 power 10
let result = 1;
let counter = 0;
while (counter < 10) {
result = result * 2;
counter = counter + 1;
}
console.log(result);
// → 1024

//do loop-program that forces you to enter your name
/*let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);*/

//indention
if (false != true) {
console.log("That makes sense.");
if (1 < 2) {
console.log("No surprise there.");
}
}

//for-loop
for (let number = 0; number <= 12; number = number + 2) {
console.log(number);
}
//example 2
let result2 = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
result2 = result2 * 2;
}
console.log(result2);
// → 1024

//break statement-first number that is greater or equal to 20 and is divisible by 7
for (let current = 20; current>=20 ; current++) {
if (current % 7 == 0) {
console.log(current);
break;
}
}
// → 21

//continue statatement
let text="Ethel";
for (let i=0; i<5; i++) {
    if (i==3) continue;
    console.log(text[i]);   
}

//switch statement
let weather= "sunny";
switch ( weather) {
case "rainy":
console.log("Remember to bring an umbrella.");
break;
case "sunny":
console.log("Dress lightly.");
break;
case "cloudy":
console.log("Go outside.");
break;
default:
console.log("Unknown weather type!");
break;
}

//EXERCISE
//1
let n=7;
for (let i=1; i<=n; i++) {
    let hash="#";
    console.log(hash.repeat(i));
}

//2
for(let n=1;n<=100;n++) {
    if(n%5==0 && n%3==0){
        console.log("FizzBuzz");
    }else if(n%5==0 && n%3 != 0){
        console.log("Buzz");
    }else if(n%3==0){
        console.log("Fizz");
    }else{
        console.log(n);
    }

}

//3
var x="";
var y="";
for (var i=0; i<4; i++) {
    x= " " + "#" + " " + "#" + " " + "#" + " " + "#";
    y= "#" + " " + "#" + " " + "#" + " " + "#";
    console.log(x);
    console.log(y);
}
//to specify the height and width
/*height=prompt("Please enter the height of the chess board");
width=prompt("Please enter the width of the chess board");
let chessBoard="";
for (let i=0; i<height;i++){
    for (let j=0; j<width; j++){
        if((i+j) % 2 ==0){
            chessBoard += " ";
        }else{
            chessBoard += "#";
        }
    }
    chessBoard += "\n";
}
console.log(chessBoard);*/






