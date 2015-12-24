var animate = {
    opacity : function(slider,time) {
        for (var i = slider.length; i > 1; i--) {
            var j = i - 1;
            slider[j].item.style.opacity = 0;
        }

        function In(ele) {
            ele.style.opacity = 0;
            function fadeIn() {
                ele.style.opacity = parseFloat(ele.style.opacity) + 0.1;
                var thisOpacity = ele.style.opacity;
                if (thisOpacity >= 1) {
                    ele.style.opacity = 1;
                    clearInterval(run);
                }
            }

            var run = setInterval(fadeIn, 100);
        }

        function Out(ele, nextEle) {
            ele.style.opacity = 1;
            function fadeOut() {
                ele.style.opacity = parseFloat(ele.style.opacity) - 0.1;
                var thisOpacity = ele.style.opacity;
                if (thisOpacity <= 0) {
                    ele.style.opacity = 0;
                    clearInterval(run);
                    In(nextEle);
                }
            }

            var run = setInterval(fadeOut, 100)
        }



        var k = 0;

        function start(next) {
            var thisEle = slider[k].item;
            var nextEle;
            if(next == true) {
                if (k == 0) {
                    nextEle = slider[slider.length-1].item;
                    Out(thisEle, nextEle);
                    k = slider.length-1;
                    return k;
                } else {
                    nextEle = slider[k-1].item;
                    Out(thisEle, nextEle);
                    k --;
                    return k;
                }
            }else{
                if (k < slider.length - 1) {
                    nextEle = slider[k + 1].item;
                    Out(thisEle, nextEle);
                    k++;
                    return k;
                } else if (k = slider.length - 1) {
                    nextEle = slider[0].item;
                    Out(thisEle, nextEle);
                    k = 0;
                    return k;
                }
            }
        }

        var autoRun = setInterval(start, time);


        //var body = document.getElementsByTagName('body')[0];
        //body.addEventListener('click', function(){
        //    clearInterval(autoRun);
        //    start(1);
        //    autoRun = setInterval(start, time);
        //});

        var obj = {};
        obj.clear = function(){
            clearInterval(autoRun);
        };
        obj.continue = function(){
            start();
            autoRun = setInterval(start, time);
        };
        obj.prev = function(){
            clearInterval(autoRun);
            start(1);
            autoRun = setInterval(start,time);
        };
        obj.next = function(){
            clearInterval(autoRun);
            start();
            autoRun = setInterval(start,time);
        };
        return obj;

    }
};
module.exports = animate;