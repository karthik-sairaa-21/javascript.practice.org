// Print the below pattern of ‘*’ if 

// *

// * *

// * * *

// n = 3

// for(i=1;i<=n;i++){
//     let a="";
//     for(j=1;j<=i;j++){
//         a+="*"+" "
//     }
//     console.log(a);

// }


// Print the below pattern of ‘*’ if          

//                    *

//                   * *

//                  * * *
// n = 3 
// for(i=1;i<=n;i++){
//     let a="";
//     let star='';
//     for(j=1;j<=(n-i);j++){
//         a+=" "
//     }
//     for(k=1;k<=i;k++){
//         star+="* "
//     }
//     console.log(a+star);

// }


// Print the below pattern of ‘*’, if 

//             * * *

//             * * *

//             * * *
// n = 3
// for(i=1;i<=n;i++){
//     // let gap='';
//     let star1=""
//     for(j=1;j<=n;j++){
//         star1+="* "
//     }
//     console.log(star1);

// }


// 2.  Print the below pattern of numbers, if 
//    1

//  2 2

// 3 3 3

// n = 3
// for(i=1;i<=n;i++){
//     let g="";
//     for(j=1;j<=n-i;j++){
//         g+=" "
//     }
//     for(k=1;k<=i;k++){
//         g+=i+" ";
//     }
//     console.log(g);


// }
// Print the below patter if  
// 3 2 1   
//  2 1      
//   1

//   n = 3
//   for(let i=0;i<n;i++){
//     let a="";  
//     for(let j=0;j<i;j++){
//         a+=' ';
//     }
//     for(let k=n-i;k>0;k--){
//         a+=k+' ';
//     }
//     console.log(a);
//   }


//   Print the Below Pattern if   
//                          * * *
//                           * *
// //                         *
//   n = 3 
//   for(i=0;i<n;i++){
//     let a="";
//     let star=""
//     for(k=0;k<i;k++){
//         a+=" "; 
//     }
//     for(j=0;j<n-i;j++){
//        star+="* "
//     }
//     console.log(a+star);

//   }

// Print the below Pattern if    
//                  3 3 3

//                     2 2

//                        1

// n = 3 
// for(i=n;i>=1;i--){
//     let a="";
//     let star=""
//     for(j=0;j<i;j++){
//         a+=" ";
//     }
//     for(k=1;k<=n-i;k++){
//         star+=i+"";

//     }
//     console.log(a+star);
// }



// lcm

// function lcm(a,b){
//     let min=Math.max(a,b)
//     for(i=min;i<a*b;i++){
//         if(i%a===0&&i%b===0){
//             console.log(i);
//             break;
//         }
//     }


// }
// lcm(10,20)




// function nam(n){
//     if(n<=1){
//         return false;
//     }
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false;
//         }

//     }
//     return true;
// }
// // console.log(nam(4))
// function sum(a){
//     empty=[]
//     for(let i=0;i<a.length;i++){
//         if(nam(a[i])){
//             empty.push(a[i])
//         }
//     }
//     return empty;
// }
// let a=[1,2,3,4,5,6,7,8,9]
// console.log(sum(a))


// lcm

// function lcm(a,b){
//     let m=Math.max(a,b)
//     for(i=m;i<a*b;i++){
//         if(i%a===0&&i%b===0 ){
//             console.log(i);
//             break;
//         }
//     }


// }
// lcm(28,10)



//  gcd
// function gcd(a,b,c){
// let min=Math.min(a,b,c);
// for(i=min;i>0;i--){
//     if(a%i===0&&b%i===0 &&c%i==0){
//         console.log(i)
//         break;
//     }
    
// }

// }
// gcd(10,20,3)



// L3 retest
// 2. Given a single integer N, find the sum of the factorials from 1 to N, i.e. sum of 
// series - 1! + 2! + 3! + 4! + ... + N!


// function factorial(n){
//      let m=1;
//      let sum=0;

//      for(i=1;i<=n;i++){
//         m*=i;
//         sum+=m;
//      }
//      console.log(sum);
// }
// factorial(5)


// 3.Write a program to print the hollow square pattern.

// m=5;
// for(i=1;i<=m;i++){
//     let space=" ";
//     for(j=1;j<=m;j++){
//         if(j==1|| j==m ||i==1||i==m){
//           space+=i+" ";    
//         }
//         else{
//        space+="  ";   
//         }

//     }
//     console.log(space);
// }


// Given a two positive integers m and n, where m < n, print the sum of all prime numbers between them. For
//  m = 5 and n = 10, 5 and 7 are prime numbers between 5 and 10 so the answer is 12

// function prime(n) {
//     if (n <= 1) {
//         return false;
//     }
//     for (i = 2; i <= Math.sqrt(n); i++) {
//         if (n%i == 0) {
//             return false;
//         }
//         return true;
//     }
// }

// function correctprime(n, m) {
//     empty = [];
//     for (j = n; j <= m; j++) {
//         if (prime(j)) {
//             empty.push(j)
//         }
//     }

//         let output = 0;
//         if (prime.length > 0) {
//             output = empty.join(", ")

//             console.log(output);

//         }
//         else {
//             console.log("not is it prime nuumber");

//         }

   
// }
// correctprime(11, 23)



// function nam(n){
// for(i=1;i<=n;i++){
//     let b="";
//     for(j=1;j<=n-i;j++){
//         b+=" ";
//    }
//     for(k=1;k<=i;k++){
//        b+=k+" "; 
//     }
//     console.log(b);
// }


// for(i=n-1;i>=1;i--){
//     let b="";
//     // let empty="";
//     for(j=1;j<=n-i;j++){
//         b+=" ";
//     }
//     for(k=1;k<=i;k++){
//        b+=k+" "  
//     }
//     console.log(b);
// }
// }
// nam(5)



n=5;
for(i=1;i<=n;i++){
    let a=""
    for(j=1;j<=n-i;j++){
        a+=" ";
    }
    for(k=1;k<=i;k++){
        a+=k+" "
    }
    console.log(a);
    
}

for(let i=n-1;i>=1;i--){
    let a="";
    for(let j=1;j<=n-i;j++){
        a+=" ";
    }
    for(let k=1;k<=i;k++){
        a+=k+" ";
    }
    console.log(a);
}



// Given the value of n print the below pattern n = 3 
// 3 2 1

//   2 1

//     1

// let n=3
// for(i=n;i>=1;i--){
//     let a="";
//     for(k=n-i;k>=1;k--){
//         a+="  "
//     }
//     for(j=i;j>=1;j--){
//         a+=j+" ";
//     }
//     console.log(a);  
// }


// function nam(m){
//     for(i=0;i<m.length;i++){
// let digit1=Math.floor(m[i]/10);
// let digit2=m[i]%10;
// let sum=digit1+digit2;
// let multiple=digit1*digit2;
// let total=sum+multiple;

// if(total==m[i]){

//     console.log(total);  
// }
// else{
//     console.log("This is no special number"); 
// }

//     }


// }
// nam([19,11])



// fibunasi

// let n = 10;
// let a = 0;
// let b = 1;
// let sum = 0;

// let h=""
// let spl= 0;
// for(i=1; i<=n; i++){
// //    h = h + a + ", ";
// console.log(a)
//     sum = a + b;
//     a = b;
//     b = sum; 
    
// }
// spl = h.slice(0,h.length-2)
// console.log(spl);



// function nam(arr){
//      console.log(gcd(arr[0],arr[1]))
//      console.log(lcm(arr[2],arr[3]))
    

// }
// nam([20,22,33,44]);

// function gcd(c,d){
//     let max=Math.min(c,d)
 
//     for(i=max;i>0;i--){
//         if(c%i==0 && d%i==0){
//             return i;
            
//         }
//     }
//     // return i;

// }

// function lcm(a,b){
//    let min=a*b;
   
//    for(i=1;i<=min;i++){
//     if(i%a==0 && i%b==0){
//        return i;  
//     }
//    }
   
// }


  
 






















