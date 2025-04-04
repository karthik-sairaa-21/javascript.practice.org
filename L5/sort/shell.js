// function shell(n,m){
//     a=n.length;
//     gap=Math.floor(a/2)
//     while(gap>0){
//         for(let i=gap;i<a;i++){
//             let temp=n[i]
//             let j=i;
//             while(j>=gap && n[j-gap][m]>temp[m]){
//                 n[j]=n[j-gap]
//                 j-=gap;
//             }
//             n[j]=temp;
//         }
//         gap=Math.floor(gap/2)
//     }
//     return n

// }
// let value=[{age:12},{age:6},{age:3}]
// console.log(shell(value,"age"))

// function shell(n){
//     a=n.length;
//     gap=Math.floor(a/2)
//     while(gap>0){
//         for(let i=gap;i<a;i++){
//             let temp=n[i]
//             let j=i;
//             while(j>=gap && n[j-gap]>temp){
//                 n[j]=n[j-gap]
//                 j-=gap;
//             }
//             n[j]=temp;
//         }
//         gap=Math.floor(gap/2)
//     }
//     return n;
// }
// console.log(shell([9,4,6,1,7]))


// n=3;
// for(let i=0;i<n.length;i++){
//     console.log("1 2 3")
// }


function matrixMultiplication(matrixA, matrixB) {

    // Enter your code here
    if(matrixA==null || matrixB==null || matrixA.length==0 || matrixB.length==0){
        console.log("Invalid Arguments");
        return ;
    }
    if(matrixA[0].length!=matrixB.length){
        console.log("Invalid Arguments");
    }
    for(let i=0;i<=matrixA.length-1;i++){
        if(matrixA[i].length!=matrixA[0].length){
             console.log("Invalid Arguments");
             return;
            
        }
    }
      for(let j=0;j<=matrixB.length-1;j++){
        if(matrixB[j].length!=matrixB[0].length){
                 console.log("Invalid Arguments");
                 return ;
        }
    }
    
    let empty=[];
    
    for(let k=0;k<=matrixA.length-1;k++){
        let row=[];
        for(let l=0;l<=matrixB[0].length-1;l++){
            let sum=0;
            for(let m=0;m<=matrixA[0].length-1;m++){
                sum+=matrixA[k][m]*matrixB[m][l];
            }
            row.push(sum);
        }
        empty.push(row);
    }
    
    for(let n=0;n<=empty.length-1;n++){
        console.log(empty[n].join(' '));
        
    }
    
}

matrixMultiplication([[2, 0, 1], [3, 4, 2]], [[1,2,3],[2,7,5]])


