
async function findGCD() {
    d3.select('#viz').select('svg').select('#values').remove()
    d3.select('#viz').select('svg').selectAll('rect').remove();
    d3.select('#viz').select('svg').selectAll('.vals').remove();

    await sleep(TIME.delay);
    showValues();
    await sleep(TIME.delay);
    draw_initial_bars()
    await sleep(TIME.delay);

   while (SETTINGS.numbers[0] && SETTINGS.numbers[1] && SETTINGS.numbers[0] !== SETTINGS.numbers[1] ) {
    setColor(0, COLOR.compare);  
    setColor(1, COLOR.compare);
    await sleep(TIME.delay*0.3);  
    setColor(0, COLOR.untouched);  
    setColor(1, COLOR.untouched);
    await sleep(TIME.delay*0.3);

    if(SETTINGS.numbers[0] > SETTINGS.numbers[1] ){
         await cut_off_and_realign(0);

         [SETTINGS.numbers[0] , SETTINGS.numbers[1] ] = [SETTINGS.numbers[0] - SETTINGS.numbers[1], SETTINGS.numbers[1] ];
      }else{
         await cut_off_and_realign(1);

         [SETTINGS.numbers[0] , SETTINGS.numbers[1] ] = [SETTINGS.numbers[0] , SETTINGS.numbers[1] - SETTINGS.numbers[0] ];
      
        };
    await sleep(TIME.delay*0.3);

        update_vals()
    await sleep(TIME.delay*0.8);

   };
   setColor(0, COLOR.finalised);  
    setColor(1, COLOR.finalised);
   return SETTINGS.numbers[0] || SETTINGS.numbers[1] ;
};

async function run(){
    await findGCD();
    SETTINGS.numbers = [460,736];
    await sleep(TIME.delay*1.3);
    await findGCD();

}
run()

