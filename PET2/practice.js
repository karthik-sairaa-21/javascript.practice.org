
// function binary(arr,target){
//     let left=0;
//     let right=arr.length-1

//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]==target){
//             return mid;
//         }
//         else if(arr[mid]<target){
//             left=mid+1
//         }
//         else{
//             right=mid-1
//         }

//     }
//     return -1

// }
// console.log(binary([1,3,5,7,9,10,11,43,55],10))


// function isPrime(n){
//     if(n<=1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true;

// }

// function find(a,b){
//     let empty=[]
//     for(let i=a;i<b;i++){
//         if(isPrime(i)){
//             empty.push(i)
//         }
//     }
//     console.log(empty.join(","))

// }
// find(5,15)


// gcd

// function gcd(a,b){
//     let mul=a*b

//     for(let i=mul;i>0;i--){
//         if(a%i==0 && b%i==0){
//             console.log(i)
//             break;
//         }
//     }

// }
// gcd(12,8)

// function lcm(a,b){
//     let mul=a*b

//     for(let i=1;i<mul;i++){
//         if(i%a==0 && i%b==0){
//             console.log(i)
//             break;
//         }
//     }

// }
// lcm(12,8)



// function fibi(n){
//     empty=[]
//   let a=0;
//   let b=1;
//   let sum=0;
//   for(let i=0;i<=n;i++){
//         empty.push(a);
//         sum=a+b;                 
//         a=b;
//         b=sum;
      
//   }
//   console.log(empty)

// }
// fibi(5)


// function pattern(n){
//  for(let i=0;i<n;i++){
//     let a=""
//     for(let j=0;j<=n-i;j++){
//         a+=" "
//     }
//     for(let k=0;k<=i;k++){
//         a+="*"+" "
//     }
//     console.log(a)
//  }


//  for(let i=n-1;i>1;i--){
//     let a=""
//     for(let j=1;j<n-i;j++){
//         a+=" "
//     }
//     for(let k=1;k<=i;k++){
//         a+="*"+" "
//     }
//     console.log(a)
//  }

    
// }
// pattern(3)