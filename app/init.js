var Slider = require('./constructor.js');

var init = {
    createSlider: function(parentNode,sliders) {
        var ul = document.createElement('UL');
        parentNode.appendChild(ul);
        ul.childSlider = [];
        ul.style.position = 'relative';
        ul.style.padding = '0';
        ul.style.margin = '0';

        for (var i = 0; i < sliders.length; i++) {
            var j = i;
            var slider = new Slider.ele();
            slider.init();
            ul.appendChild(slider.item);
            slider.img(sliders[j]);
            ul.childSlider.push(slider);
        }
        console.log (ul.childSlider);
        return ul;
    },

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
module.exports = init;