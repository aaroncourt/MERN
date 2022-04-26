// Problem #1: Rewrite original code to be faster and to choose what place to calculate to.

// Code provided in original problem:

// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }

//     return true;

//     }

// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e4 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// Refactored code
Number.prototype.isPrime = function() {
    for( let i=2; i<=Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }

    return true;

    }
function prime(place){
    const { performance } = require('perf_hooks');
    const start = performance.now();
    let primeCount = 0;
    let num = 2; // for math reasons, 1 is considered prime
    while( primeCount < place ){
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }

console.log(`The ${place}th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
}
prime(10000) // The 10000th prime number is 104729; This took 301.6976000070572 milliseconds to run
prime(100000) // The 100000th prime number is 1299709; This took 10131.208400003612 milliseconds to run
prime(1000000) // The 1000000th prime number is 15485863; This took 329703.8584000021 milliseconds to run

// Problem #2: Which implementation of Fibonacci should be faster?
// Answer: The recursive function should be faster because it is only doing math operations where the iterative function involves reading and pusing to an array.
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }

    return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);

// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
        return vals[n];
    }
    iFib(20);
    

// Problem #3: Write a more efficient function to reverse the string below.
// Provided code:
// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");

// New Code:
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

function reverse_string(string) {
    let new_string = "";
    for (let i = string.length - 1; i >= 0; i--) {
        new_string += string[i];
    }
    return new_string;
}

console.log(reverse_string(story));