// 2. Given a positive Integer, write a function isPrime(num) which will return true if its a prime or false otherwise.


// function isprime(n){
// if(n<=1){
//     return false;
// }
// for(let i=2;i<=Math.sqrt(n);i++){
//     if(n%i==0){
//         return false;
//     }
// }
// return true;
// }
// console.log(isprime(3))



// 3. Given a 2 numbers, find the LCM between the two numbers. 

// function lcm(a,b){
// let sum=a*b;
// for(let i=1;i<=sum;i++){
//     if(i%a==0 && i%b==0){
//          console.log(i);
//          break;
//     }
// }

// }
// lcm(10,20)


// 4. Given 2 Numbers, find the GCD between the two numbers. 

// function gcd (a,b,c){
//     let sum=a*b*c;
//     for(let i=sum;i>0;i--){
//         if(a%i==0 && b%i==0 && c%i==0){
//             console.log(i);
//             break;

//         }
//     }

// }
// gcd (10,20,25)




// 2.  Print the below pattern of numbers, if n = 3

//    1

//   2 2

//  3 3 3


// function pattern(n){
//     for(let i=1;i<=n;i++){
//         a=" "

//     for(let j=1;j<=n-i;j++){
//         a+=" "
//     }
//     for(let k=1;k<=i;k++){
//         a+=i+" "
//     }
//     console.log(a)
// }



// }
// pattern(3)






// Print the below Pattern if N = 3    
//                  3 3 3

//                    2 2

//                      1


// function pattern(n){
//     for(let i=n;i>=1;i--){
//       let  a="";
//    for(let j=1;j<=n-i;j++){
//       a+="  ";
//    }
//    for(let k=1;k<=i;k++){
//     a+=i+" ";
//    }
// console.log(a);
//     }

// }
// pattern(3)




// Print the below pattern of ‘*’, if n = 3

// * * *
// * * *
// * * *

// function pattern(n){
//     for(let i=1;i<=n;i++){
//       let  a="";

// for(let j=1;j<=n;j++){
//     a+="*"+" "
// }
// console.log(a);


//     }
// }
// pattern(3)





// *****

// *   *

// *   *

// *   *

// *****

// function printHollowSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j==1 ||j==n ) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 5;
// printHollowSquare(n);




// Print prime numbers in a given range of positive integers m to n ( m < n)
// Prime numbers between 10 and 30: it should print
// 11, 13, 17, 19, 23, 29 using console.log
// if m = 8 and n = 10 then print , "No primes in this range"

// function prime(n){
//     if(n<=1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false;
//         }
//     }
//     return true;
// }

// function find(n,m){
//     empty=[];
//     for(let i=n;i<=m;i++){
//         if(prime(i)){
//             empty.push(i)

//         }
//     }
//     // console.log(empty);

// let a="";
// if(empty.length>0){
//     console.log(empty.join(","))
// }
// else{
//     console.log("No primes in this range");

// }

// }
// find(8,10)




// Given a single integer N, find the sum of the factorials from 1 to N, i.e. sum of
// series - 1! + 2! + 3! + 4! + ... + N!

// print the result using console.log

// function fact(n){
//     let fact=1;
// for(let i=1;i<=n;i++){
//     fact*=i;

// }
// return fact;
// }



// function sum(n){
//     let sum=0;
//     for(i=1;i<=n;i++){
//         sum+=fact(i)
//     }
//     console.log(sum);
// }
// sum(5)



// 1. Print the below patter if n = 3

//            1

//           1 2

//          1 2 3

//           1 2

//            1

// function pattern(n){
//     for(let i=1;i<=n;i++){
//         a="";

//       for(let j=1;j<=n-i;j++){
//         a+=" ";
//       }  
//       for(let k=1;k<=i;k++){
//         a+=k+" ";
//       }
//       console.log(a);

//     }

//   for(i=n-1;i>=1;i--){
//     a="";
//     for(let j=1;j<=n-i;j++){
//         a+=" ";

//     }
//     for(let k=1;k<=i;k++){
//         a+=k+" ";
//     }
//     console.log(a);

//   }
// }
// pattern(3)



// * * * *

// *     *

// *     *

// * * * *


// function pattern (n){
//     for(i=1;i<=n;i++){
//         a="";

//         for(let j=1;j<=n;j++){
//             if(i==1|| i==n ||j==1 ||j==n){
//                 a+="*"+" "
//             }
//             else{
//                 a+="  "
//             }
//         }
//         console.log(a);
//     }



// }
// pattern (5)





// function prime(n){
//     if(n<=1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false;
//         }
//     }
//     return true;
// }

// function sum(n,m){
//     let sum=0;
//     for(let i=n;i<=m;i++){
//         if(prime(i)){
//             sum+=i;
//         }
//     }
//     console.log(sum);
// }
// sum(5,10)



// function special(n){
//     let a=n%10;
//     let b=Math.floor(n/10);
//     let sum=a+b;
//     let mul=a*b;
//     let total=sum+mul;

//     if(total==n){
//         console.log("it a special number");

//     }
//     else{
//         console.log("not");

//     }
// }
// special(19)






// Given a number n, print the sum of all prime numbers from 1 to n example, if n = 10, output 17 (2 + 3 + 5 + 7)


// function prime(n){
//     if(n<=1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false;
//         }
//     }
//     return true;
// }

// function sum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         if(prime(i)){
//             sum+=i;
//         }
//     }
//     console.log(sum);
// }
// sum(10)



// Given a number n print the below pattern n = 3
//                  1

//               2     2

//            3     3      3


// function pattern(n){
//     for(let i=1;i<=n;i++){
//         a="";
//         for(let j=1;j<=n-i;j++){
//             a+=" ";
//         }
//         for(let k=1;k<=i;k++){
//             a+=k+" ";
//         }
//         console.log(a);

//     }
// }
// pattern(3)



// function nam(n){
//     let a=n%10;
//     let b=Math.floor(n/10);
//     let sum=a+b;
//     // console.log(b);
//     if(n%sum==0){
//         console.log("Harshad");
//     }
//     else{
//         console.log("Not Harshad");

//     }
// }
// nam(18)






// Write code to implement the fibonacci sequence.

// function fibi(n){
//     empty=[]
//   let a=0;
//   let b=1;
//   let sum=0;
//   for(let i=1;i<=n;i++){
//         empty.push(a);
//         sum=a+b;                 
//         a=b;
//         b=sum;
//   }
// //   console.log(empty);

// console.log(empty[n-1])

// }
// fibi(5)





// 1
// **
// 3
// ****


// function pattern(n) {
//     for (let i = 1; i <= n; i++) {
//         a = "";
//         if (i % 2 == 1) {
//             a += i;
//         }
//         else {
//             for (let k = 1; k <= i; k++) {
//                 a += "*"
//             }
//         }
//         console.log(a);
//     }
  

// }
// pattern(4)




// gcd 

// function gcd(a,b){
//     sum=a*b;
//     for(i=sum;i>0;i--){
//         if(a%i==0 && b%i==0){
//             console.log(i);
//             break;
            
//         }
//     }
//     return i;

// }
// function check(a,b){

//     if(gcd(a,b)==1){
//         console.log("co-prime");
        
//     }
//     else{
//         console.log("not a co-prime");
        
//     }

// }
// check(12,18)






// 1. You have a number n, write a program which tells if it is a power of 3 or not. 
// Hint: 9 is a power of 3, we arrive at 9 as 3x3 (3 multiplied with itself twice)     ????????????????????????????????????

// for(let i=2;i<=n;i++){
//     if(3**i==n){
//         console.log("yes");
        
//     }
//     else{
//         console.log("No");
        
//     }
// }


// 3. Write a program to find the sum of digits of a number until the sum becomes a single digit.
// Sample Input
// 78945623
// Sample Output
// let n=78945623;

// function single(n){
//     let str=n.toString().split('')
//     let m = 0;
//     let sum=0;
//     for(let i=0; i<str.length; i++){
//         m = Number(str[i]);
//         sum+=m
      

//     }
//     let v = 0
//     let sum1 =0 
//     let a = sum.toString().split('');
//     for(i=0; i<a.length; i++){
//         v = Number(a[i]);
//         sum1 += v;
//     }
//     console.log(sum1);
// }
// single(78945623)




// function single(n){

//  let sum=0;

//     while(n>0){
//           a=n%10;
//           sum+=a;
//           n=Math.floor(n/10);
          
          
//     }
// //     console.log(sum);


// let final=0;
//     while(sum>0){
//      let b=sum%10;
//         final+=b;
//       sum=Math.floor(sum/10);
      
      
// }
// console.log(final);
    
    
// }
// single(78945623)
   
















 


// 2. Given a value n print the below pattern n = 3

// n = 3
// * * *
// # # #
// * * *


// function pattern(n){
//     for(let i=1;i<=n;i++){
//         a=" ";
//     for(let k=1;k<=n;k++){
//         if(i%2==1){
//             a+="*"
//         }
//         else{
//                 a+="#";

//         }
//     }
//     console.log(a);
    

// }
// }
// pattern(3)




// 3. Write an algorithm to find the square root of a number without using a library function with accuracy upto 2 decimal places. 

                                //    ?????????????????????????????????????????????????????
                                




// Write a program to print the hollow square pattern. If n = 4

// 1 1 1 1
// *     *
// *     *
// 4 4 4 4


// function pattern (n){
//     for(let i=1;i<=n;i++){
//         a="";
//         for(let j=1;j<=n;j++){
//             if(i==1|| i==n){
//                 a+=i+" ";
//             }
//             else{
//                 if(j==1||j==n){
//                      a+="*"+" "
//                 }
//                 else{
//                     a+="  ";
//                 }
                
//             }
//         }
//         console.log(a);
        
//     }

// }
// pattern (4)




// You are given an array of numbers.you have to find whether the array is beautiful or not. A beautiful array is an array whose sum 
// of all numbers is divisible by 2, 3 and 5 Output Description: Print 1 if array is beautiful and 0 if it is not Input: arr = [5, 25, 35, -5, 30]
//  output: 1




// function arr(n){
//     let sum=0;
//     for(let i=0;i<=n.length-1;i++){
//         sum+=n[i];
//     }
    

// if(sum%2==0 && sum%3==0  && sum%5==0){
//     console.log(1);
    
// }
// else{
//     console.log(0); 
// }
// }

// arr([5, 25, 35, -5, 30])

                          



