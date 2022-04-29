async function bubbleOperation(j){

    setColor(j,COLOR.compare);
    setColor(j+1,COLOR.compare);
    await waitforme(TIME.comparedelay);
    if(BARS[j]>BARS[j+1]){
        swap(j,j+1);
        await waitforme(TIME.swapdelay);
    }

    setColor(j,COLOR.touched);
    setColor(j+1,COLOR.touched);

}

async function bubble() {
    for (let i = 0; i < SETTINGS.noOfBars-1; i++) {
        for (let j = 0; j < SETTINGS.noOfBars-i-1; j++) {
            await waitforme(TIME.delay);
            
            await bubbleOperation(j)
        }
        await waitforme(TIME.delay);
        setColor(SETTINGS.noOfBars-i-1,COLOR.finalised);
        await waitforme(TIME.finalisedelay);

    }
    await waitforme(TIME.delay);
    setColor(0,COLOR.finalised);
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    
    await bubble();
    
});