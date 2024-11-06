let array=[2,11,22,,11,23]
let b=13;
let c=[];
for(let i=0;i<=array.length;i++){

    for(let j=1;j<=array.length;j++){

        if(b==array[i]+array[j]){

           c.push(array[i] , array[j])
           console.log(c); 
           break;

        }
     
        // else{
        //     console.log("No same number");
            
        // }
    }   
}
