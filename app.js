var init = require('./app/init.js');
var animate = require('./app/animate.js');

//test
var sliders = [
    './imgs/slider01.jpg',
    './imgs/slider02.jpg',
    './imgs/slider03.jpg',
    './imgs/slider04.jpg',
    './imgs/slider05.jpg'
];

var body = document.getElementsByTagName('body')[0];

var testSlider = init.createSlider(body, sliders);

function toResize(){
    var breakPoints = {
        width : [320,480,768,960,1920],
        height: [160,330,425,474,500]
    };
    init.sliderResize(testSlider,breakPoints);
    animate.opacity(testSlider.childSlider, 5000);
}

toResize();
window.addEventListener('resize', toResize);
