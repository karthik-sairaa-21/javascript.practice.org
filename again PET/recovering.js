// third max in arry 
function secondmax(n){
        max=n[0];
        for(let i=1;i<n.length;i++){
            if(max<n[i]){
                max=n[i]
            }
        }
        console.log(max);
        
        
        let secondMax = n[0];
        for(let j=1;j<n.length;j++){
            if(n[j]>secondMax && n[j] !==max){
                secondMax= n[j];
            }
        }
        console.log(secondMax);
        
        let thirdMax=n[0];
        for(let k=1;k<n.length;k++){
            if(n[k]>thirdMax && n[k]!==secondMax && n[k]!==max){
                thirdMax=n[k]
            }
        }
        console.log(thirdMax)
    }
    secondmax([2,4,12,11,33,10])


// Find the Kth largest value in the given array.(Without sort)


// function duplicate(n){
//     let seen= new Set();
//     for(let i=0;i<n.length;i++){
//         if(seen.has(n[i])){
//             console.log(n[i])
//             return;
//         }
//         seen.add(n[i])
//     }
//     console.log("No duplicate found")

// }
// duplicate("abcdb")

// function duplicate(n){
//     for(let i=0;i<n.length;i++){
//         for(let j=i+1;j<n.length;j++){
//             if(n[i]==n[j]){
//                 console.log(n[i])
//                 return ;
//             }
//         }
//     }
//     console.log("No duplicate")
// }
// duplicate("abcdc");



// function max(n){
//     let empty=n[0];
//     for(let i=0;i<n.length;i++){
//         if(empty<n[i]){
//             empty=n[i]
//         }
//     }

//     let empty2=n[0]
//     for(let j=0;j<n.length;j++){
//         if(empty2<n[j] && n[j]!=empty){
//             empty2=n[j]
//         }
//     }

//     let empty3=n[0]
//     for(let k=0;k<n.length;k++){
//         if(empty3<n[k] && n[k]!=empty2 && n[k]!=empty){
//             empty3=n[k]
//         }
//     }
//     console.log(empty3);
//     console.log(empty2);
//     console.log(empty);

// }
// max([2,3,4,5,6,7,8])



function getCount(arr) {
    let n = arr.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        let count = 0;
        
        for (let j = 0; j < n; j++) {
            if(arr[i]!=arr[j]){
            if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
              count++;
            }
        }
        }

        result.push(count);
    }

    return result;
}

// Example Usage
let arr = [1, 3, 4, 2, 6];
console.log(getCount(arr));



// Analyze the diferente acelested letters of the alphabet given a string Given an input sequence of words, find the Odd One Out' by checking the difference between adjacent letters. The element faving a distinct difference is the Odd One Out 
// Example series ["ACB", "BDC", "CED", "DEF"] 




