/*
漫画下载地址中区无
https://apps.apple.com/us/app/%E8%9C%9C%E6%A1%83%E6%BC%AB%E7%95%AB/id1479940327

http-response ^https?:\/\/(bd|bdapp|mitaoapp)\.(4008109966|yeduapp)\.(net|com)\/\/index\.php\/api\/User\/userLogin requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bdmh.js,script-update-interval=-1

hostname = mitaoapp.yeduapp.com

来源 TG频道@NobyDa";

*/

var body = $response.body;
var obj = JSON.parse(body);

obj.data.user_info.isvip = "1";
obj.data.user_info.is_pay = "1";
obj.data.user_info.egold = "66666";
obj.data.user_info.vip_days = "66666";
obj.data.user_info.vip_start_time = "1502969604";
obj.data.user_info.vip_overtime = "2066-06-06 06:00:00";
obj.data.user_info.name = "NobyDa";
obj.data.user_info.avatar = "https://avatars3.githubusercontent.com/u/53217160?s=400&v=4";

body = JSON.stringify(obj); 
$done({body});