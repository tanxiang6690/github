//定义全局变量和定时器
var i = 0;
var timer;

$(function() {
    //用jquery方法设置第一张图片显示，其余隐藏
    $('.ig').eq(0).show().siblings('.ig').hide();

    //调用showTime()函数（轮播函数）
    showTime();

    //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
    $('.tab').hover(function() {
        //首先清除时间函数
        clearInterval(timer);
        //获取当前i的值，调用轮播函数
        i = $(this).index();
        showImg();
    }, function() {
        //鼠标离开时开启时间函数
        showTime();
    });

    $('.ig').hover(function() {
        /* Stuff to do when the mouse enters the element */
        clearInterval(timer);
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        showTime();
    });
});


//创建一个showTime函数
function showTime() {
    //设置定时器
    timer = setInterval(function() {
        //调用一个showImg()函数
        showImg();
        i++;
        //当图片是最后一张的后面时，设置图片为第一张
        if (i == 5) {
            i = 0;
        }
    }, 1500);
}

//创建一个Show函数
function showImg() {
    //在这里可以用其他jquery的动画
    $('.ig').eq(i).fadeIn(300).siblings('.ig').fadeOut(300);

    //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
    $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');
}