var c = require('./constructor.js');
console.log(c);

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
        var slider = c.Slider();
        ul.appendChild(slider.ele());
        slider.img( sliders[j] );
        slider.className(j);
    }
}

//var Slider = function() {
//    var item = document.createElement('LI');
//    this.img = function(url) {
//        item.style.background = 'no-repeat center/100% url('+ url + ')';
//
//    };
//    this.className = function(className){
//      item.className = className;
//    };
//    Slider.prototype.ele = function(){
//        item.style.position = 'absolute';
//        item.style.listStyle = 'none';
//        item.style.width = '100%';
//        item.style.height = '100%';
//        return item;
//    };
//};


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