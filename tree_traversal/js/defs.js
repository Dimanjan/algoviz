let COLOR={
    active:'steelblue',
    touched:'white',//white
    untouched:'grey',//grey
    compare:'red',//red
    selected:'yellow',//yellow
    finalised:'green',//green
    pivot:'steelblue',


}
let SETTINGS={
    speed:10,
    width:document.body.clientWidth * 0.98,
    height:document.body.clientHeight * 0.8, 
    margin:{
        top:50,
        right:20,
        bottom:40,
        left:10
    },
    titleFontSize:30,
    valueFontSize:20,
}

let TIME={
    delay:80*SETTINGS.speed,
    swapdelay:10*SETTINGS.speed,
    comparedelay:40*SETTINGS.speed,
    finalisedelay:20*SETTINGS.speed,
}