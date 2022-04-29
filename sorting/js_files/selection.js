

async function selectionOperation(j){

    setColor(j,COLOR.compare);
    await waitforme(TIME.comparedelay);

    if(BARS[j]<BARS[SELECTIONSORT.selectedIndex]){
        setColor(j,COLOR.selected);
        setColor(SELECTIONSORT.selectedIndex,COLOR.touched);

        SELECTIONSORT.selectedIndex=j;

    } else {
        setColor(j,COLOR.touched);
    }

}



async function selection() {
    setColor(0,COLOR.selected);
    for (let i = 0; i < SETTINGS.noOfBars; i++) {
        for (let j = i+1; j < SETTINGS.noOfBars; j++) {
            await waitforme(TIME.delay);
            await selectionOperation(j)
        }
        swap(i,SELECTIONSORT.selectedIndex);
        await waitforme(TIME.delay);
        
        setColor(i,COLOR.finalised);
        await waitforme(TIME.finalisedelay);
        
        SELECTIONSORT.selectedIndex=i+1;
        setColor(SELECTIONSORT.selectedIndex,COLOR.selected);
        await waitforme(TIME.delay);

        


    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    
    await selection();
    
});