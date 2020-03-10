function map(arr, someFunction) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
    newArray[i] = someFunction(arr[i]);
    }
    return newArray;
}

console.log(map([1,3,5,8], num=>num * 2));