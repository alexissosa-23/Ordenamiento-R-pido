function partitionHoare(arr, low, high) {
    let pivot = arr[Math.floor((low + high) / 2)];
    let i = low - 1;
    let j = high + 1;
    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);
        do {
            j--;
        } while (arr[j] > pivot);
        if (i >= j) {
            return j;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambiar elementos
    }
}

function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partitionHoare(arr, low, high);
        quicksort(arr, low, pivotIndex);
        quicksort(arr, pivotIndex + 1, high);
    }
    return arr;
}

const arr = [3, 6, 8, 10, 1, 2, 1];
console.log('Array Original:', arr);
const sortedArray = quicksort(arr);
console.log('Array Ordenado:', sortedArray);
