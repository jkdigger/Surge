/*
人人视频
https://apps.apple.com/cn/app/%E4%BA%BA%E4%BA%BA%E8%A7%86%E9%A2%91-%E5%85%A8%E7%BD%91%E6%9B%B4%E6%96%B0%E6%9C%80%E5%BF%AB%E7%9A%84%E5%BD%B1%E8%A7%86%E6%92%AD%E6%94%BE%E5%99%A8/id1453979465?l=en

[Script]
http-response ^https://api\.rr\.tv/v3plus/index/(channel|todayChoice)$ requires-body=1,max-size=-1,script-path=https://Choler.github.io/Surge/Script/RRad.js

[MITM]
hostname = api.rr.tv
*/

if ($request.method === "OPTIONS") {
  $done({});
} else {
  var obj = JSON.parse($response.body);
  if (obj.data.sections) {
    for (var i = obj.data.sections.length -1; i >= 0 ; i--) {
      if (obj.data.sections[i].sectionType === "AD") {
        obj.data.sections.splice(i,1);
      }
    }
  }
  $done({body: JSON.stringify(obj)});