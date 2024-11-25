// Given an array of strings like "Name,age,salary" Find the employee name who has the maximum salary.

// For example:

// Test	Result
// findMaxSalaryEmployee([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])
// Olivia



// function find(n){
     


// }
// find([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])


// 3. Write a program to find the sum of digits of a number until the sum becomes a single digit.
// Sample Input
// 78945623
// Sample Output
// 8
// Explanation: adding  7 + 8 + 9 + 4 + 5 + 6 + 2 + 3 becomes 44, now sum the digits of 44 again so that it becomes 8 , ie 4 + 4


// function s(n){
//     let sum=0;
//     for(let i=0;i<=n;i++){
//         let a=n%10;
//         sum+=a;
//         n=Math.floor(n/10);
      
//     }
//     // console.log(sum);
//     return sum;

// }



// function jam(m){
//     let g=s(m);
//   let sum=0;
//     for(let i=0;i<=g;i++){
//         let a=g%10;
//         sum+=a;
//         g=Math.floor(g/10);
      
//     }
//     console.log(sum);
// }
// jam(78945623)




// function nam(cart){
//     let M=500;
//     let J=3000;
//     let T=1500;
//     let P=10;
//     let total=0;
//     if(cart.length<1){
//         return 0;
//     }
//     else{
//     for(let i=0;i<=cart.length-1;i++){
//           let b=cart[i].split(" ")
//           if(b[0]=="M"){
//               total+= Number(b[1])*M;
//           }
//           else if(b[0]=="J"){
//               total+=Number(b[1])*J;
          
//           }
//           else if(b[0]=="T"){
//               total+=Number(b[1])*T;
              
//           }
//           else if(b[0]=="P"){
//               total+=Number(b[1])*P;
              
//           }
          
//     }
//     console.log(total) 
// }
// }
// nam(["M 3", "J 1", "T 2"])







// Debug the below code to find the max in an array

// function max(n){
//     a=n[0]
//     for(let i=1;i<=n.length;i++){
//            if(a<=n[i]){
//             a=n[i]
//            }
//     }
//     console.log(a);
    

// }
// max(["a", "b", "c","d"])




// function findMax(arr) {
//     if (arr.length === 0) {
//         return undefined;
//     }
//     let max =arr[0] ;
//     for (let i = 1; i <= arr.length; i++) {
//       if (max < arr[i]) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
// console.log(findMax([1, 3, 5, 2, 4]));





// function find(cart){
//     let M=500;
//     let J=3000;
//     let T=1500;
//     let P=10;
//     let total=0;
// if(cart<0){
//     console.log("empty");
    
// }

// else{
//     for(let i=0;i<=cart.length-1;i++){
//         let b=cart[i].split(" ");
//         if(b[0]=="M"){
//           total+=Number(b[1])*M;
//         }
//         else if(b[0]=="J"){
//             total+=Number(b[1])*J
//         }
//         else if(b[0]=="T"){
//             total+=Number(b[1])*T
//         }
//         else if(b[0]=="P"){
//             total+=Number(b[1])*P
//         }
        
//     }
  
// }
// console.log(total);
   
    
// }
// find([ "M 1","P 5"])



// Given a string count number of distinct vowels in the String. Consider all the inputs to be in
// lowercase
// Input: cool
// Output: 1
// Explanation: Since o is coming twice, but we need distinct counts so its only 1 Generate Javascript code which will print the result 
// in console.log and generate 5 test cases


