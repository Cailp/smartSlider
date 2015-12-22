 var obj = {
    Slider : function () {
        var what = document.createElement('LI');;
        this.item = what;
        this.img = function (url) {
            item.style.background = 'no-repeat center/100% url(' + url + ')';

        };
        this.className = function (className) {
            item.className = className;
        };

    }
};
 obj.Slider.prototype.ele = function () {
     this.item.style.position = 'absolute';
     this.item.style.listStyle = 'none';
     this.item.style.width = '100%';
     this.item.style.height = '100%';
     return item;
 };
 module.exports = obj;