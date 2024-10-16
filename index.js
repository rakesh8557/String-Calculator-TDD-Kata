function add(number) {
    if(!number)
        return 0;
    const numList = number.split(/[\n,]/);
    let total = 0;

    for (let num of numList) {
        total += parseInt(num) || 0;
    }

    return total;
}

const res = add("1,2\n3,4\n5,6,7\n8");
console.log(res);