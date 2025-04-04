// function intersection(a,b){
//     correct=[]
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<b.length;j++){
//             if(a[i]==b[j] && !correct.includes(a[i])){
//                correct.push(a[i])
//             }
//         }
//     }
//     return correct;

// }

// console.log(intersection([1,2], [5,6,72,2,8,9]));



function inter(a,b){
    let correct=new Set();
    let setb= new Set(b)
    for(let i=0;i<a.length;i++){
        if(setb.has(a[i]) ){
          correct.add(a[i])
        }
    }
    console.log([...correct])

}
inter([1,2,3,4,5,6,5],[4,5,6,7,89,9])