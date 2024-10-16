function add(number) {
    if(!number)
        return 0;

    let delimiter = ',';
    if (number.startsWith('//')) {
        const parts = number.split('\n');
        delimiter = parts[0].substring(2);
        number = parts.slice(1).join('\n');
    }

    const negatives = [];
    const numList = number.split(new RegExp(`[${delimiter}\\n]`));
    let total = 0;

    for (let num of numList) {
        const parsedNum = parseInt(num);
        if (parsedNum < 0) {
            negatives.push(parsedNum);
        }
        total += parsedNum || 0;
    }

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return total;
}

// const res = add("1,2\n3,4\n5,6,7\n8");
// const res = add("//*\n1*2*3*4");
// console.log(res);
try {
    // console.log(add("-1,2,-3"));
    console.log(add("//|\n1|2|3|-4"));
} catch (error) {
    console.error(error.message);
}
