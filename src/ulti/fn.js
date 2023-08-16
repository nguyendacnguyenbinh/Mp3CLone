export const getArrSlider = (start, end, number) => {
    let arr = [];
    if (start < end) {
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
    }

    if (start > end) {
        for (let i = start; i < number; i++) {
            arr.push(i);
        }
        for (let i = 0; i <= 3 - arr.length; i++) {
            arr.push(i);
        }
    }

    return arr;
};
