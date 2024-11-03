// let n = 5;
// for(i=1;i<=n;i++){
//    let star=""
//    for(j=1;j<=i;j++){
//     star+="*"
//    }
//    console.log(star);   
// }


// 2.prime num

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) { 
//             return false;
//         }
//     }
//     return true;
// }

// Example usage
// let num = 22;
// console.log(isPrime(num));

// function nam(n){
//     empty=[]
//     for(i=0;i<n.length;i++){
//         if(isPrime(n[i])){ 
//             empty.push(n[i])
//             }
//         }
//         return empty;
//     }
// let n=[1,22,1,11,2,3,7,4];
// console.log(nam(n));

// 3. GCD (Greatest Common Divisor) Calculation

// Task: Find the GCD of two numbers.

// function gcd(a, b) {
//     while (a !== 0) {
//         let temp = a;
//        a = b % a ; 
//         b = temp;  
//     }
//     return b;                                
// }
// // Example usage
// let a = 10, b = 30;
// console.log(gcd(a, b));  



// 4. Print Hollow Square

// function printHollowSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (i == 1 || i == n ||j==n ||j==1 ) {
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
// printHollowSquare(n)





