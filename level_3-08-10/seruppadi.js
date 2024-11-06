// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;
//     }
//     return a;
// }

// function coco(c,d){
//     let correct=gcd(c,d)
//     if(correct==1){
//         console.log("co-prime");

//     }
//     else{
//         console.log("Not a co-prime");

//     }
// }
// coco(8,15)


// let n=6;
// for(i=1;i<=n;i++){
//     let a=""
//     let row=""
//         if(i%2!==0){
//             a+=i;
//             console.log(a)
//         }
//         else{
//             for(j=1;j<=i;j++){
//             row+="*";
//         } 
//         console.log(row); 
//     }

// }

function fibi(n){
    let a=0;
    let b=1
    let sum=0;
    let empty=[];
    for(i=1;i<=n;i++){
     empty.push(a);
        sum=a+b;
        a=b;
        b=sum;
    }
    console.log(empty[n-1]);


}
fibi(10)



// function fibi(n) {
//     let a = 0;
//     let b = 1;
//     let sum = 0;
//     let empty = []
//     let e = []
//     for (i = 1; i <= n; i++) {
//         empty.push(a)
//         sum = a + b;
//         a = b;
//         b = sum;
//     }

//     for (let j = 1; j <= empty.length - 1; j++) {
//         if (empty[j] % 2 == 1) {
//             e.push(empty[j]);

//         }
//     }

//     if (e.length > 0) {
//         console.log(e[3])
        
//     } 
  
// }
// fibi(10)


// function nam(n){
//     let sum=0;
//     let a=0;
//     let b=1;
//     let mul=0;

//     for(i=1;i<=n;i++){
//            a+=i;
//            sum.push(a);
        
//     }
//     for(let j=1;j<=n;j++){
//         b*=j
//         mul.push(b);



//     }
//    if(mul==sum){
//     console.log("Karthi");
    
//    }
//    else{
//     console.log("No Equal");
    
//    }
    
   
    

// }
// nam(5)
