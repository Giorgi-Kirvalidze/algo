function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }
}

const arr = [8, 20, -2, 4, -6]

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (let k = i - 1; k >= 0; k--) {
            if (arr[k] > temp) {
                arr[k + 1] = arr[k]
                arr[k] = temp
            } else {
                arr[k + 1] = temp
                break;
            }
        }
    }
    return arr;
}