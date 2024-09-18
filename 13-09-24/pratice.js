// function nam(r,n){
//     for(i=1; n>=i; n--){
//         console.log(r+"*"+n+"="+ r*n)
//     }

// }
// nam(5,6)



// Given 2 numbers a and b (a < b). Print all the
// numbers between a and b.
// a = 5, b = 8


// function between(a,b){
//     while(a<=b){
//         a=a+1
//     console.log(a);    
// }
// }
//  between(5,9)


// function Tood(a){
//     let c="";
//     for(i=1;i<=a; i++){
//         c=c+a;
//     }
//     console.log(c)
// }
// Tood(5)

// function nam(n,c) {
//     for(i=1; c>=1;c--){
//         Total=n*c
//         console.log(n+"*"+c+"="+Total)
//         // c=c-1
//     }
    
// }
// nam(10,9)
function table(n,m){
    let i=1;
    while(i<=m){
        console.log(n + " * " + m + " = " + i * n);
        m--;

    }
}
table(2,10);


function table(n,m){
    let i=1;
    while(i<=m){
        console.log(n + " * " + i + " = " + i * n);
        i++;

    }
}
table(2,10);