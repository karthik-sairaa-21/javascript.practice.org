// You are given an array of numbers.you have to find whether the array is beautiful or not. A beautiful array 
// is an array whose sum of all numbers is divisible by 2, 3 and 5 Output Description: Print 1 if array is beautiful
//  and 0 if it is not Input: arr = [5, 25, 35, -5, 30] output: 1

// function beautiful(arr){
// let a=0;
//     for(let i=0;i<=arr.length-1;i++){
//         a=a+arr[i]
//     }
//     // console.log(a);
//     if(a%2==0 && a%3==0 && c%5===0){
//         console.log(1);

        
//     }
//     else{
//         console.log(0);
        
//     }
  
// }
// let a=arr = [5, 25, 35, -5, 30]
// beautiful(a)


















function hallowSquare (n) {
//     // Enter your code here
    
    for(let i=1;i<=n;i++){
        a="";
        
        for(let j=1;j<=n;j++){
            if(i==1||i==n ){
                a+=i+" ";
               
            }
            else{
                if(j==1|| j==n){
                    a+="*"+" ";
                }
                else{
                    a+="  ";
                }
               
            }
    }
    console.log(a);
}
}
hallowSquare (5);