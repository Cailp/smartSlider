var Slider = {
    ele : function () {
        this.item = document.createElement('LI');
        this.img = function (url) {
            this.item.style.background = 'no-repeat center/100% url(' + url + ')';

        };
        this.className = function (className) {
            this.item.className = className;
        };

    }
};
Slider.ele.prototype.init = function () {
    this.item.style.position = 'absolute';
    this.item.style.listStyle = 'none';
    this.item.style.width = '100%';
    this.item.style.height = '100%';
    this.item.style.opacity = 1;
};
module.exports = Slider;