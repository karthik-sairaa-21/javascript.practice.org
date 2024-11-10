// // 1. Print the below patter if n = 3

// //           1

// //          1 2

// //         1 2 3

// //          1 2

// //           1



// function pattern(n){
//     for(let i=1;i<=n;i++){
//          a="";
//         for(let j=n-i;j>=1;j--){
//             a+=" ";
//         }
//         for(let k=1;k<=i;k++){
//             a+=k+" ";
           
//         }
//         console.log(a);
//     }

//     for(i=n-1;i>=1;i--){
//         a="";
//        for(j=1;j<=n-i;j++){
//            a+=" ";
//        }
//        for(k=1;k<=i;k++){
//            a+=k+" ";
          
//        }
//        console.log(a);
//    }

// }
// pattern(3)

// Given 2 Numbers, find the GCD between the two numbers. 
// input
// 10 30
// output
// 5

// function gcd(a,b){

// let sum=a*b;
// for(let i=sum;i>=0;i--){
//       if(a%i==0 && b%i==0){
//         console.log(i);
//         break;
//       }
// }
// }
// gcd(24,18)




// Print the below pattern of ‘*’, if n = 3

// * * *
// * * *
// * * *

// function nam(n){
//     for(let i=1;i<=n;i++){
//         a=" ";

//         for(let j=1;j<=n;j++){
//             a+="*"+" ";
//         }
//         console.log(a);
        
//     }
// }
// nam(3)





// Print the below Pattern if N = 3

// 1 2 3
//  1 2
//   1

// function pattern(n){
//  for( i=0;i<n;i++){
//        a=" ";
 
//  for(j=0;j<i;j++){ 
//          a+=" "
//  }
//  for( k=1;k<=n-i;k++){
//     a+=k+" ";
   
//  }
//  console.log(a);
// }
 
 
// }
// pattern(3)

// Task: Print a right-angled triangle pattern for n rows

// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) { 
//             row += '*';
//         }
//         console.log(row);
//     }
// }
// let n = 5;
// printTriangle(n);



// Task: Check if a number is prime.

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i >=Math.sqrt(num); i++) {
//         if (i % num === 0) { 
//             return false;
//         }
//     }
//     return true;
// }

// // Example usage
// let num = 29;
// console.log(isPrime(num));


// 3. GCD (Greatest Common Divisor) Calculation


// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b; 
//         a = temp;  
//     }
//     return a;
// }

// // Example usage
// let a = 48, b = 18;
// console.log(gcd(a, b)); 

// 4. Print Hollow Square

// *****

// *   *

// *   *

// *   *

// *****
// let n=5;

// function square(n){
//     for(let i=1;i<=n;i++){
//         a=" ";
//         for(let j=1;j<=n;j++){
//             if(i==n || i==1 || j==1 || j==n){
//                   a+="*";
//             }
//             else{
//                 a+=" ";
               
//             }
          
//         }
//         console.log(a);
//     }

// }
// square(4)



// Print prime numbers in a given range of positive integers m to n ( m < n)
// for example 
// Prime numbers between 10 and 30: it should print

// 11, 13, 17, 19, 23, 29 using console.log
// if m = 8 and n = 10 then print , "No primes in this range"


// function prime(n,m){
//     function isprime(n){
//     if(n<=1){
//         return false;
//     }
//  for(let j=2;j<=Math.sqrt(n);j++){
//     if(n%j==0){
//         return false;
//     }
//  }
//  return true;

// }

// let empty=[]
// for(i=n;i<=m;i++){
//     if(isprime(i)){
//     empty.push(i)
//     }
// }
// if(empty.length >0){
//     console.log(empty.join(','));
    
// }
// else{
//     console.log( "No primes in this range");  
// }

// }
// prime(10,30)



// Print the below pattern of ‘*’ if n = 3
// *
// * *
// * * *

// function pattern(n){
// for(let i=1;i<=n;i++){
//     a=" "
//     for(let k=1;k<=i;k++){
//         a+="*"+" "
//     }
//     console.log(a);
    
// }    

// }
// pattern(3)


// Use console.log and print the LCM between 2 numbers. For example
// lcm of 12 and 18 is  36

// function lcm(a,b){
//     let sum=a*b;
//     for(let i=1;i<=sum;i++){
//         if(i%a==0 && i%b==0){
//             console.log(i); 
//             break;  
//         }
//     }
// }
// lcm(12,18)



// Given a single integer N, find the sum of the factorials from 1 to N, i.e. sum of
// series - 1! + 2! + 3! + 4! + ... + N!
// print the result using console.log


// function fact(n){
// let a=0;
// let b=1
// for(let i=1;i<=n;i++){
//     b*=i;
//     a+=b

// }
// console.log(a);

// }
// fact(5)



