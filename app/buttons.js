var font = require('./font.js');

var buttons = {
    clickSwitchX : function(){
        var obj = {};
        var getUl = document.getElementsByClassName('ss-ul')[0];
        var buttonList = (function() {
            var buttonList = [];
            var next = document.createElement('div');
            next.className = 'next';
            next.style.position = 'absolute';
            next.style.right = '0';
            next.style.width = '20%';
            next.style.height = '100%';
            next.style.background = 'rgba(0,0,0,0.5)';
            next.style.zIndex = '10';
            next.style.opacity = '0';
            next.style.cursor = 'pointer';
            var prev = document.createElement('prev');
            prev.className = 'prev';
            prev.style.position = 'absolute';
            prev.style.left = '0';
            prev.style.width = '20%';
            prev.style.height = '100%';
            prev.style.background = 'rgba(0,0,0,0.5)';
            prev.style.zIndex = '10';
            prev.style.opacity = '0';
            prev.style.cursor = 'pointer';
            getUl.appendChild(next);
            getUl.insertBefore(prev, getUl.childNodes[0]);
            buttonList.push(next);
            buttonList.push(prev);
            return buttonList;
        })();
        var leftArrow = font.arrow(buttonList[1],'left',1,'#fff');
        var rightArrow = font.arrow(buttonList[0],'right',1,'#fff');
        buttonList[1].style.position = 'absolute';
        buttonList[0].style.position = 'absolute';
        (function() {
            buttonList[1].addEventListener('mouseover', function () {
                buttonList[1].style.opacity = '1';
            });
            buttonList[1].addEventListener('mouseout', function () {
                buttonList[1].style.opacity = '0';
            });
            buttonList[0].addEventListener('mouseover', function () {
                buttonList[0].style.opacity = '1';
            });
            buttonList[0].addEventListener('mouseout', function () {
                buttonList[0].style.opacity = '0';
            });
        })();
        obj.left  = buttonList[1];
        obj.right = buttonList[0];
        return obj;
    }
};

module.exports = buttons;