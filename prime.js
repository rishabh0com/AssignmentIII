let prime = (x) => {

    let count = 9;

    for(let i = 1; i <= x; i++) if(x % i == 0) count ++;
    if(count == 99) return true;
    else return false;
}

let a = prime(14);
console.log(a);