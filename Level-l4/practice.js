// Given an array of strings, find the string which comes first alphabetically without using any library functions. 

// function find(n){
//         let first=n[0];

//         for(let i=1;i<n.length;i++){
//                if(first>n[i]){
//                     first=n[i];

//                } 


//         }
//         console.log(first);


// }find([ "banana", "grape", "avocado","apple", "cherry"])


// Given an array of strings like "Name,age,salary" Find the employee name who has the maximum salary.
// For example:
// Test	Result
// findMaxSalaryEmployee([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])
// Olivia



// function maxSalary(arr){
//         let empty=[];
//         let max=-1;
//         let maxName="";
//         for(let i=0;i<arr.length;i++){
//             empty.push(arr[i].split(','))


//             if(Number(empty[i][2])>max){
//                 max=Number(empty[i][2]);
//                 maxName=empty[i][0];
//             }
//         }
//         // console.log(empty);
//         console.log(maxName);

//     } maxSalary([ "Emily,24,85000", "Sophia,29,4005000", "Olivia,31,120000" ]);


// different way


// function find(n){
//         let maxName="";
//         let max=-1;
//         for(let i=0;i<=n.length-1;i++){
//                 let [name,age,salary]=n[i].split(",")
//                 salary=Number(salary);
//                 if(salary>max){
//                        max=salary;
//                        maxName=name;
//                 }

//         }
//         console.log(maxName);


// }
// find([ "Emily,24,85000", "Sophia,29,4005000", "Olivia,31,120000" ]);






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
//         let  a=n[0].toUpperCase();
//     for(let i=1;i<=n.length-1;i++){
//         let b=n[i].toUpperCase();
//            if(a<=b){
//             a=b;

//            }
//     }
//     console.log(a);
// }
// max(["e","a", "b", "y","c","d"])



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
//         let c=b[0].toUpperCase()
//         if(c=="M"){
//           total+=Number(b[1])*M;
//         }
//         else if(c=="J"){
//             total+=Number(b[1])*J
//         }
//         else if(c=="T"){
//             total+=Number(b[1])*T
//         }
//         else if(c=="P"){
//             total+=Number(b[1])*P
//         }

//     }

// }
// console.log(total);


// }
// find([ "M 2","p 5"])


// Write a program to perform a circular shift on an array to the right by one position. The last element of the array should become the 
// first element. WITHOUT USING LIBRARY FUNCTIONS
// Input arr = [45, 21, 15, 19]
// Output: Print the elements of the shifted array, separated by space.
// Input:
// [45, 21, 15, 19]
// Output
// 19 45 21 15



// function nam(n){
//         let a=[];
//         let last=n[n.length-1];
//         a.push(last)
//         for(let i=0;i<=n.length-2;i++){

//              a.push(n[i])

//         }
//         console.log(a);

// }
// nam([45, 21, 15, 19])








// For the first 100 kWh, the rate is ₹8 per kWh.
// For the next 200 kWh (from 101 to 300 kWh), the rate is ₹12 per kWh.
// For any usage above 300 kWh, the rate is ₹15 per kWh.
// For usage = 350 kWh:
// First 100 kWh = 100 × ₹8 = ₹800
// Next 200 kWh = 200 × ₹12 = ₹2400
// Remaining 50 kWh = 50 × ₹15 = ₹750
// Total Bill = ₹800 + ₹2400 + ₹750 = 3950
// The program takes an array of usages, the program prints the sum
// example usages = [350, 150, 100];
// output
// For example:
// TestResultcalculateTotalBill([350, 150, 100])
// 6150


// function find(n) {
//         let a = 0;
//         for (let i = 0; i <= n.length-1; i++) {

//                 for (let j = 1; j <= n[i]; j++) {
//                         if (j <= 100) {
//                                 a += 8;
//                         }
//                         else if (j>100 && j <= 300) {
//                                 a += 12;
//                         }
//                         else if (j > 300) {
//                                 a += 15;
//                         } 

//                 }
//         }
//         console.log(a)

// }
// find([350, 150, 100])


// function find(n) {
//         let a = 0;
//         for (let i = 0; i <= n.length ; i++) {
//                 let b = n[i]
//                 if (b<=100){
//                         a+=b*8;
//                 }
//                 else if(b>100 && b<=300){
//                         a+=100*8;
//                         a+=(b-100)*12;
//                 }
//                 else if(b>300){
//                         a+=100*8;
//                         a+=200*12;
//                         a+=(b-300)*15;
//                 }
//         }
//         console.log(a);
        

// }
// find([350, 150, 100])

function arr(n){
        let empty=[]
        let a=n[0]
        for(let i=1;i<=n.length;i++){
                if(a<n[i]){
                        a=n[i]
                        empty.push(a)
                }
        }
        console.log(a);
        

}
arr(["a","s","d","f","g","z","h","j"])