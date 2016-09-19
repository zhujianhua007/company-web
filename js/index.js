/**
 * Created by Administrator on 2016/9/18.
 */

window.onload= function () {
    
    var left = document.getElementById('left');
    var right =document.getElementById('right');
    var select = document.getElementById('all-select');
    var moveLeft = document.getElementById('moveLeft');
    var moveRight = document.getElementById('moveRight');
    var allImg = document.getElementById('allImg') ;
    var index = 0;
    left.onclick = function () {
        index--;
        if(index==-1){index=4}

        move(select,{left:-410*index});
    };
    right.onclick = function () {
        index++;
        if(index>=4){index=0}

        move(select,{left:-410*index});
    };
    moveLeft.onclick = function () {
        index--;
        if(index==-1){index=3}

        move(allImg,{left:-880*index});
    };
    moveRight.onclick = function () {
        index++;
        if(index==4){index=0}
        move(allImg,{left:-880*index});
    };
    
    
    
    function move(obj, args) {

        clearInterval(obj.timer);

        obj.timer = setInterval(function () {

            flage = true;                           //默认执行
            for (var i in args) {                 //i就相当于获得属性，即获得width，height等

                var j = parseInt(getStyle(obj, i));
                var speed = (args[i] - j) / 6;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                if (args[i] != j) {
                    obj.style[i] = j + speed + 'px';
                    flage = false;
                }
            }
            if (flage == true) {
                clearInterval(obj.timer);
            }

        }, 30)
    }
};








