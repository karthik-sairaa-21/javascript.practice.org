// // 1. Print the below patter if n = 3

// //           1

// //          1 2

// //         1 2 3

// //          1 2

// //           1


// function nam(n){
//     for(let i=1;i<=n;i++){
//            let a=""
//     for(let j=1;j<=n-i;j++){
//         a+=" "
//     }
//     for(let k=1;k<=i;k++){
//         a+=k+" "
//     }
//     console.log(a)
//     }


    
// for(let i=n-1;i>=1;i--){
//     let b=""

//     for(let j=1;j<=n-i;j++){
//         b+=" "
//     }
//     for(let k=1;k<=i;k++){
//         b+=k+" "
//     }
//     console.log(b);  
// }
// }
// nam(3)


// Given a number find the LCM of a number

// function lcm(n,m){
//     let lcm=n*m
//     for(i=1;i<lcm;i++){
//         if(i%n==0 && i%m==0){
//             console.log(i);
//             break;
            
//         }

//     }
   
// }
// lcm(10,20)


// Write code to implement the fibonacci sequence.

// function fibi(n){
//     let a=0;
//     let b=1;
//     let sum=0;
//     empty=[]
//     for(let i=1;i<=n;i++){
//         empty.push(a)
//         sum=a+b;
//         a=b;
//         b=sum;
      
//     }
//     return empty[n-1];
    

// }
// console.log(fibi(5));
// // // console.log(fibi(5))
// console.log(fibi(2));


// Print the following pattern if n = 4
//       1

//    *    *

//   3  3  3

// *  *   *  *  
// let n=4;
// for(let i=1;i<=n;i++){
//     let a="";
//     for(let j=n-i;j>=1;j--){
//         a+=" ";
//     }
//     if(i%2==1){
//         for(let k=1;k<=i;k++){
//             a+=i+" ";
//         }
//         console.log(a);
        
//     }
//     else{
//         for(let k=1;k<=i;k++)
//             a+="*"+" ";
//         console.log(a);
        
//     }
    
// }


// 1. You have a number n, write a program which tells if it is a power of 3 or not. 

// Hint: 9 is a power of 3, we arrive at 9 as 3x3 (3 multiplied with itself twice)

 
// function power(n,a){
//     let ispower=false;
//     for(i=1;i<n;i++){
       
//         if(a**i==n){
//             ispower=true
//             break;
//         }
    
//     }
//     if(ispower){
//         console.log(i);
   
//     }
//     else{
//         console.log("no")
//     }
// } 

// power(81,3)
  
// 2. Given a value n print the below pattern n = 3

// n = 3
// * * *
// # # #
// * * *

// n=4
// * * * *
// # # # #
// * * * *
// # # # #

// let n=4;
// for(let i=1;i<=n;i++){
//     let a="";
//     if(i%2==1){
//         for(let j=1;j<=n;j++){
//             a+="*"+" "   
//         }
//         console.log(a);
//     }
//     else{
//         for(let k=1;k<=n;k++){
//             a+="#"+" "  
//         }
//         console.log(a); 
//     }
 
// }


// Given an array check if its sum of all of its numbers is divisble by 11 or not

// function divi(n){
//     let sum=0;
//     for(i=1;i<=n.length-1;i++){
//           sum+=n[i];
//     }
//     if(sum%11==0){
//         console.log("ok");
        
//     }
//     else{
//         console.log("Not ok");
        
//     }
// }
// let n=[11,22,33,44,33,22,22]
// divi(n)


// Print the below pattern use $ instead of even numbers in the below pattern for n = 3
//   1

//  $ $

// 3 3 3

//  $ $

//   1


// function pattern(n){
//     for(let i=1;i<=n;i++){
//         a=" ";

//         for(let j=1;j<=n-i;j++){
//             a+=" "
//         }
//         if(i%2==1){
//             for(let k=1;k<=i;k++){
//                 a+=i+" ";

//             }
//             console.log(a);
//         }
//         else{
//             for(let h=1;h<=i;h++){
//                 a+="$"+" "
//             }
//             console.log(a);
            
//         }
     
//     }

//     for(i=n-1;i>=1;i--){
//         a=" "

//         for(j=1;j<=n-i;j++){
//             a+=" "
//         }
//         if(i%2==1){
//         for(k=1;k<=i;k++){
//              a+=i+" ";
//         }
//         console.log(a);
        
//     }
//     else{
//         for( h=1;h<=i;h++){
//             a+="$"+" "
//         }
//         console.log(a);
        
//     }

//     }
// }
// pattern(3)


// Find the LCM for given 3 numbers a, b, c


// function lcm(a,b,c){
//     let sum=a*b*c;
//       for(let i=1;i<=sum;i++){
//         if(i%a==0 && i%b==0 &&i%c==0){
//             console.log(i);
//             break;
            
//         }

//       }

// }
// lcm(10,22,15)


// gcd

// function gcd(a,b,c){
//   let sum=a*b*c;
//     for(let i=sum;sum>=0;i--){
//       if(a%i==0 && b%i==0 &&c%i==0){
//           console.log(i);
//           break;
          
//       }

//     }

// }
// gcd(11,22,22)











