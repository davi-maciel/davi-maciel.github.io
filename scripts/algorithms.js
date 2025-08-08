export function quicksort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const equal = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return [...quicksort(left), ...equal, ...quicksort(right)];
}

export function mergesort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergesort(arr.slice(0, mid));
    const right = mergesort(arr.slice(mid));
    const merged = [];
    let i = 0, j = 0;
    while (i < left.length || j < right.length) {
        if (j === right.length || (i < left.length && left[i] <= right[j])) {
            merged.push(left[i++]);
        } else {
            merged.push(right[j++]);
        }
    }
    return merged;
}

export const ALL_ALGOS = {quicksort, mergesort};