var firstArr = [-1, undefined, -4, -5, -3],
    secondArr = [1, NaN, 3, 5, -3],
    thirdArr = [2, 5, '22', 7.4];

function findMax(arr) {
    var max = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if (!isNaN(arr[i]) && typeof arr[i] === "number" ){
            if (max < arr[i]) {
                max = arr[i];
            }
        }
    }

    return max;
}

function findMin(arr) {
    var min = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if (!isNaN(arr[i]) && typeof arr[i] === 'number' ){
            if (min > arr[i]) {
                min = arr[i];
            }
        }
    }

    return min;
}

function findSum(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }

    return sum;
}

console.log('the MAX value of first array: ', findMax(firstArr));
console.log('the MAX value of second array: ', findMax(secondArr));
console.log('the MAX value of third array: ', findMax(thirdArr));

console.log('the MIN value of first array: ', findMin(firstArr));
console.log('the MIN value of second array: ', findMin(secondArr));
console.log('the MIN value of third array: ', findMin(thirdArr));

console.log('the SUM value of first array: ', findSum(firstArr));
console.log('the SUM value of second array: ', findSum(secondArr));
console.log('the SUM value of third array: ', findSum(thirdArr));
