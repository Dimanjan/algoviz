function sleep(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
function setColor(id,color){
    d3.select('#circle'+id)
        .style('fill',color);
    d3.select('#vals'+id)
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
        .text(`Find Maximum Number: Linear Method`);

}
setTitle()



let radiusScale=d3.scaleLinear()
    

function calc_x(d,i){
    console.log(SETTINGS.margin.left , 
        i * 2 * SETTINGS.circleRadius , 
        radiusScale(d), SETTINGS.padding)
    let x= SETTINGS.margin.left + 
    i * 2 * SETTINGS.circleRadius + 
    radiusScale(d)+ SETTINGS.padding ;
console.log(x)
    return x;
}
function draw_initial_circles(){

    radiusScale.domain([0,d3.max(SETTINGS.numbers)])
        .range([0,(SETTINGS.circleRadius/2)-SETTINGS.padding]);

    let svg=d3.select('#viz').select('svg')
        .attr('width',SETTINGS.width)
        .attr('height',SETTINGS.height)
        .attr('transform',`translate(0,00)`);

    d3.select('#viz').select('svg').selectAll('circle').remove()
    
    svg.selectAll('circle')
        .data(SETTINGS.numbers)
        .enter()
        .append('circle')
        .attr('cx',(d,i)=> calc_x(d,i) )
        .attr('cy',(d,i)=>SETTINGS.margin.top+SETTINGS.height * 0.5)
        .attr('r',d=>radiusScale(d))
        .attr('fill',COLOR.untouched)
        .attr('id',(d,i)=>`circle${i}`)
        .attr('class','circle');

    d3.select('#viz').select('svg').selectAll('.vals').remove()
    
    svg.selectAll('.vals')
        .data(SETTINGS.numbers)
        .enter()
        .append('text')
        .attr('x',(d,i)=>SETTINGS.margin.left + i * 2 * SETTINGS.circleRadius + radiusScale(d)+ SETTINGS.padding )
        .attr('y',(d,i)=>SETTINGS.margin.top
                +SETTINGS.height * 0.5
                +SETTINGS.circleRadius)
        .attr('font-size',SETTINGS.valueFontSize)
        .text(d=>d)
        .attr('text-anchor','middle')
        .attr('fill',COLOR.untouched)
        .attr('id',(d,i)=>`vals${i}`)
        .attr('class','vals');
}


function disappear(id){
    d3.select('#circle'+id).transition()
        .ease(d3.easeQuad)
        .duration(TIME.delay)
        .attr('opacity','0');
    d3.select('#vals'+id).transition()
        .ease(d3.easeQuad)
        .duration(TIME.delay)
        .attr('opacity','0');

}



