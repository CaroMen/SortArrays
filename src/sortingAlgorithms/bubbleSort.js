export function bubbleSortAnimation(array) {
    const animations = [];
    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(array, animations) {
    let endOfArray = array.length - 1;

    while (endOfArray >= 1) {
        for (let j = 0; j < endOfArray; j++) {
            if (array[j] > array[j + 1]) {
                animations.push([j, j + 1]);
                animations.push([j, j + 1]);
                animations.push([j, array[j + 1]]);
                animations.push([j + 1, array[j]]);

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }

        endOfArray--;
    }
}
