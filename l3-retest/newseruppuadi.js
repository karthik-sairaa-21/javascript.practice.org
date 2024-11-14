// You are given an array of numbers.you have to find whether the array is beautiful or not. A beautiful array 
// is an array whose sum of all numbers is divisible by 2, 3 and 5 Output Description: Print 1 if array is beautiful
//  and 0 if it is not Input: arr = [5, 25, 35, -5, 30] output: 1

// function beautiful(arr){
// let a=0;
//     for(let i=0;i<=arr.length-1;i++){
//         a=a+arr[i]
//     }
//     // console.log(a);
//     if(a%2==0 && a%3==0 && c%5===0){
//         console.log(1);


//     }
//     else{
//         console.log(0);

//     }

// }
// let a=arr = [5, 25, 35, -5, 30]
// beautiful(a)



// function hallowSquare (n) {
// //     // Enter your code here

//     for(let i=1;i<=n;i++){
//         a="";

//         for(let j=1;j<=n;j++){
//             if(i==1||i==n ){
//                 a+=i+" ";

//             }
//             else{
//                 if(j==1|| j==n){
//                     a+="*"+" ";
//                 }
//                 else{
//                     a+="  ";
//                 }

//             }
//     }
//     console.log(a);
// }
// }
// hallowSquare (5);



// A number can be said as a strong number when the sum of the factorial of the individual digits 
// is equal to the number. For example, 145 is a strong number. 1! + 4! + 5! 145. Write a program to check 
// whether a given number is a strong number or not.

// For example:

// function fact(n){
//     let a=n;
//     let sum=0;
//     while (a>0){
//         let single=a%10;
//        sum+=find(single)
//        a=Math.floor(a/10); 
//     }
//     if(n==sum){
//         console.log("storng");

//     }
//     else{
//         console.log("Not strong");

//     }

// }
// fact(145)

// function find(n){
// let total=1;
// for(let j=1;j<=n;j++){
//     total*=j;
// }
// return total;
// }




// Write a program to check if a number is a "Harshad number." A Harshad number (or Given number) is an integer that is divisible by 
// the sum of its digits. Given an integer n, print "Harshad" if it’s a Harshad number; otherwise, print "Not Harshad."

// function check(n) {
//     let a = n;
//     let sum = 0;
//     while (a > 0) {
//         let total = a % 10;
//         sum += total;
//         a = Math.floor(a / 10);
//     }
//     // console.log(sum);
//     if (n%sum==0) {
//         console.log("Harshad");

//     }
//     else {
//         console.log("Not Harshad");

//     }

// }
// check(18)




// Use console.log and print the LCM between 2 numbers. For example
// lcm of 12 and 18 is  36

// function lcm(a,b){
//     let sum=a*b;
//     for(let i=1;i<=sum;i++){
//         if(i%a==0 && i%b==0){
//             console.log(i);
//             break
            
//         }
      
//     }
   
// }
// lcm(12,18)

// Given 2 Numbers, find the GCD between the two numbers. 

// input

// 10 30

// function gcd(a,b){
//     let sum=a*b;
//     for(let i=sum;i>=0;i--){
//         if(a%i==0 && b%i==0){
//             console.log(a);
//             break;
            
//         }
//     }

//     }   
//      gcd(10,30)


// Given an array of integers, find the maximum in the array

// let a=[12,21,23,22,43,2,122]
// let b=[0]
// for(let i=1;i<=a.length;i++){

// if(b<a[i]){
//     b=a[i]
// }



// }
// console.log(b);



// Given an array of strings, find the string which comes first alphabetically without using any library functions. 


// let a = "apple";
// let b = "aeroplane";

// if(a>b){
//     let c= b;
//     b = a;
//     a= c;
// }
// console.log(a);
// console.log(b);

// let arr = ["cherry", "apple", "date", "elderberry","banana",];

// for(i=0;i<arr.length-1;i++){
//     for(j=0;j<arr.length-1-i;j++){
//     let a =arr[j];
//     let b=arr[j+1];
//     if(a>b){
//     //    let temp 
//         arr[j] = b ;
//         arr[j+1] = a;
//     }
// }
// }
// console.log(arr);



// *

// * *

// * * *

// let n=3
// for(let i=1;i<=n;i++){
//     let a=""
//     for(let k=1;k<=i;k++){
//         a+="*"+" ";
//     }
//     console.log(a);
   
    
// }



//   *

//  * *

// * * *

// let n=3;
// for(let i=1;i<=n;i++){
//     let a=" "
//     for(let j=1;j<=n-i;j++){
//         a+=" "
//     }
//     for(let k=1;k<=i;k++){
//         a+="*"+" "
//     }
//     console.log(a);
    
// }



// * * *

// * * *

// * * *
// let n=3
// for(let i=1;i<=n;i++){
//     a=" "
//     for(let k=1;k<=n;k++){
//         a+="*"+" "
//     }
//     console.log(a); 
// }



// * * *
//  * *
//   *

// n=3;
//  for(let i=n;i>=1;i--){
//     a=" "
//     for(let j=i;j<=n;j++){
//         a+=" "

//     }
//     for(let k=1;k<=n;k++){
//         a+="*"+" "
//     }
//     console.log(a);
    
//  }


