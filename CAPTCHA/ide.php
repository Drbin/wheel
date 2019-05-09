<?php
session_start();
header ('Content-Type: image/png');
$image=imagecreatetruecolor(90, 30);
//背景颜色为白色
$color=imagecolorallocate($image, 255, 255, 255);
imagefill($image, 20, 20, $color);

$code='';
$fontSize=100;
for($i=0;$i<4;$i++){
    $x=rand(5,10)+$i*22.5;
    $y=rand(5,10);
    $string=rand(0,9);
    $code.=$string;
    $color=imagecolorallocate($image,rand(0,120), rand(0,120), rand(0,120));
    imagestring($image, 7, $x, $y, $string, $color);
}
$_SESSION['code']=$code;//存储在session里
for($i=0;$i<200;$i++){
    $pointColor=imagecolorallocate($image, rand(100, 255), rand(100, 255), rand(100, 255));
    imagesetpixel($image, rand(0, 100), rand(0, 30), $pointColor);
}

imagepng($image);
imagedestroy($image);
