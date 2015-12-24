var font = require('./font.js');

var buttons = {
    clickSwitchX : function(){
        var obj = {};
        var getUl = document.getElementsByClassName('ss-ul')[0];
        var buttonList = (function() {
            var buttonList = [];
            function createBtn (direction){
                var ele = document.createElement('div');
                ele.className = 'next';
                ele.style.position = 'absolute';
                ele.style.width = '20%';
                ele.style.height = '100%';
                ele.style.background = 'rgba(0,0,0,0.5)';
                ele.style.zIndex = '10';
                ele.style.opacity = '0';
                ele.style.cursor = 'pointer';
                switch (direction) {
                    case 'left':
                        ele.style.left = 0;
                        break;
                    case 'right':
                        ele.style.right = 0;
                        break;
                }
                return ele;
            }
            var next = createBtn('right');
            var prev = createBtn('left');
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