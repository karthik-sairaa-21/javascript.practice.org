// function bubblesort(n){
//     let swaped;
//   do{
//     swaped=false;
//     for(let i=0;i<n.length-1;i++){
//         if(n[i]>n[i+1]){
//             [n[i],n[i+1]]=[n[i+1],n[i]]
//             swaped=true;
//         }
//     }
//   }
//   while(swaped){
//     console.log(n);

//   }

// }
// bubblesort([21,3,4,5,6,7,1])


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
    console.log(n);


}
selection([21,2,6,5,4,3,2])


// function insertion(n){
//     for(let i=1;i<n.length;i++){
//         j=i-1;
//         temp=n[i]
//         while(j>=0 && n[j]>temp){
//             n[j+1]=n[j]
//             j--
//         }
//         n[j+1]=temp;
//     }
// console.log(n);
// }
// insertion([21,3,4,5,6,7])


// function shell(n){
//     a=n.length
//     gap=Math.floor(a/2)
//     while(gap>0){
//         for(let i=gap;i<a;i++){
//             let temp=n[i]
//             let j=i;
//             while(j>=gap && n[j-gap]>temp){
//                 n[j]=n[j-gap]
//                 j-=gap
//             }
//             n[j]=temp
//         }
//         gap=Math.floor(gap/2)
//     }
//     return n;


// }
// console.log(shell([8,7,1,2,3,4,5,6]));

function most(m) {
   let newcount = 0
    for (let i = 0; i < m.length; i++) {
        let count = 0
        for (let j = 0; j < m.length; j++) {
            if (m[i] == m[j]) {
                count++
            }
        }

      
        if (count > newcount) {
            newcount = count
            occur= m[i]
        }
    }
    return { occur, newcount };

}
console.log(most([3, 4,3,4,3,3]))

// function interset(m,n){
//     empty=[]
//     for(let i=0;i<n.length;i++){
//         for(j=0;j<m.length;j++){
//             if(m[i]==n[j]){
//                empty.push(n[i])
//             }
//         }
//     }
//     console.log(empty);
    

// }
// interset([3,4,5,6,7],[3,7,4,8,9])

// function union(n,m){
//     for(let i=0;i<m.length;i++){
//         swaped=false
//         for(let j=0;j<n.length;j++){
//             if(m[i]==n[j]){
//                 swaped=true
//                 break;
//             }
//         }
//        if(!swaped){
//         n.push(m[i])
//        }
//     }
//     console.log(n);
    

// }
// union([9,2,1,4,6],[21,4,5,6,8,9])


// function insertion(n){
//     for(let i=1;i<n.length;i++){
//         temp=n[i]
//         j=i-1
//         while(j>=0 && n[j]>temp){
//             n[j+1]=n[j]
//             j--
//         }
//         n[j+1]=temp
//     }
//     return n.join(" ");

// }
// console.log(insertion([3,91,13,1]))



// let a = [[1, 2],
// [3, 4]];
// let b = [[1, 2, 3],
// [3, 4, 1]];

// function matric(a,b){
//     if(!a.length || !b.length){
//         return null
//     }
//     if(a[0].length !=b.length){
//         return null;
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
//     let empty=[]
//         for (let i = 0; i < a.length; i++) {
//             let row = []
//             for (let j = 0; j < b[0].length; j++) {
//                 let sum = 0;
//                 for (let k = 0; k < b.length; k++) {
//                     sum += a[i][k] * b[k][j]
                    
//                 }
//                 row.push(sum)
                
//             }
//             empty.push(row)

//     }
//     total(empty)
// }
// matric()
// function total(k){
//     for(let i=0;i<k.length;i++){
//         console.log(k[i].join(" "));
        
//     }
// }


// let a = [[1, 2],
// [3, 4]];
// let b = [[1, 2, 3],
// [3, 4, 1]];

// function add(a,b){
//     if(!a.length || !b.length){
//         return null 
//     }
//     if(a.length!=b.length){
//         console.log("invalid")
//         return
//     }
//     for(let i=0;i<a.length;i++){
//         if(a[0].length!=b[0].length){
//             console.log("invalid");
//             return
            
//         }
//     }
//     empty=[]
//     for(let i=0;i<a.length;i++){
//         row=[]
//         for(let j=0;j<a[0].length;j++){
//             let sum=a[i][j]+b[i][j]
//             row.push(sum)
//         }
//         empty.push(row)

//     }
//     console.log(empty);
     
    

// }
// add(a,b)