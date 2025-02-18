"use stric";
function mergeSort(arr){
    /* 
    -get list
    -verify if has one or 0 e lements
    -if has more than one, divide the list in two list
    -return the list sorted
    */
    if (arr.length <=1){
        return arr
    }

    let [leftHalf, rightHalf] = split(arr);
    let left = mergeSort(leftHalf);
    let right = mergeSort(rightHalf);

    return merge(left, right);

}

function split(arr){
    /*
    get the array and find the midpoint
    for left return the array from de start to the midpoint
    for right return de array from the midpoint to the end
    */
    let midpoint = Math.floor(arr.length / 2);
    let left = arr.slice(0,midpoint);
    let right = arr.slice(midpoint);

    return [left, right];
};

function merge(left, right){
    /*
    merge two list(arrays), sorting them in the process
    returns a new merge list
    */
    let newArr = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArr.push(left[i]);
            i++;
        }else{
            newArr.push(right[j]);
            j++;
        }
    };

    while (i < left.length) {
        newArr.push(left[i]);
        i++;
    };

    while (j < right.length) {
        newArr.push(right[j]);
        j++;
    }

    return newArr;
};

const a = [8,6,1,2,10,5,3,7,4,9]
let result = mergeSort(a)
console.log(result)
