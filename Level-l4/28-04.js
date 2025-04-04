// Given an array of strings, find the string which comes first alphabetically without using any library functions
// function find(n){
//     let a=n[0]
//     for(let i=1;i<=n.length;i++){
//         if(a>n[i]){
//             a=n[i]
//         }
//     }
//     console.log(a);


// }
// find(["a","e","g","h","j","k","i","u","y","t","r","e","w",'p'])


// function find(n){
//     let a=n.sort()                                    ??????????????????????????????????????
//    console.log(a);



// }
// find(["a","e","g","h","j","k","i","u","y","t","r","e","w",'p'])


// Given an array of strings arr and another string s, check if s in present in arr
// function find(n,find){
//     isstr=false;
//     for(let i=0;i<=n.length;i++){
//             if(find==n[i]){
//                 isstr= true;
//                 // console.log("yes")
//                 // break;
//             }
//     }
//     if(isstr){
//         console.log("yes");

//     }
//     else{
//         console.log("no");

//     }


// }
// find(["t","r","e","w",'p'],"y")






// Given an array of positive integers sorted in ascending order (increasing order, 1st element is the smallest, Nth element is the largest), 
// implement the binary search algorithm.



function binarySearch(arr, target) {
    let left = 0;            // Start of the search range
    let right = arr.length - 1; // End of the search range

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Find the middle index

        if (arr[mid] === target) {
            // return mid; // Found the target, return its index
            console.log(mid);
            
        }

        if (arr[mid] < target) {
            left = mid + 1; // Narrow search to the right half
        } else {
            right = mid - 1; // Narrow search to the left half
        }
    }

    return -1; // Target not found
}

// // Example usage:
// // const numbers = [1, 3, 5, 7, 9, 11, 13];
// // const target = 1;
// result = binarySearch([1, 3, 5, 7, 9, 11, 13], 13);





// function find(n, target) {
//     let left = 0;
//     let right = n.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)

//         if (n[mid] == target) {
//             console.log(mid)
//             break;
           
//         }
//         else if (n[mid] < target) {
//             left = mid+1; 
//         }
//         else{
//             right = mid-1;
//         }
//     }
//     return -1

// }
// // const numbers = [1, 3, 5, 7, 9, 11, 13];
// // const target = 1;
// const result = find ([1, 3, 5, 7, 9, 11, 13], 1);




// Given a array of integers, count of number of occurrences of the maximum element in the array 
// Sample Input: 3 2 1 3

// function maxNumber(n){
//     let a=n[0]
//     for (let i=1;i<=n.length-1;i++){
//         if(a>n[i]){
//             a=n[i]
//         }
//     }
//     // console.log(a);
    
//     let count =0;
//     for(let j=0;j<=n.length-1;j++){
//         if(a==n[j]){
//             count++
//         }
//     }
//     console.log(count);
    

// }
// maxNumber([3, 2, 3,2,2])

// pattern

// 1         1

// 2 2     2 2

// 3 3 3 3 3 3


// function pattern(n){
//     for(let i=1;i<=n;i++){
//              let a="";
//              for(let j=1;j<=i;j++){
//                    a+=i+" ";
//              }
//              let space=2*(n-i)  //2*2=4 //2*1=2 //2*0=0
//             for(let j=1;j<=space;j++){
//                      a+="  ";
//             }
//             for(let j=1;j<=i;j++){
//                 a+=i+" ";
//           } 
//              console.log(a);       
//     }  
// }
// pattern(3)



// 1
// 2 3
// 4 5 6

// function pattern(n){
//     let count=0;
//     let num=1;
//     for(let i=1;i<=n;i++){
//         a="";

//     for(let j=1;j<=i;j++){
//         a+=num+" ";
//         count+=num;
//         num++;
//     }    
//     console.log(a);
//     }
//     console.log(count);
    

// }
// pattern(4)

















