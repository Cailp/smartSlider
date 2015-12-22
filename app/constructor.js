
var obj = {
    Slider : function () {
        var item = document.createElement('LI');
        this.img = function (url) {
            item.style.background = 'no-repeat center/100% url(' + url + ')';

        };
        this.className = function (className) {
            item.className = className;
        };
    }

};
obj.Slider.prototype.ele = function () {
    item.style.position = 'absolute';
    item.style.listStyle = 'none';
    item.style.width = '100%';
    item.style.height = '100%';
    return item;
};
module.exports = obj;