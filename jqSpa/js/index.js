$(function () {
    let bodyHeight=$(window).height()-100;
    $(".iframe_box").height(bodyHeight);
    $(".children .active").click();
    GetRequest()
});
window.onresize=function(){
    let bodyHeight=$(window).height()-100;
    $(".iframe_box").height(bodyHeight);
};
$(".children li").click(function () {
    $(".children li").removeClass("active");
    $(this).addClass("active");
    $(".crumbs").html($(this).parent().prev().html()+" > "+$(this).text());
    let url = $(this).find("a").attr("data-url");
    $.get(url,function(data){
        if(data.substring(0,15)==="<!doctype html>"){
            window.location.href="/envimgt/html/login.html"
            window.location.reload()
        }else{
            $(".iframe_box").html(data);
        }
    });
});
function GetRequest() {
    let urlStr = location.href;
    let index = urlStr.indexOf("#");
    if(index!==-1){
        let url = urlStr.substring(index+1,urlStr.length);
        $(".children li").removeClass("active");
        $("a[data-url='"+url+"']").parent().addClass("active");
        alert(url)
        $.get(url,function(data){
            if(data.substring(0,15)==="<!doctype html>"){
                window.location.href="/envimgt/html/login.html"
                window.location.reload()
            }else{
                $(".iframe_box").html(data);
            }
        });
    }



}