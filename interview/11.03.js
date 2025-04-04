// impelment the algorithm to determine is the string has all unqniue values 

a="karthik";
let isdup;
for(let i=0;i<a.length-1;i++){
    isdup=false;
for(let j=i+1;j<a.length;j++){
    if(a[i]==a[j]){
        isdup=true;
    }
}
if(isdup){
    console.log(a[i])
}
}


// most occur element in the array

function mostdup(n){
    
    let mostcount=0;
    let num=null;
    for(let i=0;i<n.length;i++){
        let count=0;
        for(let j=0;j<n.length;j++){
            if(n[i]==n[j]){
                count++;
            }
        }
        if(mostcount<count){
             num=n[i];
             mostcount=count;
        }
    }
    console.log("number"+num,"count"+mostcount);
    

}
mostdup([5,5,4,1,1,1,6,7,8])