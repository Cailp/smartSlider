var Slider = require('./constructor.js');

var slider = {
    //function createSlider(parentNode, sliders)
    createSlider: function(parentNode,sliders) {
        var ul = document.createElement('UL');
        parentNode.appendChild(ul);
    //ul.style.height = height + 'px';
    //ul.style.width = width + 'px' || '100%';
        ul.style.position = 'relative';
        ul.style.padding = '0';
        ul.style.margin = '0';

        for (var i = 0; i < sliders.length; i++) {
            var j = i;
            var slider = new Slider.ele();
            slider.init();
            ul.appendChild(slider.item);
            slider.img(sliders[j]);
            slider.className(j);
        }
        return ul;
    },

//function sliderResize(slider, breakPoints) {
    sliderResize: function(slider,breakPoints){
        var windowWidth = document.body.clientWidth;
        if (windowWidth < breakPoints.width[0]) {
            slider.style.height = windowWidth / (breakPoints.width[0]) * (breakPoints.height[0]) + 'px';
        }
        slider.style.width = '100%';
        for (var i = 0; i < breakPoints.width.length; i++) {
            var j = i;
            if (breakPoints.width[j - 1] < windowWidth) {
                slider.style.height = windowWidth / (breakPoints.width[j]) * (breakPoints.height[j]) + 'px';
            }
        }
    }

};
module.exports = slider;


////test
//var sliders = [
//    './imgs/slider01.jpg',
//    './imgs/slider02.jpg',
//    './imgs/slider03.jpg',
//    './imgs/slider04.jpg',
//    './imgs/slider05.jpg'
//];
//var body = document.getElementsByTagName('body')[0];
//var testSlider = createSlider(body,sliders);
//function toResize(){
//    var breakPoints = {
//        width : [320,480,768,960,1920],
//        height: [160,330,425,474,500]
//    };
//    sliderResize(testSlider,breakPoints);
//};
//toResize();
//window.addEventListener('resize',toResize);
