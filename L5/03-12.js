// Matric

// let a=[[1,2],[3,4]]
// let b=[[1,2],[3,4]]
// let lenA=a.length;
// let lenB=b.length;
// if(lenA==lenB && a[0].length==b[0].length){
// let wholearry=[]
// for(let i=0;i<=lenA-1;i++){
//     let rowarry=[];
//     for(let j=0;j<=a[i].length-1;j++){
//         let add=a[i][j]+b[i][j]
//         rowarry.push(add)

//     }
//     wholearry.push(rowarry)
// }
// console.log(wholearry);
// }



// bubble sort

// function bubble(n){
// for(let i=1;i<=n.length-1;i++){
//     for(let j=0;j<n.length-1;j++){
//       if(n[j]>n[j+1]){
//         [n[j],n[j+1]] = [n[j+1],n[j]]
//       }
//     }
// }
// return n;

// }
// const n=[21,2,32,22,44,55,6];
// const a=bubble(n)
// console.log(a);


function bubbleobj(n){
    
        for(let j=0;j<n.length-1;j++){
            if(n[j].age>n[j+1].age){
                [n[j],n[j+1]]=[n[j+1],n[j]]
            }
    }
    return n;
}
console.log(bubbleobj([{name:"karthik",age:22,mark:98},{name:"vajesh",age:11,mark:22}]))





