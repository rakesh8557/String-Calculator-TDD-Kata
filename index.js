function add(number) {
    if(!number)
        return 0;

    let delimiter = ',';
    if (number.startsWith('//')) {
        const parts = number.split('\n');
        delimiter = parts[0].substring(2);
        number = parts.slice(1).join('\n');
    }

    const numList = number.split(new RegExp(`[${delimiter}\\n]`));
    let total = 0;

    for (let num of numList) {
        total += parseInt(num) || 0;
    }

    return total;
}

// const res = add("1,2\n3,4\n5,6,7\n8");
const res = add("//*\n1*2*3*4");
console.log(res);