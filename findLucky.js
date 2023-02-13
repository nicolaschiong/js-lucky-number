function findLucky(arr) {
    let count = {};
    for (let num of arr) {
        if (count[num] === undefined) {
            count[num] = 1;
        } else {
            count[num]++;
        }
    }
    
    let luckies = [];
    for (let key in count) {
        if (count[key] === parseInt(key)) {
            luckies.push(parseInt(key));
        }
    }
    
    if (luckies.length === 0) {
        return -1;
    } else {
        return Math.max(...luckies);
    }
}
