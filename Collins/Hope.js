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