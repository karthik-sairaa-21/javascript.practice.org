// 1. Write a short program that prints each number from 1 to 100 on a new line. 
// For each multiple of 3, print "Fizz" instead of the number. 
// For each multiple of 5, print "Buzz" instead of the number. 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


// function number(n){
//     for(i=1;i<=n;i++){
//         if(i&3==0 && i%5==0){
//             console.log("FizzBuzz");
//         }
//         else if(i%3==0){
//             console.log("Fizz")
//         }
//         else if(i%5==0){
//             console.log("Buzz")
//         }
//         else{
//             console.log(i);
            
//         }
//     }
// }
// number(100)


// 2. Given a positive Integer, write a function isPrime(num) which will return true if its a prime or 
// false otherwise.


// simple variable condition

function prime(n){
    if(n<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
// console.log(prime(7))
    
//  array check condition

function nam(arr){
    empty=[]
    for(i=0;i<arr.length;i++){
        if(prime(arr[i])){
          empty.push(arr[i]);
        }
    }
    return empty;
}
 let arr=[1,22,1,11,2,3,7,4];
 console.log(nam(arr));
 


//  3. Given a 2 numbers, find the LCM between the two numbers.

function gcd(a , b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

let num1 = 10;
let num2 = 102;

let result = lcm(num1, num2);
console.log("LCM of " + num1 + " and " + num2 + " is: " + result);



// 4. Given 2 Numbers, find the GCD between the two numbers. 

// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;

//     }
//     return a;
// }
// console.log(gcd(10,15))
 


