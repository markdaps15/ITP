// Exercise 1

/* let score = '';
while (score == '') {
    score = prompt("Enter your score!");

        if (score == '') {
            alert("Please enter your score!");
        } else if (score > 100 || score < 0) {
            console.log("Please enter a valid score");
        } else if (score >= 90 && score <= 100) {
            console.log("Congratulations! You excel and your grade is A!");
        } else if (score >= 80 && score < 90 ) {
            console.log("Congratulations! You passed and your grade is B!");
        } else if (score >= 70 && score < 80 ) {
            console.log("Your grade is C!");
        } else if (score >= 60 && score < 70 ) {
            console.log("Your grade is D!");
        } else {
            console.log("Better luck next time! Your grade is F!");
        } 
}
*/


// Exercise 2

/*let start = prompt("Enter starting number:")
let end = prompt("Enter ending number:")

for (let i = start; i <= end; i++) {
    console.log(i);
}
*/


// Exercise 3
/*
function power(base, exponent) {
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}

console.log(power(5, 8));

*/

// Exercise 4

 /*   for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
    */


    //Errol's code
// Exercise 3
/*function calculatePower() {
    const base = parseFloat(prompt("Enter the base:"));
    const exponent = parseFloat(prompt("Enter the exponent:"));
    // Validate inputs
    if (isNaN(base) || isNaN(exponent)) {
      console.error("Invalid input. Please enter numeric values.");
      return;
    }
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    console.log(`${base} raised to the power of ${exponent} is ${result}`);
  }
  
  calculatePower();*/