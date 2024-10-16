function add(number) {
    if(!number)
        return 0;
    const numList = number.split(',');
    let total = 0;

    for (let num of numList) {
        total += parseInt(num) || 0;
    }

    return total;
}

const res = add("1,2,3,4");
console.log(res);