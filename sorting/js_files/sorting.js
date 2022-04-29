function swap(j1, j2) {
    
    if (j1!=j2){

    
        const t = d3.transition()
            .duration(TIME.delay-TIME.swapdelay)
            .delay(TIME.swapdelay)
            .ease(d3.easeLinear);

        let bar1=d3.select(`#bar${j1}`)
        bar1.transition(t)
            .attr('x', j2 * (SETTINGS.width / SETTINGS.noOfBars))
        let bar2=d3.select(`#bar${j2}`)
        bar2.transition(t)
            .attr('x', j1 * (SETTINGS.width / SETTINGS.noOfBars))
        
        bar1.attr('id', `bar${j2}`)
        bar2.attr('id', `bar${j1}`)

        let temp=BARS[j1];
        BARS[j1]=BARS[j2];
        BARS[j2]=temp;
    }

}


function setColor(id,color){
    d3.select('#bar'+id)
        //.transition()
        //.delay(UPDATEB.delaystamp)
        .style('fill',color);
}


function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}


function createNewArray() {
    viz.innerHTML='';
    BARS=[];
    for (let i = 0; i < SETTINGS.noOfBars; i++) {
        let v=Math.floor(Math.random() *SETTINGS.height*0.85)+SETTINGS.height*0.05;
        BARS.push(v);
    }
    const svg = d3.select("#viz").append("svg")
        .attr("width",SETTINGS.width)
        .attr("height",SETTINGS.height);
   
    const rects = svg.selectAll(".bar")
        .data(BARS)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * (SETTINGS.width / SETTINGS.noOfBars))
        .attr("y", (d, i) =>SETTINGS.height-SETTINGS.margin.bottom - d)
        .attr("width", 0.9*SETTINGS.width / SETTINGS.noOfBars )
        .attr("height", (d, i) => d)
        .attr("fill", COLOR.untouched)
        .attr("id", (d, i) => 'bar'+i)
        .attr("class", "bar");


    
}
createNewArray();

function create_legend(lst){
    let legendLength=500;
    let radius=7;
    for (index=0;index<lst.length;index++) { 
        console.log(SETTINGS.height*0.9);       
        d3.select('#viz').select('svg').append('circle')
            .attr('cx',SETTINGS.width/2 -legendLength/2 + (index/lst.length)*legendLength)
            .attr('cy',SETTINGS.height*0.97)
            .attr('r',radius)
            .style('fill',COLOR[lst[index]])
            //.style('stroke','grey')
        d3.select('#viz').select('svg').append('text')
            .attr('x',radius*1.4+SETTINGS.width/2 -legendLength/2 + (index/lst.length)*legendLength)
            .attr('y',radius*0.7+SETTINGS.height*0.97)
            .style('fill','white')
            .text(lst[index])
    }
}
create_legend(['compare','touched','pivot','finalised']);

