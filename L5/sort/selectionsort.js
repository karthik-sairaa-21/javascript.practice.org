function selection(n){
    for(let i=0;i<n.length-1;i++){
       let min=i;
        for(let j=i+1;j<n.length;j++){
            if(n[min]>n[j]){
                min=j;
            }
        }
        if(min!=i){
            [n[i],n[min]]=[n[min],n[i]]
        }

    }
    return n;

}
console.log(selection([11,4,5,6,55,2,3]))


// function selectionobj(n,m){
//     for(let i=0;i<n.length-1;i++){
//         let min=i;
//         for(let j=i+1;j<n.length;j++){
//             if(n[min][m]>n[j][m]){
//                 min=j;
//             }
//         }
//         if(min!=i){
//             [n[i],n[min]]=[n[min],n[i]]
//         }
//     }
//     return n;

// }
// let value=[{age:12},{age:1},{age:4}]
// console.log(selectionobj(value,"age"))


// function selectionsort(n){
// for(let i=0;i<n.length-1;i++){
//     let min=i;
//     for(let j=i+1;j<n.length;j++){
//         if(n[min]>n[j]){
//             min=j;
//         }
//     }
//     if(min!=i){
//         [n[i],n[min]]=[n[min],n[i]]
//     }
// }
// return n;
// }
// console.log(selectionsort(["z","s","e","w","a","r"]))


// function selection(n){
//     a=n.split("")
//     for(let i=0;i<a.length;i++){
//            min=i;
//            for (let j=i+1;j<a.length;j++){
//             if(a[min]>a[j]){
//                 min=j;
//             }
//            }
//            if(min!=i){
//             [a[min],a[i]]=[a[i],a[min]]
//            }
//     }
//     return a;

// }
// console.log(selection("age"))


// function selection(n){
//     for(let i=0;i<n.length;i++){
//         min=i;
//         for(let j=i+1;j<n.length;j++){
//             if(n[min]>n[j]){
//                 min=j;
               
//             }
//         }
//         if(min!=i){
//         [n[i],n[min]]=[n[min],n[i]]
//         console.log(n);
//     }
// }
// }
// selection([21,3,4,5,6,7,8,9])

function selection(n){
    for(let i=0;i<n.length;i++){
        let min=i;
        for(let j=i+1;j<n.length;j++){
            if(n[min]>n[j]){
                min=j;
            }
        }
        if(min!=i){
       [n[i],n[min]]=[n[min],n[i]]
        }
        console.log(n);
    }
   

}
selection([21,3,4,5,6,2,1])