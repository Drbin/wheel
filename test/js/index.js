 var obj={
        "name":"一个随意的小测试",//考试卷名称
        "time":"120",//考试时间
        "data":[
            {
                "type":"0",//考试类型 0 单选 1 多选
                "title":"进程池内部维护一个进程序列，当使用时，则去进程池中获取一个进程，如果进程池序列中没有可供使用的进进程，那么程序就会等待，直到______。",// 考试题目
                "point":"10",// 分值
                "testNum":"1",//题目序号
                "answer":[
                    [0,"进程池中没有有可用进程为止"],// 题目选项 answer[0][0]=0 错误 ：正确
                    [1,"进程池中有可用进程为止"],
                    [0,"进程池中有进程运行"],
                    [0,"线程没有锁死时"]
                ]
            },
            {
                "type":"0",
                "title":"var a=10; b=20; c=4;  ++b+c+a++ 以下哪个结果是正确的？",
                "point":"20",
                "testNum":"2",
                "answer":[
                    [0,"34"],
                    [1,"35"],
                    [0,"36"],
                    [0,"37"]
                ]
            },
            {
                "type":"1",
                "title":"协程的好处",
                "point":"15",
                "testNum":"3",
                "answer":[
                    [1,"无需线程上下文切换的开销"],
                    [1,"无需原子操作锁定及同步的开销"],
                    [1,"方便切换控制流，简化编程模型"],
                    [1,"高并发+高扩展性+低成本：一个CPU支持上万的协程都不是问题。所以很适合用于高并发处理。"]
                ]
            }
        ]
    }
    $("#title").text(obj.name)
    $("#time").text(obj.time);
    var str= "";
    var msg=obj.data;
    var sk= ["A","B","C","D","E","F","G","H","I","J"];
    for(var i=0; i<msg.length;i++){
        var tr="";
        if (msg[i].type==0){
            for(var k= 0; k<msg[i].answer.length;k++){
                tr+="<li>" +
                    "<div class='choose'><input name='testNum"+msg[i].testNum+"'  type=\"radio\" class=\"ace\" value='"+msg[i].answer[k][0]+"'>" +
                    "<label class='lbl'></label>"+sk[k]+". "+msg[i].answer[k][1]+"</div>" +
                    "</li>"
            }
        }else{
            for(var k= 0; k<msg[i].answer.length;k++){
                tr+="<li>" +
                    "<div class='choose'><input name='testNum"+msg[i].testNum+"'  type=\"checkbox\" class=\"ace\" value='"+msg[i].answer[k][0]+"'>" +
                    "<label class='lbl'></label>"+sk[k]+". "+msg[i].answer[k][1]+"</div>" +
                    "</li>"
            }
        }
        str+=" <div class=\"exam_list\" data-type='"+msg[i].type+"'>\n" +
            "        <div class=\"exam_tit\">第"+(i+1)+"题："+msg[i].title+"<span class='point_block'data-point='"+msg[i].point+"' >"+msg[i].point+"分</span></div>" +
            "        <ul class=\"answer_list\">" +
                        tr+
            "        </ul>" +
            "    </div>"
    }
    $(".exam_box").html(str);
    $("#submit").click(function () {
        layer.open({
            anim: 'up'
            ,content: '确认要提交吗？提交后就不能更改了'
            ,btn: ['确认', '取消']
            ,yes: function(index){
                var grade=0;
                $.each($(".exam_list"),function () {
                    var _this=$(this);
                    var point=_this.find(".point_block").attr("data-point")-0;
                    if(_this.attr("data-type")==0){
                        var f=0;
                        $.each(_this.find(".answer_list li"),function () {
                            if($(this).find("input[type='radio']").is(":checked")){
                                if($(this).find("input[type='radio']").val()==0){
                                    f++
                                }
                            }else if($(this).find("input[type='radio']").is(":checked")==false){
                                if($(this).find("input[type='radio']").val()==1){
                                    f++
                                }
                            }
                        })
                        if(f==0){
                            grade+=Number(point);
                        }

                    }else{
                        var f=0;
                        $.each(_this.find(".answer_list li"),function () {

                            if($(this).find("input[type='checkbox']").is(":checked")){
                                if($(this).find("input[type='checkbox']").val()==0){
                                    f++
                                }
                            }else if($(this).find("input[type='checkbox']").is(":checked")==false){
                                if($(this).find("input[type='checkbox']").val()==1){
                                    f++
                                }
                            }

                        })
                        if(f==0){
                            grade+=Number(point);
                        }

                    }
                })
                layer.open({
                    content:grade,
                    btn:["确认"]
                })
                layer.close(index);

            }
        });
    })
    var duration = obj.time;
    var time = 0;
    if(duration != null && duration !='' ) {
        time = duration;
    } else {
        time = 60;
    }
    var intDiff = parseInt(time*60);//倒计时总秒数量
    function timer(intDiff){
        window.setInterval(function(){
            var day=0,
                hour=0,
                minute=0,
                second=0;//时间默认值
            if(intDiff > 0){
                day = Math.floor(intDiff / (60 * 60 * 24));
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;

            $('#hour_show').html('<s id="h"></s>'+hour+'时');
            $('#minute_show').html('<s></s>'+minute+'分');
            $('#second_show').html('<s></s>'+second+'秒');
            if(intDiff == 60) {
                layer.open({
                    content: '还剩'+intDiff+'秒'
                    ,time: 3
                });
            }
            if(intDiff == 0){
                flag = !flag;
                layer.open({
                    content: '时间已到,系统自动提交'
                    ,time: 3
                });
                $("#save").click();
            }
            intDiff--;

        }, 1000);

    }
    $(function(){
        timer(intDiff);
    });

var option={
        subData:function () {

        }
    }