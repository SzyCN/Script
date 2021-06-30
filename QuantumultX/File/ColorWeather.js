/*
CaiYun Weather (ColorWeather) unlock Vip

QX 1.0.0:
^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/ColorWeather.js

MitM = biz.caiyunapp.com
*/


let obj=JSON.parse($response.body);
obj.data ["svip_expired_at"]= "1819768206"
$done({body: JSON.stringify(obj)});
