function createSlider(parentNode, sliders, height, width) {
    var ul = document.createElement('UL');
    parentNode.appendChild(ul);
    ul.style.height = height + 'px';
    ul.style.width = width + 'px';
    ul.style.position = 'relative';
    ul.style.padding = '0';
    ul.style.margin = '0';

    for(var i = 0; i<sliders.length; i++){
        var j = i;
        var slider = new Slider();
        ul.appendChild(slider.ele);
        slider.ele.style.background = 'no-repeat center/100% url(' + sliders[j] + ')';

    }
}

function Slider() {
    var slider = {};
    slider.ele = document.createElement('LI');
    slider.ele.style.position = 'absolute';
    slider.ele.style.listStyle = 'none';
    slider.img = slider.ele.style.background;
    slider.className = slider.ele.className;
    slider.ele.style.height = '100%';
    slider.ele.style.width = '100%';
    return slider;
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
createSlider(body,sliders,500,1920);