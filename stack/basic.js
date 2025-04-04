// function factorial(n) {
//     if (n < 0) {
//         return -1;
//     }
//     if(n === 0 || n == 1) {
//         console.log(n);
//         return 1;
//     }
//     else {
//         let result =  n * factorial (n -1);
//         console.log(result);
//         return result;
//     }
// }

// result = factorial(5);
// console.log(result);


function nam(n){
    if(n<0){
        return -1;
    }
    else if(n === 0){
        return 1;
    }
    else{
            
            let str="";
        for(let i=1;i<n;i++){

            str+="*"
            
            
        }
        console.log(str);
        
        nam(n-1);
    }
}
nam(5)