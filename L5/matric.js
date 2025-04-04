// Matric
// let a=[[1,2],[3,4]]
// let b=[[1,2],[3,4]]
// let lenA=a.length;
// let lenB=b.length;
// console.log(a[0])
// if(lenA==lenB && a[0].length==b[0].length){
// let wholearry=[]
// for(let i=0;i<lenA;i++){
//     let rowarry=[];
//     for(let j=0;j<a[i].length;j++){
//         let add=a[i][j]+b[i][j]
//         rowarry.push(add)

//     }
//     wholearry.push(rowarry)
// }
// console.log(wholearry);
// }


// function bubbleobj(str){
//     let n=str.split('')
//       let swaped;
//       do{ 
//          swaped=false;
//         for(let i=0;i<n.length-1;i++){
//             if(n[i]>n[i+1]){
//             [n[i],n[i+1]]=[n[i+1],n[i]]
//               swaped=true;
//             }
//         }

//       }
//       while(swaped){
//         return n.join("");
//       }
// }
// console.log(bubbleobj("karthikeyan"))




// let a = [[1, 2], [3, 4],[4,5]]; // Matrix A
// let b = [[2, 2], [3, 4],[4,5]];
// let lenA=a.length;
// let lenB=b.length;
//     if(a.length==b.length && a[0].length==b[0].length && a[1].length==b[1].length){ 
//         empty=[] 
//          for(let i=0;i<lenB;i++){
//             empty1=[]
//             for(let j=0;j<b[i].length;j++){
//                 add=a[i][j]+b[i][j]
//                 empty1.push(add)
//             }
//             empty.push(empty1)
//          }
//          console.log(empty);


// }       


let a = [[1, 2],
[3, 4]];
let b = [[1, 2, 3],
[3, 4, 1]];

function find(a, b) {
    if (!a.length || !b.length) {
        return null
    }
    if (a[0].length != b.length) {
        return null
    }
    for (let i = 0; i < a.length; i++) {
        if (a[0].length != a[i].length) {
            return null
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (b[0].length != b[i].length) {
            return null
        }
    }
    let empty = []
    for (let i = 0; i < a.length; i++) {
        let row = []
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < b.length; k++) {
                sum += a[i][k] * b[k][j]
                
            }
            row.push(sum)
            
        }
        empty.push(row)


       

    }
    output(empty)

}
find(a, b)
function output(mat) {
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i].join(" "));

    }
}




// let a = [[1, 2],
// [3, 4]];
// let b = [[1, 2, 3],
// [3, 4, 1]];

// function find(n){
//     if(!a.length||!b.length){
//         return null
//     }
//     if(a[0].length != b.length){
//         return null
//     }
//     for(let i=0;i<a.length;i++){
//         if(a[0].length!=a[i].length){
//             return null
//         }
//     }
//     for(let i=0;i<a.length;i++){
//         if(b[0].length!=b[i].length){
//             return null
//         }
//     }
//    let empty=[]
//     for (let i = 0; i < a.length; i++) {
//         let row = []
//         for (let j = 0; j < b[0].length; j++) {
//             let sum = 0;
//             for (let k = 0; k < b.length; k++) {
//                 sum += a[i][k] * b[k][j]
                
//             }
//             row.push(sum)
            
//         }
//         empty.push(row)


//     }
//     output(empty)


// }
// find()
// function output(m){
//     for(let i=0;i<m.length;i++){
//         console.log(m[i].join(" "));
        
//     }
// }




// // addtion matrix
// function addMatrices(a, b) {
//     // Check if both inputs are arrays
//     if (!Array.isArray(a) || !Array.isArray(b)) {
//         return "Error: Inputs must be 2D arrays";
//     }

//     let lenA = a.length;
//     let lenB = b.length;

//     // Check if both matrices have same number of rows
//     if (lenA !== lenB) {
//         return "Error: Matrices must have the same number of rows";
//     }

//     let wholeArray = [];

//     for (let i = 0; i < lenA; i++) {
//         // Check if row exists and is an array

//         if (!Array.isArray(a[i]) || !Array.isArray(b[i])) {
//             return `Error: Row ${i} is not an array`;
//         }

//         // Check if both rows have the same number of columns
//         if (a[i].length !== b[i].length) {
//             return `Error: Row ${i} has different column lengths`;
//         }

//         let rowArray = [];

//         for (let j = 0; j < a[i].length; j++) {
//             // Ensure values are numbers before adding
//             if (typeof a[i][j] !== "number" || typeof b[i][j] !== "number") {
//                 return `Error: Non-numeric value found at row ${i}, column ${j}`;
//             }

//             rowArray.push(a[i][j] + b[i][j]);
//         }

//         wholeArray.push(rowArray);
//     }

//     return wholeArray;
// }

// // Example Usage
// let matrix1 = [[1, 2], [3, 4]];
// let matrix2 = [[1, 2], [3, 4]];
// console.log(addMatrices(matrix1, matrix2)); // ✅ [[2, 4], [6, 8]]

// // Test cases
// console.log(addMatrices([[1, 2], [3]], [[1, 2], [3, 4]])); // ❌ Row length mismatch
// console.log(addMatrices([[1, 2], [3, "x"]], [[1, 2], [3, 4]])); // ❌ Non-numeric value
// console.log(addMatrices("hello", [[1, 2], [3, 4]])); // ❌ Not a 2D array
// console.log(addMatrices([[1, 2], [3, 4]], [[1, 2]])); // ❌ Different row lengths


