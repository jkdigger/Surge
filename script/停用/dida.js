/*
1. UI界面新增脚本, 脚本类型http response 
URL正则^https:\/\/dida365\.com\/api\/v2\/user\/status
开启需要body - 编辑脚本 - 复制以下内容 :
2. 添加MITM = dida365.com

http-response ^https:\/\/dida365\.com\/api\/v2\/user\/status requires-body=1,max-size=-1,script-path=script/dida.js

*/

var _0x54f8=["\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x70\x72\x6F\x45\x6E\x64\x44\x61\x74\x65","\x32\x30\x39\x39\x2D\x30\x31\x2D\x30\x31\x54\x30\x30\x3A\x30\x30\x3A\x30\x30\x2E\x30\x30\x30\x2B\x30\x30\x30\x30","\x6E\x65\x65\x64\x53\x75\x62\x73\x63\x72\x69\x62\x65","\x70\x72\x6F","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];var body=$response[_0x54f8[0]];var obj=JSON[_0x54f8[1]](body);obj[_0x54f8[2]]= _0x54f8[3];obj[_0x54f8[4]]= false;obj[_0x54f8[5]]= true;body= JSON[_0x54f8[6]](obj);$done({body})