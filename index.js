// Add your functions here
function map(arr, func) {
    let newArr = [];

    for (let i = 0; i < arr.length; i ++) {
        let el = arr[i];
        newArr.push(func(el));
    }

    return newArr;
}

function reduce(arr, func, start) {
    let val = (!!start) ? start : arr[0];
    let i = (!!start) ? 0 : 1;

    for (; i < arr.length; i++) {
        val = func(arr[i], val)
    }

    return val;
}