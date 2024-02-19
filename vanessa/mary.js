for(let number=1; number<=7;number++){
    let tag="";
    for(let j=0;j<number;j++){
        tag+="#";
    }
    console.log(tag);
}

for(let input=1;input<=100;input++){
    if (input % 3 === 0 && input % 5 === 0) {
        console.log("FizzBuzz");
    } else if (input % 3 === 0) {
        console.log("Fizz");
    } else if (input % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(input);
    }
       
}
let size = 8;
let board = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      board += " "; // Place a space for even-indexed cells
    } else {
      board += "#"; // Place a '#' for odd-indexed cells
    }
  }
  board += "\n"; // Add a newline character after each row
}

console.log(board);
