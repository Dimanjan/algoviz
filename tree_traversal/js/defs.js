let COLOR={
    active:'steelblue',
    touched:'white',//white
    untouched:'grey',//grey
    compare:'red',//red
    selected:'yellow',//yellow
    finalised:'#03ff42',//green
    pivot:'steelblue',


}
let SETTINGS={
    delay_param:10,
    width:document.body.clientWidth * 0.98,
    height:document.body.clientHeight * 0.8,
}
SETTINGS.margin={
    top:SETTINGS.height*0.2,
    bottom:SETTINGS.height*0.1,
    left:SETTINGS.width*0.1,
    right:SETTINGS.width*0.1,
}

SETTINGS.titleFontSize=SETTINGS.height*0.05;
SETTINGS.valueFontSize=SETTINGS.height*0.03;


let TIME={
    delay:80*SETTINGS.delay_param,
    swapdelay:10*SETTINGS.delay_param,
    comparedelay:40*SETTINGS.delay_param,
    finalisedelay:20*SETTINGS.delay_param,
}