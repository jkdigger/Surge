// hostname=license.pdfexpert.com
// http-response ^http(s)://license\.pdfexpert\.com/api/.*/pdfexpert6/subscription/refresh requires-body=1,max-size=0,script-path=script/pdfExpert.js
// 来源：https://raw.githubusercontent.com/langkhach270389/Scripting/master/Pdfexpert.vip.js


var obj = JSON.parse($response.body);

obj= {
  "originalTransactionId": "20000618444996",
  "subscriptionState": "trial",
  "isInGracePeriod": false,
  "subscriptionExpirationDate": "13:15 03/11/2099",
  "subscriptionAutoRenewStatus": "autoRenewOn",
  "isEligibleForIntroPeriod": false,
  "isPDFExpert6User": false,
  "subscriptionReceiptId": "1572178404000"
};

$done({body: JSON.stringify(obj)});

//