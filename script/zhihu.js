/*
经测试：页面刷新有问题
http-response ^https?:\/\/api\.zhihu\.com\/(moments\?|topstory\/recommend|.*\/questions|market\/header) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/Zhihu.js

hostname  api.zhihu.com

rule中加上如下
URL-REGEX,https://(api|www).zhihu.com/(fringe|zst|commercial|real_time|ad-style-service|banners|topstory/hot-lists|market/popover|mqtt|.*(launch|featured-comment-ad|recommendations|community-ad)|search/(top|tab|preset)|ab),REJECT
AND,((USER-AGENT,ZhihuHybrid*), (NOT,((DOMAIN-SUFFIX,zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
AND,((USER-AGENT,osee2*), (NOT,((DOMAIN-SUFFIX,zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
*/
const path1 = "/moments?";
const path2 = "/topstory/recommend";
const path3 = "/questions/";
const path4 = "/market/header";

const url = $request.url;
var body = $response.body;

if (url.indexOf(path1) != -1){
body=JSON.parse(body)
body['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('adjson')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(path2) != -1){
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(path3) != -1){
body=JSON.parse(body)
delete body['ad_info']
body=JSON.stringify(body)
}

if (url.indexOf(path4) != -1){
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
}

$done({ body })