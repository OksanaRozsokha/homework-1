let firstArr = [NaN, undefined, -4, -5, -3],
    secondArr = [0,undefined, NaN, 3, 5, -3],
    thirdArr = [{}, 'jjf', 5, '22', 7.4];

let max;
let min;

function initialValues(arr) {
    for(let i = 0; i < arr.length; i++) {
        if ((!isNaN(arr[i])) && (typeof arr[i] === 'number')) {
            max = arr[i];
            min = arr[i];
            break;
        }
    }
}

function findMinMaxSum(arr) {
    initialValues(arr);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if ((!isNaN(arr[i])) && (typeof arr[i] === 'number')) {

            sum += arr[i];

            if (max < arr[i]) {
                max = arr[i];
            }

            if (min > arr[i]) {
                min = arr[i];
            }
        }
    }

    return {
        'the max value is': max,
        'the min value is': min,
        'the sum value is': sum
    }
}

console.log(findMinMaxSum(firstArr));
console.log(findMinMaxSum(secondArr));
console.log(findMinMaxSum(thirdArr));
