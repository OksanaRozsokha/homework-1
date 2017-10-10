var firstArr = [NaN, undefined, -4, -5, -3],
    secondArr = [0,undefined, NaN, 3, 5, -3],
    thirdArr = [{}, 'jjf', 5, '22', 7.4];

function findMinMaxSum(arr) {
    var min;
    var max;
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if ((!isNaN(arr[i])) && (typeof arr[i] === 'number')) {

            sum += arr[i];

            if ((max < arr[i]) || ( typeof max === 'undefined')) {
                max = arr[i];
            }

            if ((min > arr[i]) || ( typeof min === 'undefined')) {
                min = arr[i];
            }
        }
    }

    return {
        max: max,
        min: min,
        sum: sum
    }
}

console.log(findMinMaxSum(firstArr));
console.log(findMinMaxSum(secondArr));
console.log(findMinMaxSum(thirdArr));