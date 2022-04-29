let COLOR={
    active:'steelblue',
    touched:'white',//white
    untouched:'white',//grey
    compare:'red',//red
    selected:'yellow',//yellow
    finalised:'green',//green
    pivot:'steelblue',


}
let SETTINGS={
    numbers:[49,21],
    speed:20,
    width:document.body.clientWidth * 0.98,
    height:document.body.clientHeight * 0.8, 
    margin:{
        top:150,
        right:20,
        bottom:40,
        left:100
    },
    barHeight:40,
    padding:20,
    titleFontSize:30,
    valueFontSize:50,
}

let TIME={
    delay:80*SETTINGS.speed,
    swapdelay:10*SETTINGS.speed,
    comparedelay:40*SETTINGS.speed,
    finalisedelay:20*SETTINGS.speed,
}