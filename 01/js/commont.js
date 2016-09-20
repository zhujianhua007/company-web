/**
 * Created by Administrator on 2016/8/17.
 */


//获取样式
//obj：获取的对象
//attr：获取对象的样式（left，background等）

function getStyle(obj, attr) {

    var result;

    if (obj.currentStyle) {                        // 兼容IE浏览器
        result = obj.currentStyle[attr];           //后面的【attr】其实就是.left之类的属性，写出这个样子后面才能传参
    } else {                                               // 兼容其他浏览器
        result = getComputedStyle(obj, null)[attr];
    }

    return result;
}


//获取id

function $(id) {
    return document.getElementById(id);
}


//缓冲
//obj:对象  attr：需要改变的样式名称  i：改变之后的数值  fn:执行完之后执行的函数，回调函数

function startMove(obj, attr, i, fn) {

    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        var width = parseInt(getStyle(obj, attr));
        var speed = (i - width) / 10;
        speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);

        if (i == width) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        } else {
            obj.style[attr] = width + speed + 'px';
        }

    }, 30)
}


//同时改变多种属性
//args: 多种属性集合 传参{width: 800,height:800}

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



function move(obj) {


    obj.onmousedown = function (e) {             //鼠标再目标区域点击事件

        obj.style.cursor = 'move';               //鼠标变为拖拽样子
        var e = e || window.event;
        var x1 = e.clientX;                    //获取鼠标初始位置X值
        var y1 = e.clientY;                    //获取鼠标初始位置Y值
        var left = obj.offsetLeft;               //获取拖拽目标初始位置left值
        var top = obj.offsetTop;                 //获取拖拽目标初始位置top值

        document.onmousemove = function (e) {            //鼠标在屏幕区域移动事件

            var e = e || window.event;
            var x2 = e.clientX;                            //获取鼠标最终位置X值
            var y2 = e.clientY;                            //获取鼠标最终位置Y值
            var num = parseInt(getStyle(obj,'width'))/2;     //获取目标的长度的一般，即样式中的magin-left的值
            obj.style.left = num + left + x2 - x1 + 'px';          //获取拖拽目标最终位置left值
            obj.style.top = top + y2 - y1 + 'px';             //获取拖拽目标最终位置top值
        };

        document.onmouseup = function () {                //鼠标在屏幕区域释放事件

            document.onmousemove = null;                  //清除鼠标移动事件
            document.onmouseup = null;                    //清除鼠标释放事件
            obj.style.cursor = '';                          //鼠标变为箭头样子

        };
        
        return false;
    };
    
}