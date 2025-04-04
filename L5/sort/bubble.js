// function bubblesort(n){
//     for(let i=0;i<=n.length-1;i++){
//         for(let j=0;j<n.length-i;j++){
//             if(n[j]>n[j+1]){
//                 [n[j],n[j+1]]=[n[j+1],n[j]]
//             }
//         }
//     }
//     return n;
// }
// console.log(bubblesort([21,3,4,5,6,71,2]))

function bubbleobj(n,m){
for(let i=1;i<=n.length-1;i++){
    for(let j=0;j<n.length-i;j++){
        if(n[j][m]>n[j+1][m]){
            [n[j],n[j+1]]=[n[j+1],n[j]]
                   
        }
    }
}
return n;
}
let value=[{name:"mani",age:12},{name:"saran",age:4},{name:"karthik",age:6}]
console.log(bubbleobj(value,"name"))


// function bubblestr(n){
// for(let i=1;i<=n.length-1;i++){
//     for(let j=0;j<n.length-i;j++){
//         if(n[j]>n[j+1]){
//             [n[j],n[j+1]]=[n[j+1],n[j]]
//         }
//     }
//     // console.log(n);
// }
// return n
// }
// console.log(bubblestr(["f","e","d","c","b","a"]))


// function bubble(n){
// let swaped;
//  do{
//     swaped=false;
//     for(i=0;i<n.length;i++){
//         if(n[i]>n[i+1]){
//       [n[i],n[i+1]]=[n[i+1],n[i]]
//             swaped=true;
//         }  
//     }
//  }
//  while(swaped){
//     console.log(n);
//  }
// }
// bubble([21,2,3,1,2,5])


