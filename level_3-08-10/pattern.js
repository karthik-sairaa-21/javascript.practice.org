
// let n=3;
// for(i=1;i<=n;i++){
//     let space='';
//     for(j=1;j<=i;j++){
//         space+="*"                    //*
//                                      //** 
//                                     //***
//     }
//     console.log(space);
    
// }




// let n=3;
// for(i=n;i>=1;i--){
//     let space='';
//     for(j=1;j<=i;j++){
//         space+="*" 

//     }
//     console.log(space);
// }



// Print the below pattern of ‘*’ if n = 3
//                    *

//                   * *

//                  * * *

// let n=3;

// for(i=1;i<=n;i++){
//     let gap='';
//     let star='';
//     for(k=1;k<=(n-i);k++){
//         gap+=" ";
//     }
//     for(j=1;j<=i;j++){
//         star+="* "
//     }
//     console.log(gap+star);
    
// }

n=3;
for(let i=0;i<n;i++){
    let gap='';
    let star='';
    for(let j=0;j<i;j++){
        gap+=' ';
    }
    for(let k=0;k<n-i;k++){
        star+='* ';
    }
    console.log(gap+star);
    
}





