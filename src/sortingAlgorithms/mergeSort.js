
export function getMergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice(); // makes copy of original array
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations); //passes the pointers, the array, and axiliary array
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return; //if start and ending are the same, dont do anything
    const middleIdx = Math.floor((startIdx + endIdx) / 2); //calculate the middle index
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations); //passing the auxiliary array as the main array, and passing the main array as the auxiliary array (look at params)
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations); // middleIdx + 1 is now the starting index and endIx is the ending index
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations); //
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) { //middleIdx is essentially the ending index in the first subarray
        animations.push([i, j]);
        animations.push([i, j]);

        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
        animations.push(animations);
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}