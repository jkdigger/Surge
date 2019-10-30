let obj = JSON.parse($response.body);
obj.data.is_vip = 1;
obj.data.vip_endtime = 1630296877;
$done({body: JSON.stringify(obj)});

/*
http-response https:\/\/www\.luqijianggushi\.com\/api\/v2\/user\/get requires-body=1,max-size=0,script-path=script/luqiStory.js

www.luqijianggushi.com

*/