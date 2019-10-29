/*
Pixiv (P站) 解除热门度搜索
http-request https://app-api.pixiv.net/v1/search.*popular script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20pixiv%20search.js,script-update-interval=-1


Surge MITM = oauth.secure.pixiv.net, app-api.pixiv.net,

*/

let url = 'http://132.145.127.5:7777/pixivtoken'
//DO NOT ABUSE

let headers = $request.headers
$httpClient.get(url, (error, response, data) => {
    if (error) {
        $done({})
    }
    else {
        headers['Authorization'] = `Bearer ${data}`
        $done({headers})
    }
})