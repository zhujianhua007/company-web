/**
 * Created by Administrator on 2016/9/17.
 */



function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
       return getComputedStyle(obj, false)[attr];
    }
}
function animates(obj, args, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {

        var flag = true;
        for (var i in args) {
            var cur;
            if ('opacity' == i) {
                cur = getStyle(obj, 'opacity') * 100;
            } else {
                cur = parseInt(getStyle(obj, i));
            }
            var speed = (args[i] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (cur != args[i]) {
                if (i == 'opacity') {
                    obj.style.opacity = (cur + speed) / 50;
                    obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';  // filter:alpha(opacity=90)
                } else {
                    obj.style[i] = cur + speed + 'px';
                }
                flag = false;
            }
        }
        if (flag == true) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 50)
}

    var banner = document.getElementById('banner');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    console.log(getStyle(banner,'width'))

    var index = 0;
    prev.onclick = function () {
        index--;
        if (index == -1){
            index = 2;
        }
        animates(banner,{left:-index*1200});
        
    };

    next.onclick = function () {
      index++;
        if (index == 3){
            index = 0
        }
        animates(banner,{left:-index*1200})

    };





