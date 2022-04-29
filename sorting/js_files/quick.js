async function partitionLomuto(left, right) {
    let i = left - 1;
    for (let j = left; j <= right - 1; j++) {
        console.log({ i, j, left, right })
        setColor(j, COLOR.compare);
        setColor(right, COLOR.compare);
        await waitforme(TIME.delay);

        if (BARS[j] < BARS[right]) {

            //setColor(i, COLOR.touched)
            setColor(j, COLOR.touched)
            setColor(right, COLOR.touched)
            await waitforme(TIME.delay);
            i++;
            swap(i, j);
            await waitforme(TIME.delay * 2);
        } else {
            //setColor(i, COLOR.touched)
            setColor(j, COLOR.touched)
            setColor(right, COLOR.touched)
        }
        setColor(i + 1, COLOR.pivot);

        await waitforme(TIME.delay);
        if (i >= left) { //important
            setColor(i, COLOR.touched);
            await waitforme(TIME.delay);

        } else if (i == j) {
            setColor(i, COLOR.finalised);
            await waitforme(TIME.delay);
        }
        if (j >= left && j != i + 1) {
            setColor(j, COLOR.touched);
        }
        if (right > left) {
            setColor(right, COLOR.touched);
        }
        await waitforme(TIME.delay);
    }
    i++;
    await waitforme(TIME.delay);
    swap(i, right);
    setColor(right, COLOR.touched);
    //await waitforme(TIME.delay); 
    setColor(i, COLOR.finalised)
    await waitforme(TIME.delay);

    // for(let k = 0; k < BARS.length; k++){
    //     if(BARS[k].style.background != 'green')
    //         BARS[k].style.background = 'cyan';
    // }

    return i;
}

async function quickSort(left, right) {
    if (left < right) {
        let pivot_index = await partitionLomuto(left, right);
        await quickSort(left, pivot_index - 1);
        await quickSort(pivot_index + 1, right);
    } else {
        if (left >= 0 && right >= 0 && left < BARS.length && right < BARS.length) {
            setColor(right, COLOR.finalised);
            setColor(left, COLOR.finalised);
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function() {
    let left = 0;
    let right = BARS.length - 1;
    await quickSort(left, right);
    // for(let k = 0; k < BARS.length; k++){
    //     setColor(k, COLOR.finalised);
    // }
});
async function start() {

    await waitforme(4000);
    quickSortbtn.click();
}
start()