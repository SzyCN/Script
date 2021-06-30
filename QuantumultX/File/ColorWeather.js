/*
CaiYun Weather (ColorWeather) unlock Vip

QX 1.0.0:
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/ColorWeather.js

MitM = biz.caiyunapp.com
*/

var body=$response[_0xe0e0[0]];
var obj=JSON[_0xe0e0[1]](body);
obj[_0xe0e0[3]][_0xe0e0[2]]= 1756696206;
obj[_0xe0e0[3]][_0xe0e0[4]]= true;
obj[_0xe0e0[3]][_0xe0e0[5]]= 1756696206;
obj[_0xe0e0[3]][_0xe0e0[6]]= true;
body= JSON[_0xe0e0[7]](obj);
$done
({body})
