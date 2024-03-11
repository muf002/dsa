const mergeSort = (array, left, right) => {
    if (left >= right)
        return;
    const mid = Math.floor((left + right) / 2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
};
const merge = (array, left, mid, right) => {
    let len1 = mid - left + 1;
    let len2 = right - mid;
    let arrayL = new Array(len1);
    let arrayR = new Array(len2);
    for (let i = 0; i < len1; i++) {
        arrayL[i] = array[left + i];
    }
    for (let i = 0; i < len2; i++) {
        arrayR[i] = array[mid + i + 1];
    }
    let i = 0;
    let j = 0;
    let k = left;
    while (i < len1 && j < len2) {
        if (arrayL[i] < arrayR[j]) {
            array[k] = arrayL[i];
            i++;
        }
        else {
            array[k] = arrayR[j];
            j++;
        }
        k++;
    }
    while (i < len1) {
        array[k] = arrayL[i];
        i++;
        k++;
    }
    while (j < len2) {
        array[k] = arrayR[j];
        j++;
        k++;
    }
};
const main = (numbers) => {
    let left = 0;
    let right = numbers.length - 1;
    mergeSort(numbers, left, right);
    console.log(numbers);
};
main([2, 3, 2, 2, 2, 3, 4]);
//# sourceMappingURL=mergeSort.js.map