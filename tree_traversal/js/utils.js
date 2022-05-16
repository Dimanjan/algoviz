function sleep(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

//play happy-bell alert sound

var audio = new Audio('sound/happy-bell-alert.wav');

function playSound() {

    audio.play();
}

function setColor(id, color) {
    d3.select('#num' + id)
        .style('fill', color);

    playSound();

}


function setTitle() {
    d3.select('#viz').select('svg')
        .append('text')
        .attr('x', SETTINGS.width / 2)
        .attr('y', SETTINGS.margin.top / 2)
        .attr('text-anchor', 'middle')
        //dominant-baseline="middle"
        .attr('dominant-baseline', 'middle')
        .attr('font-size', SETTINGS.titleFontSize)
        .attr('fill', '#dddddd')
        .text(`Pre Order Traversal`);

}
//setTitle()