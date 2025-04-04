// Given a positive Integer, write a function isPrime(num) which will return true if its a prime or false otherwise.
 
// function isprime(n){
//     if(n<=1){
//         return false

//     }
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isprime(2))

// function nam(arr){
//     empty=[];
//     for(let i=0;i<arr.length;i++){
//         if(isprime(arr[i])){
//             empty.push(arr[i])
//         }
//     }
//     return empty;
    
// }
// let arr=[11,22,33,44,55,1,4,5,3]
// console.log(nam(arr))


// 3. Given a 2 numbers, find the LCM between the two numbers. 

// function lcm(a,b,c){
//     let sum=a*b*c;

//     for(i=1;i<=sum;i++){
//         if(i%a==0 && i%b==0 && i%c==0){
//             console.log(i);
//             break;
            
//         }
//     }

// }
// lcm(10,20,15)


// // 4. Given 2 Numbers, find the GCD between the two numbers.

// function gcd(a,b,c){
//     let min=Math.min(a,b,c)

//     for(i=min;i>=0;i--){
//         if(a%i==0 && b%i==0 && c%i==0){
//             console.log(i);
//             break;
            
//         }
//     }
// }
// gcd(10,15,45)

// function fibinaic(n){
//     let a=0;
//     let b=1;
//     let sum=0;
//     let total=0;

//     for(i=1;i<=n;i++){
//         sum=a+b;
//         a=b;
//         b=sum;
//     }
//     console.log(b);
// }
// fibinaic(10)


// special number
    
// function sp(arr){
//     for(i=1;i<=arr.lrngth;i++){
//           let get1=arr[i]%10
//           let get2=Math.floor(arr[1]/10)
//           let sum=get1+get2;
//           let mul=get1*get2
//           let total=sum+mul;

//           if(total==arr[i]){
//             console.log(total);  
//           }
//           else{
//             console.log("This no special number");
            
//           }

//     }
// }
// let a=[19,11]
// sp(arr(a))



// Given the value of n print the below pattern n = 3 
// 3 2 1

//   2 1

//     1
// let n=3

// for(i=n;i>=1;i--){
//     let a="";
//     for(j=n-i;j>=1;j--){
//           a+="  ";
//     }
//     for(k=i;k>=1;k--){
//          a+=i+" ";
//     }
//     console.log(a);
    
// }


// Print the below pattern of ‘*’ if n = 3

// *

// * *

// * * *

// n=3;
// for(i=1;i<=n;i++){
//     let a=" ";
//     for(j=1;j<=i;j++){
//         a+="*"+" "
//     }
//     console.log(a);
    
// }


// Print the below pattern of ‘*’ if n = 3
//                    *

//                   * *

//                  * * *

// n=3;
// for(i=1;i<=n;i++){
//     let a="";
//     for(j=n-i;j>=1;j--){
//         a+=" ";

//     }
//     for(k=1;k<=i;k++){
//         a+=i+" ";
//     }
//     console.log(a);
    
// }


// Print the below pattern of ‘*’, if n = 3

//             * * *

//             * * *

//             * * *

// n=3;
// for(i=1;i<=n;i++){
//     let a="";
//     for(j=1;j<=n;j++){
//         a+="";
//     }
//     for(k=1;k<=n;k++){
//         a+="*"+" "
//     }
//     console.log(a);
    
// }


// *****

// *    *

// *    *

// *    *

// *****
// n=5;
// for(i=1;i<=n;i++){
//     let a="";
//     for(j=1;j<=n;j++){
//         if(i==1 || i==n ||j==1||j==n){
//             a+=i+" ";
           
//         }
//         else{
//             a+="  ";
//             // console.log(a);
            
//         }
       

//     }
//     console.log(a);

// }

// 1. Print the below patter if n = 3

//           1

//          1 2

//         1 2 3

//          1 2

//           1

// let n=3;
// function nam(n){
// for(i=1;i<=n;i++){
//     let a="";
//     for(j=1;j<=n-i;j++){
//         a+=" ";
//     }
//     for(k=1;k<=i;k++){
//         a+=k+" ";
       
        
//     } 
//     console.log(a);  
// }
// for(let i=n-1;i>=1;i--){
//     let a=""
//     for(let j=1;j<=n-i;j++){
//         a+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         a+=k+" ";  
//     }
//     console.log(a);
  
    
// }
// }
// nam(3)


// function special(n){
//     for(i=0;i<n.length;i++){
//         let di1=n[i]%10;
//         let di2=Math.floor(n[i]/10);
//         let sum=di1+di2;
//         let multi=di1*di2;
//         let total=sum+multi;
//         if(n[i]==total){
//             console.log(total);
            
//         }
//         else{
//             console.log("NO special number");
            
//         }
//     }
        

// }
// let n=[19,11,47,53,1]
// special(n)










