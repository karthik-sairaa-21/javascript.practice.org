// Given an array of integers, find the maximum in the array

// a=[76,22,33]
// empty=a[0]
// for(i=1;i<=a.length-1;i++){
//   if(a[i]<empty){
//     empty=a[i]
//   }
// }
// console.log(empty);


// Given an array of strings arr and another string s, check if s in present in arr
// a=["two","three","one"]
// s=["one"]
// for(i=0;i<=a.length-1;i++){
//   if(a[i]==s){console.log("yes");
//     break;
  
    
//   }
//   else{
//     console.log("no");
    
//   }
// }

// Given a array of integers, count of number of occurrences of the maximum element in the array 

// Sample Input: 3 2 1 3

// Sample Output: 2


// function nam(a){
// count=0
// empty=[0]
// for(i=0;i<=a.length;i++){
//   if(a[i]>empty){
//    empty=a[i]
//   }
// }

// for(let i=0;i<a.length;i++){
//   if(a[i]==empty){
//     count++
//   }
// }
// return count;

// }
// let a=[ 3 ,2, 1, 3,3]
// total=nam(a)
// console.log(total)



// 1. Problem: Given an array of integers, count how many numbers are even and how many are odd.

// Example Input: [1, 2, 3, 4, 5, 6]
// Example Output: { even: 3, odd: 3 }




// function nam(a){
//   let even=[]
//   let odd=[]

// for(i=1;i<a.length;i++){
//   if(a[i]%2==0){
//     even.push(a[i])
 
    
//   }

//   else{
//     odd.push(a[i])
  
    
//   }
 
// }
// return {odd, even}
// }
// let b=nam([1,2,3,4,5,6,7,8,9])
// console.log(b);



// 2. Problem: Given an array of integers and a target element, find the indices of its first and last occurrence.

// Example Input: ([5, 2, 3, 5, 7, 5, 8], 5)
// Example Output: { firstIndex: 0, lastIndex: 5 }


// function nam(a,target){
//   let firsti=-1;
//   let lasti=-1;
//   for(i=1;i<=a.length;i++){
//     if(target==a[i]){
//       if(firsti==-1){
//         firsti=i;
//       }
//       lasti=i;
//     }
  
//   }
//   return {first:firsti,
//     last:lasti
//   };
// }

// let b=nam([1,5,3,4,5,6,7,8],5)
// console.log(b)



// Find the second maximum in an array of integers

// a=[12,11,22,33,44,55]
// b=[0]
// second = 0;
// for(i=0;i<a.length;i++){
//    if(a[i]>b){
//      b=a[i]
//    }
  
// }


// for(j=0; j<a.length; j++){
//     if(second<a[j] && a[j]<b){
//         second = a[j];
//     }
// }
// console.log(second)



// Output prints the hollow square pattern for the given number of rows and columns
// * * * *

// *     *

// *     *

// * * * *

// function hollow(n){
//     for(i=1;i<=n;i++){
//         let a="";
//         for(let j=1;j<=n;j++){
//             if(j==1||j==n||i==1||i==n){
//                 a+=i+" ";
              
//             }
//             else{
//                 a+="  ";
//             }
//         }
//         console.log(a)
      
//     }
    
  
// }
// hollow(5)


// Given a two positive integers m and n, where m < n, print the sum of all prime numbers between them.
//  For m = 5 and n = 10, 5 and 7 are prime numbers between 5 and 10 so the answer is 12



// function prime(m,n){
//     let isPrime = true;
//     let sum = 0;
//     for(i=m; i<=n; i++){
//         if(i<=1){
//             isPrime = false;
//         }             
//         else{
//            for(j=2; j<=Math.sqrt(i); j++){
//             if(i%j==0){
//                 isPrime = false;
//             }
//            } 
//         }
//         if(isPrime){
//             sum = sum + i;
//         }
//         else{
//             isPrime = true;
//         }
// }
// console.log(sum);
// }

// prime(1,10)


function prime(n){
    if(n<=1){
    return false;
    }
    for(i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
          return false;
    }
    
    } return true;
    
    }

function printPrimesInRange(m, n) {
    let a=[];
for(let i=m;i<=n;i++){
if(prime(i)){
a.push(i)
}

}

let array=0;

 if(a.length>0){
 array=a.join(", ")
 console.log(array)
}
else{
    console.log("no prime in the range");
    
}
}
printPrimesInRange(1, 10) 




