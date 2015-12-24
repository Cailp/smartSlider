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
    var ani = animate.opacity(testSlider.childSlider, 5000);
    function c(){
        //press p to pause and press c to continue
        if(event.keyCode === 80) {
            return ani.clear();
        }
        if(event.keyCode === 67) {
            ani.clear();
            return ani.continue();
        }
    }
    body.addEventListener('keydown',c);
}

toResize();
window.addEventListener('resize', toResize);