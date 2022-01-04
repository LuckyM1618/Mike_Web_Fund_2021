// 1. Print Odds 1 - 20
// Using a loop, write code that will console.log() all of the odd values from 1 up to 20

for(var i = 1; i <= 20; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}

// 2. Decreasing Multiples of 3
// Using a loop, write code that will console.log() all of the values that are evenly divisible by 3 from 100 down to 0

for(var i = 100; i > 0; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

// 3. Print the sequence
// Using a loop, write code that will console.log() the values of this sequence: 4, 2.5, 1, -0.5, -2, -3.5

for(var i = 4; i > -4; i -= 1.5) {
    console.log(i);
}

// 4. Sigma
// Write code that will add all of the values from 1 - 100 onto some variable call sum and at the end, console.log() the result

var x = 100;
var sum = 0;

for(var i = 0; i <= x; i++) {
    sum += i;
}

console.log(sum);

// 5. Factorial
// Write code that will multiply all of the values from 1 - 12 onto some variable product and at the end console.log() the result

var x = 12;
var product = 1;

for(var i = 1; i <= x; i++) {
    product *= i;
}

console.log(product);