;(function ($){


    //显示时间
    $.fn.showDate=function (options){
        var defaults = {
            format:'年月日'
        }
        var opts = $.extend(defaults,options);
        this.each(function (){
            var myDate = new Date();
            var y = myDate.getFullYear();   //获取完整的年份(4位,1970-????)
            var m = myDate.getMonth();      //获取当前月份(0-11,0代表1月)
            var day = myDate.getDate();       //获取当前日(1-31)
            var week = myDate.getDay();        //获取当前星期X(0-6,0代表星期天)
            switch (week){
                case 1:
                    week='一';
                    break;
                case 2:
                    week='二';
                    break;
                case 3:
                    week='三';
                    break;
                case 4:
                    week='四';
                    break;
                case 5:
                    week='五';
                    break;
                case 6:
                    week='六';
                    break;
                case 7:
                    week='日';
                    break;
            }
            var formatN = opts.format;
            if(formatN == '年月日'){
                var showTxt=y+'年'+(m+1)+'月'+day+'日'
                $(this).text(showTxt);
            }
            if(formatN == '年月日周'){
             var showTxt=y+'年'+(m+1)+'月'+day+'日'+'星期'+week;
             $(this).text(showTxt);
             }
            if(formatN == '///'){
             var showTxt=y+'/'+(m+1)+'/'+day+'/'+'星期'+week;
             $(this).text(showTxt);
             }
             if(formatN == '...'){
             var showTxt=y+'.'+(m+1)+'.'+day+'.'+'星期'+week;
             $(this).text(showTxt);
             }
        });
        return this;
    };

    //数字滚动显示
    $.fn.scrollNum = function (options){
        var defaults = {
            show:true,
            showNum:600
        };
        var options = $.extend(defaults,options);
        this.each(function (){
            if(options.show){
                var $_this = $(this);
                var currNum = options.showNum;
                var timer=null;
                var moveNum=0;
                $_this.text('');
                timer=setInterval(function (){
                    //currNum>500 ? moveNum+=15:moveNum+=5;
                    if(currNum<=500 ){
                        moveNum+=5
                    }
                    if(currNum>500 && currNum<=2500){
                        moveNum+=15
                    }
                    if(currNum>2500 && currNum<=5000){
                        moveNum+=25
                    }
                    if(currNum>5000 && currNum<7500){
                        moveNum+=35
                    }
                    if(currNum>=7500 && currNum<10000){
                        moveNum+=45
                    }
                    if(moveNum>=currNum){
                        moveNum=currNum;
                        clearInterval(timer);
                    }
                    $_this.text(moveNum);
                },30);
            }
        });
        return this;
    };

})(jQuery)
