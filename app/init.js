var Slider = require('./constructor.js');

function createSlider(parentNode, sliders, height, width) {
    var ul = document.createElement('UL');
    parentNode.appendChild(ul);
    ul.style.height = height + 'px';
    ul.style.width = width + 'px' || '100%';
    ul.style.position = 'relative';
    ul.style.padding = '0';
    ul.style.margin = '0';

    for(var i = 0; i<sliders.length; i++){
        var j = i;
        var slider = new Slider.ele();
        slider.init();
        ul.appendChild(slider.item);
        slider.img( sliders[j] );
        slider.className(j);
    }
}

//test
var sliders = [
    './imgs/slider01.jpg',
    './imgs/slider02.jpg',
    './imgs/slider03.jpg',
    './imgs/slider04.jpg',
    './imgs/slider05.jpg'
];
var body = document.getElementsByTagName('body')[0];
createSlider(body,sliders,500);