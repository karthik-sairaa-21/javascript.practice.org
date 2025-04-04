function dupulicate(n) {
    origin = []
    for (let j = 0; j < n.length; j++) {
        dupulicate = false;
        for (let i = 0; i < n.length; i++) {
                   if(n[j]==origin[i]){
                        dupulicate=true;
                   }
        }
        if(!dupulicate){
            origin.push(n[j])
        }
    }
    return origin;

}

console.log(dupulicate([21, 34, 5, 5, 5, 6, 7, 2]))
