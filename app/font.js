var fonts = {
    arrow : function(parent,direction,size,color) {
        var getSize;
        var getColor;
        !size ? getSize = 1 : getSize = size;
        !color ? getColor = "#000000" : getColor = color;
        var can = function() {
            var div = document.createElement('DIV');
            var setCanvas = document.createElement('canvas');
            parent.appendChild(div);
            div.appendChild(setCanvas);
            div.style.textAlign = 'center';
            div.style.position = 'absolute';
            setCanvas.setAttribute('class', 'ss-arrow');
            setCanvas.setAttribute('width', 150 * getSize);
            setCanvas.setAttribute('height', 100 * getSize);
            return setCanvas;
        };
        var canvas = can();
        var top = parent.clientHeight / 2 - canvas.parentNode.clientHeight / 2;
        canvas.parentNode.style.top = top + 'px';
        if(canvas.getContext){
            var thisFont = canvas.getContext('2d');
            thisFont.beginPath();
            switch(direction){
                case 'left' :
                    break;
                case 'right' :
                    thisFont.translate(125*getSize, 100*getSize);
                    thisFont.rotate(180*Math.PI/180);
                    break;
                case 'top' :
                    thisFont.translate(125*getSize, -25*getSize);
                    thisFont.rotate(90*Math.PI/180);
                    break;
                case 'bottom' :
                    thisFont.translate(25*getSize, 125*getSize);
                    thisFont.rotate(270*Math.PI/180);
                    break;
            }
            thisFont.moveTo(50*getSize, 50*getSize);
            thisFont.lineTo(100*getSize, 75*getSize);
            thisFont.lineTo(70*getSize, 50*getSize);
            thisFont.lineTo(100*getSize, 25*getSize);
            thisFont.fillStyle = getColor;
            thisFont.fill();
        }
    }
    //example : fonts.arrow(body,'left',2,'red');
};
module.exports = fonts;