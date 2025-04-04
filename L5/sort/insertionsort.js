function insertionSort(n){
    for(let i=1;i<n.length;i++){
        j=i-1;
        temp=n[i]
        while(j>=0 && n[j]>temp){
            n[j+1]=n[j]
            j--;
        }
        n[j+1]=temp;
    }
return n;
}
console.log(insertionSort([21,2,41,4,3,6]))


function insertionSort(n){
    // a=n.split("")
       for(let i=0;i<n.length;i++){
        temp=n[i]
        let j=i-1
        while(j>=0 && n[j].age>temp.age){
            n[j+1]=n[j]
            j--;
        }
        n[j+1]=temp;

       }return n;
}
// let value=[{age:10},{age:3},{age:8}]
console.log(insertionSort("karthik"))
console.log(insertionSort(value))



function insertion(n){
    for(let i=1;i<n.length;i++){
        j=i-1;//0
        temp=n[i]
        while(j>=0 && n[j]>temp){
            n[j+1]=n[j];
            j--;
        }
        n[j+1]=temp;
    }
    console.log(n);
}
insertion([21,3,4,5,6,7,8,1])
