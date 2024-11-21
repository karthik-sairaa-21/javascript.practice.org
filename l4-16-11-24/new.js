// Given an array of integers, find the maximum in the array

// function max(n){
//     let a=n[0]
// for(let i=1;i<=n.length-1;i++){
//     if(a<n[i]){
//         a=n[i];

//     }
// }
// console.log(a);


// }
// max([12,44,33,22,11,55])



// Given an array of strings, find the string which comes first alphabetically without using any library functions. 
// ???????????????????????????????????????????????????????????????




// Given an array of strings arr and another string s, check if s in present in arr

// function check(n,m){
//     sum=[];
//     for(let i=1;i<=n.length-1;i++){
//            if(m==n[i]){
//             sum.push(n[i])
//            }

// }
// // console.log(sum);

// if(sum.length>0){
//     console.log("YES");

// }
// else{
//     console.log("NO");

// }

// }
// check(["apple","orange","Mango"],["Mango"])





// Given an array of positive integers sorted in ascending order (increasing order, 1st element is the smallest, Nth element is the largest),
//  implement the binary search algorithm.

// function ass(n){
//     a=n[0];nm                         
//     for(let i=1;i<=n.length;i++){
//         if(a>n[i]){
//             a=n[i];


//     }                          ????????????????????????????????????????????
// }



// }
// ass([11,22,44,22,12,66])



// Given a array of integers, count of number of occurrences of the maximum element in the array 
// Sample Input: 3 2 1 3

// function count(n){
//     let a=n[0]
//     for(let i=1;i<n.length;i++){
//         if(a<n[i]){
//             a=n[i]
//         }
//     }

// let count=0;

// for(let j=0;j<=n.length;j++){
//     if(a==n[j]){
//         count++;
//     }
// }
// console.log(count);





// }
// count([3, 2, 1 ,3])



// Write code to print the below pattern, if n = 3
// 1         1

// 2 2     2 2

// 3 3 3 3 3 3

// function pattern(n){
//     for(let i=1;i<=n;i++){             ?????????????????????????????????
//         a="";
//         for(let j=1;j<=i;j++){
//             a+=j+" ";
//         }
//         console.log(a)

//     }





// }
// pattern(3)



// let arr = [5, 8, 13, 21];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 13) {
//     console.log("Found 13!"); 
//     break;
//   }
// }


// Find the second maximum in an array of integers

// function max(n){
//     let a=n[0];
//     let b=n[0]
//     let sum=0;
//     for(let i=1;i<=n.length;i++){
//         if(n[i]>a){
//             a=n[i]


//         }
//     }
//     // console.log(a);

//     for(let j=0;j<=n.length;j++){
//         if(b>n[j] ){
//                b=n[j] 
//         }
//     }
//     // console.log(b);
// sum=a-b;
// console.log(sum);



// }
// max([12,21,23,33,44,55])




// Count the number of occurrences of a string s2 in a string s1. For example s1 = "This is a String" s2 = "is", number of occurences is 2. 

// function find(s1, s2) {
//     let count=0;
//     for(let i=0;i<=s1.length;i++){
//         if(s1[i]==s2){
//             count++;
//             console.log(count);         ????????????????????
//         }
//     }

// }
// find("This is a String", "is")



// Problem: Given an array of integers, count how many numbers are even and how many are odd.
// Example Input: [1, 2, 3, 4, 5, 6]
// Example Output: { even: 3, odd: 3 }

// function pattern(n){
//     count=0;
//     odd=0;
//     for(let i=0;i<=n.length-1;i++){
//         if(n[i]%2==0){
//             count++;
//         }
//         else{
//             odd++;
//         }
//     }
//     return{odd,count}

// }
// let a=pattern([1, 2, 3, 4, 5, 6,7])
// console.log(a);


// Problem: Given an array of integers and a target element, find the indices of its first and last occurrence.
// Example Input: ([5, 2, 3, 5, 7, 5, 8], 5)
// Example Output: { firstIndex: 0, lastIndex: 5 }


// function find(n,m){
//    let a=-1;
//    let  b=-1;
//     for(let i=0;i<=n.length;i++){
//         if(n[i]==m){
//             if(a==-1){
//                 a=i;

//             }
//                 b=i;
//         }


//     }
//     console.log(a);

//     // return{a,b}
// }
// find([5, 2, 3, 5, 7, 5, 8], 5)


// 3. Given a string, the task is to reverse the order of the words in the given string.
// Examples:
// Input: s = “hello everyone”
// Output: s = “everyone hello”                  ////////////////????????????????????????????
// Input: s = “i love programming very much”
// Output: s = “much very programming love i”



// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.

// function max(n){
//     let a=[0]
//     for(let i=1;i<=n.length;i++){
//         if(a<n[i]){
//             a=n[i];
//         }

//     }
//     // console.log(a);

//     let b=-1;
//     for(let j=0;j<=n.length;j++){
//          if(a==n[j]){
//            b=j;
//            console.log(b);
//            break;
//     }


// }
// }
// max([4, 1, 2, 5, 3])


// Given an array find all the values less than 15 in a new array if not print No Element less than 15.  Example if arr = [4, 15, 8, 25, 30]
//  output is 4, 8. if ar = [19, 89, 90, 18] output No element less than 15

// function arr(n,m){
//     a=[];
//     for(let i=0;i<=n.length;i++){
//         if(m>n[i]){
//            a.push(n[i])
//         }
//     }
//     if(a.length==0){
//         console.log("No element less than 15");
//     }
//     else{
//         console.log(a.join(", "));

//     }
// }
// arr([4, 15, 8, 25, 30],15)


// Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"] output is Abraham

// function arr(n){
//     max=n[0]
//     for(let i=1;i<=n.length-1;i++){
//         if(max.length<n[i].length){
//             max=n[i]
//         }
//     }
//     console.log(max);
// }
// arr(["Ram", "Abraham", "Peter"])


// In an array of string, return all the string which start with the letter 'a' (Case insensitive) for eg
//  arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali

// function arr(n){
//     empty=[];
//     for(let i=0;i<n.length;i++){
//         if(n[i][0]=="A" ||n[i][0]=="a"){
//             empty.push(n[i])

//         }

//     }
//     // console.log(empty);

//     output=0;
//     if(empty.length>0){
//         output=empty.join(", ")

//     }
//     console.log(output);


// }
// arr(["apple", "Ali", "mango","Brush"])




// Reverse a string without using library functions.

// function reverse(n){

//    let b=[]
//     for(let i=0;i<n.length;i++){
//         let   a="";
//         for(let j=n[i].length-1;j>=0;j--){
//             a+=n[i][j];
//         }
//         b.push(a)

//     }
//     // console.log(b);
//     let output=0;
//     if(b.length>0){
//         output=b.join(", ")
//     }
//     console.log(output);



// }
// reverse(["hello","mango"])


// Given an array of strings, return the string which has maximum 'a' character present in it.  eg = ["apple", "appeal", "after", "banish"]
//  output is appeal as it has 2 a's in it

// function arr(n){
//  let a=0;
//  let m="";
//     for(let i=0;i<n.length;i++){

//         let b=0;
//         for(let j=0;j<=n[i].length-1;j++){
//             if(n[i][j]=="a"){
//               b++;
//             }
//         }

//   if(b>a){
//     a=b;
//     m=n[i];

//   }
//     }
//     console.log(m);

// }
// arr(["apple", "appeal", "aftear", "banish"])


// Traverse the array and return the index of the first negative number encountered.

// function index(n){
//     for(let i=0;i<=n.length;i++){
//         if(n[i]<0){
//             return i;  

//         }   
//     }
//     return -1;



// }
// let a=index([1, -1,2, 3, 4]);
// console.log(a);


// Given array two arrays student names and scores, return the student name who has the maximum score eg 
// names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana

// function max(n, score) {
//     let b = score[0];
//     for (let j = 1; j < score.length; j++) {
//         if (b>score[j]) {
//             b = j;
//         }
//     }
//    console.log(n[b]);
   
// }
// max(["sanjay", "priya", "ramesh", "sanjana"], [88, 45, 71, 91])




// You are building a cart page for your website. The website sells
// Mug - M - 500 INR Per piece
// Jeans - J - 3000 INR Per piece
// T shirt - T - 1500 INR Per piece
// Pen - P - 10 INR Per piece
// input: arr = ["M 3", "J 1", "T 2"]
// Output
// 7500
// Explanation
// Sample Input
// M is Mug, J is Jeans, T is for T shirt, P is for Pen
// Sample Output
// 3 Mugs is 1500
// 1 Jeans is 3000
// 2 Tshirt is 3000

// function calculateTotal(arr) {
//     const prices = {
//         M: 500,  // Mug
//         J: 3000, // Jeans
//         T: 1500, // T-shirt
//         P: 10    // Pen
//     };

//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         let [code, quantity] = item.split(' '); 
//         q = parseInt(quantity); 
        
//         let itemTotal = prices[code] * q;
//         total += itemTotal;
//     }

//     return total; 
// }

// const arr = ["M 3", "J 1", "T 2"];
// const totalAmount = calculateTotal(arr);
// console.log(`Final Total: ${totalAmount}`);



// find the duplaicate in the array 
// function dup(arr){
//     let empty=[]
//     for(let i=0;i<=arr.length-1;i++){
//         for(let j=0;j<i;j++){
//             if(arr[i]==arr[j] && !empty.includes(arr[j])){
//                empty.push(arr[j])
//             }
//         }
        

//     }
//     console.log(empty);
    
// }
// dup([12,21,21,33,43,21,43])




      










