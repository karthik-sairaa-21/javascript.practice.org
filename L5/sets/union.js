function union(a,b){
    for(let i=0;i<b.length;i++){
        is_union=false;
        for(let j=0;j<a.length;j++){
            if(b[i]==a[j]){
                is_union=true;
                break;
            }
        }
        if(!is_union){
            a.push(b[i])
        }
    }
    return a;

}
console.log(union([1,2,3,4,5,6,7,8],[4,5,6,7,8,9,10]))

