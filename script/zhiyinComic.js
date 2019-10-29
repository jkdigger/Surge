/*
hostname=*.zymk.cn
[Script]
http-response ^https://getuserinfo-globalapi.zymk.cn/app_api/v5/getuserinfo/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Alex0510/surge/master/Script/zymk.js,script-update-interval=0

*/

let obj = JSON.parse($response.body);

obj.data= {
    "Uviptime": 1603438021000,
    "Ulevel": 5,
    "isvip": 1,
    "vipdate": "2020-10-23 00:00:00"
  }


$done({body: JSON.stringify(obj)});
