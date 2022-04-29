

async function insertionOperation(j){

    setColor(j,COLOR.compare);
    setColor(j-1,COLOR.compare);

    await waitforme(TIME.comparedelay);

    swap(j,j-1);

    setColor(j,COLOR.selected);
    setColor(j-1,COLOR.selected);

}



async function insertion() {
    setColor(0,COLOR.selected);
    for (let i = 1; i < SETTINGS.noOfBars+1; i++) {
        j=i-1;
        while (j>0 && BARS[j]<BARS[j-1]){
            await waitforme(TIME.delay);
            await insertionOperation(j);
            j--;
        }
        await waitforme(TIME.delay);
        if (j>0){
            setColor(j,COLOR.compare);
            setColor(j-1,COLOR.compare);
            await waitforme(TIME.comparedelay);
            setColor(j,COLOR.selected);
            setColor(j-1,COLOR.selected);
        }

    }
    for (let i = 0; i < SETTINGS.noOfBars; i++) {
        await waitforme(TIME.finalisedelay);
        setColor(i,COLOR.finalised);
    }
}

const insertionSortbtn = document.querySelector(".insertionSort");
insertionSortbtn.addEventListener('click', async function(){
    
    await insertion();
    
});