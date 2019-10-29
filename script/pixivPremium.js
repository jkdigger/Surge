/*
Pixiv (P站) 伪装vip
http-response https://oauth.secure.pixiv.net/auth/token requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20pixiv%20premium.js,script-update-interval=-1
MITM = oauth.secure.pixiv.net, app-api.pixiv.net,
*/

let body = $response.body
body=JSON.parse(body)
body['response']['user']['is_premium']=true
body=JSON.stringify(body)
$done({body})