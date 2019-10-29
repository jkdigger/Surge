/* 
(爱美剧)（官网下载：app.meiju2018.com）
hostname =  mjappaz.yefu365.com, www.3ivf.com, mjapp.whetyy.com, www.ledpingweixiu.com

http-response ^https?:\/\/mjapp\.\w{1,9}\.com\/(index\.php\/app\/ios\/(vod\/show|user\/index|vod\/index)) script-path=script/aimeiju.js,requires-body=true
*/
var body = $response.body;
var url = $request.url;
const userinfo = "/index.php/app/ios/user/index"; //用户信息
const show = "/index.php/app/ios/vod/show"; //观看时间

if (url.indexOf(userinfo) != -1) {
    let obj = JSON.parse(body);
    obj.data.user["viptime"] = "2088-08-08 08:08:08";
    obj.data.user["cion"] = "88888";
    obj.data.user["vip"] = "1";
    body = JSON.stringify(obj);
}

if (url.indexOf(show) != -1) {
    let obj = JSON.parse(body);
    obj.data["looktime"] = -1;
    obj.data["vip"] = "4";
    obj.data["shareurl"] = "";
    obj.data["CT_App_Show_Pic1"] = "";
    body = JSON.stringify(obj);
}

$done({body});