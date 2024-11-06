// Trace the below code and predict the output


let n =5;

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += i + ' ';
        } else {
            row += '  ';  // Two spaces
        }
    }
    console.log(row);
}


// gcd and lcm

// function fun1(a,b){
//     while(b!==0){
//         empty="";
//         temp=b;
//         b=a%b;
//        a=temp;

//     }
//     return a;
// }

// function fun2(a,b){
//     return(a*b)/fun1(a,b)
// }
// let a=15;
// let b=20;
// let result=fun2(a,b)
// console.log(result)




// 3. Trace the below code for n = 4

// let n = 3;
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';  // Add spaces
//     }
//     for (let j = 1; j <= i; j++) {
//         row += i + ' ';  // Add numbers
//     }
//     console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';  // Add spaces
//     }
//     for (let j = 1; j <= i; j++) {
//         row += i + ' ';  // Add numbers
//     }
//     console.log(row);
// }




