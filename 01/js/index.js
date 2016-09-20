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
    var li = document.getElementById('container') ;
    var one = document.getElementById('one') ;
    var two = document.getElementById('two') ;
    var three = document.getElementById('three') ;
    var no1 = document.getElementById('No1') ;
    var no2 = document.getElementById('No2') ;
    var no3 = document.getElementById('No3') ;
    var index = 0;
    var indexs= 0;
    //第一部分的轮播
    left.onclick = function () {
        index--;
        if(index==-1){index=5}
        move(select,{left:-410*index});
    };
    right.onclick = function () {
        index++;
        if(index==5){index=0}
        move(select,{left:-410*index});
    };
    var  time= setInterval(function () {

        index++;
        if(index==5){
            select.style.left=0;
            index=1;
        }
        move(select,{left:-410*index})


    },2000);
    left.onmouseover = function () {
        clearInterval(time)
    };
    left.onmouseout = function () {
        time= setInterval(function () {

            index++;
            if(index==5){
                select.style.left=0;
                index=1;
            }
            move(select,{left:-410*index})


        },2000);
    };
    left.onclick = function () {
        index--;
        if(index ==-1){
            select.style.left=0;
            index=3;
        }
        move(select,{left:-410*index})
    };
    right.onmouseover = function () {
        clearInterval(time)
    };
    right.onmouseout = function () {
        time= setInterval(function () {

            index++;
            if(index==5){
                select.style.left=0;
                index=1;
            }
            move(select,{left:-410*index})


        },2000);
    };
    right.onclick = function () {
        index++;
        if(index ==5){
            select.style.left=0;
            index=1;
        }
        move(select,{left:-410*index})
    };

    li.onmouseover = function(){
        clearInterval(time);
    };
    li.onmouseout = function () {
        time= setInterval(function () {

            index++;
            if(index==5){
                select.style.left=0;
                index=1;
            }
            move(select,{left:-410*index})


        },2000);
    };

  

    //第二部分的轮播
    moveLeft.onclick = function () {
        indexs--;
        if(indexs==-1){indexs=5}

        move(allImg,{left:-880*indexs});
    };
    moveRight.onclick = function () {
        indexs++;
        if(indexs==7){indexs=1}
        move(allImg,{left:-880*indexs});
    };
    var  timer= setInterval(function () {

        indexs++;
        if(indexs==7){
            allImg.style.left=0;
            indexs=1;
        }
        move(allImg,{left:-880*indexs})


    },2000);
    allImg.onmouseover = function(){
        clearInterval(timer);
    };
    allImg.onmouseout = function () {
        timer= setInterval(function () {

            indexs++;
            if(indexs==7){
                allImg.style.left=0;
                indexs=1;
            }
            move(allImg,{left:-880*indexs})


        },2000);
    };

    moveLeft.onmouseover = function () {
        clearInterval(timer);
    };
    moveLeft.onmouseout = function () {
        timer= setInterval(function () {

            indexs++;
            if(indexs==7){
                allImg.style.left=0;
                indexs=1;
            }
            move(allImg,{left:-880*indexs})


        },2000);
    };
    moveRight.onmouseover = function () {
        clearInterval(timer);
    };
    moveRight.onmouseout = function () {
        timer= setInterval(function () {

            indexs++;
            if(indexs==7){
                allImg.style.left=0;
                indexs=1;
            }
            move(allImg,{left:-880*indexs})


        },2000);
    };




    //选项卡
    //给第一个添加点击事件
    one.onclick = function () {
        no1.style.display ='block';
        no2.style.display = 'none';
        no3.style.display = 'none';
    };

    two.onclick = function () {
        no1.style.display ='none';
        no2.style.display = 'block';
        no3.style.display = 'none';
    };

    three.onclick = function () {
        no1.style.display ='none';
        no2.style.display = 'none';
        no3.style.display = 'block';
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








