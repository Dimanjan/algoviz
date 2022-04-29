
async function findMAX() {
    draw_initial_circles()
    console.log('circles drawn')
    let maxValId=0;
    setColor(maxValId,COLOR.touched);
    for(let i=1;i<SETTINGS.numbers.length;i++){
        console.log(i)
        setColor(maxValId,COLOR.compare);
        setColor(i,COLOR.compare);

        await sleep(TIME.delay*1.1);


        if(SETTINGS.numbers[i]>SETTINGS.numbers[maxValId]){
            disappear(maxValId)
            maxValId=i;
        } else{
            disappear(i)
        }
        //await sleep(TIME.delay*1.1);

        //setColor(maxValId,COLOR.touched);

        await sleep(TIME.delay*1.1);

    }
    setColor(maxValId,COLOR.finalised);
    return SETTINGS.numbers[maxValId];

};

function calculateMaxRadius(){
    let l=SETTINGS.numbers.length;
    let r=SETTINGS.width/l/2;
    SETTINGS.circleRadius=r;
    SETTINGS.padding=r*0.2;
}

async function run(){
    calculateMaxRadius()
    await findMAX();
    SETTINGS.numbers = [460,736,345,876,123,456,789,234,567,890];
    calculateMaxRadius()
    await sleep(TIME.delay*1.3);
    await findMAX();

}
//run()

