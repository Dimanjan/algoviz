function sleep(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
function setColor(id,color){
    d3.select('#bar'+id)
        .style('fill',color);
}

function setTitle(){
    d3.select('#viz').select('svg')
        .append('text')
        .attr('x',SETTINGS.width/2)
        .attr('y',SETTINGS.margin.top/4)
        .attr('text-anchor','middle')
        .attr('font-size',SETTINGS.titleFontSize)
        .attr('fill','#ffff00')
        .text(`GCD using Euclidean Algorithm`);

}
setTitle()

function showValues(){
    d3.select('#viz').select('svg').select('#values').remove()
    d3.select('#viz').select('svg')
        .append('text')
        .attr('id','values')
        .attr('x',SETTINGS.width/2)
        .attr('y',SETTINGS.titleFontSize *1.2 +SETTINGS.valueFontSize )
        .attr('text-anchor','middle')
        .attr('font-size',SETTINGS.valueFontSize)
        .attr('fill','#ffff00')
        .text(`${SETTINGS.numbers[0]}, ${SETTINGS.numbers[1]}`);
}




let xScale=d3.scaleLinear()
    .range([0,SETTINGS.width-SETTINGS.margin.right-SETTINGS.margin.left]);

function draw_initial_bars(){
    xScale.domain([0,d3.max(SETTINGS.numbers)])

    let svg=d3.select('#viz').select('svg')
        .attr('width',SETTINGS.width)
        .attr('height',SETTINGS.height)
        .attr('transform',`translate(0,50)`);

    d3.select('#viz').select('svg').selectAll('rect').remove()
    
    svg.selectAll('rect')
        .data(SETTINGS.numbers)
        .enter()
        .append('rect')
        .attr('x',(d,i)=>SETTINGS.margin.left+xScale(d3.max(SETTINGS.numbers)) - xScale(SETTINGS.numbers[i]))
        .attr('y',(d,i)=>SETTINGS.margin.top+i*SETTINGS.barHeight + i*SETTINGS.padding)
        .attr('width',d=>xScale(d))
        .attr('height',SETTINGS.barHeight)
        .attr('fill',COLOR.untouched)
        .attr('id',(d,i)=>`bar${i}`)
        .attr('class','bar');

    d3.select('#viz').select('svg').selectAll('.vals').remove()
    
    svg.selectAll('.vals')
        .data(SETTINGS.numbers)
        .enter()
        .append('text')
        .attr('x',(d,i)=>SETTINGS.margin.left/2)
        .attr('y',(d,i)=>SETTINGS.margin.top+i*SETTINGS.barHeight + i*SETTINGS.padding)
        .attr('dy',SETTINGS.barHeight*0.7)
        .text(d=>d)
        .attr('text-anchor','middle')
        .attr('fill',COLOR.untouched)
        .attr('id',(d,i)=>`vals${i}`)
        .attr('class','vals');
}


function difffernce([a,b]){
    return Math.abs(a-b);
}
function cut_off(id){
    let bar=d3.select('#bar'+id);
    bar.transition()
        .ease(d3.easeQuad)
        .duration(TIME.delay)
        .attr('width',xScale( difffernce(SETTINGS.numbers) ));
}



function realign(id,transX){
    let bar=d3.select('#bar'+id);
    bar.transition()
        .ease(d3.easeQuad)
        .duration(TIME.delay)
        .attr('x',SETTINGS.margin.left+xScale(d3.max(SETTINGS.numbers)) - xScale(SETTINGS.numbers[id])+transX);
        //.attr('transform',`translate(${transX},0)`)
}

function update_vals(){
    d3.select('#viz').select('svg').selectAll('.vals')
        .data(SETTINGS.numbers)
        .text(d=>d)
}

async function cut_off_and_realign(id){
    cut_off(id);
    await sleep(TIME.delay*1.2);
    let next_id= id == 0 ? 1:0;

    let diff=difffernce(SETTINGS.numbers);
    let idN=SETTINGS.numbers[id];
    let idN_next=SETTINGS.numbers[next_id];
    let smaller=d3.min(SETTINGS.numbers)
    let nums=(SETTINGS.numbers[id]+' '+SETTINGS.numbers[next_id]);

    console.log({idN,idN_next,diff,smaller,nums});

    if (diff>smaller){
        realign(next_id,-xScale(SETTINGS.numbers[next_id]));
    } else{
        realign(next_id,-xScale(diff));
        //await sleep(TIME.delay*1.2);
        realign(id,xScale(smaller - diff));
    }
    await sleep(TIME.delay*1.2);

}