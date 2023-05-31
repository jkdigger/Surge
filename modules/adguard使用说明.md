mobile-api.adguard.com

[Proxy]
FAKEVIP = http, 34.68.164.252, 8080, username=sERVsGqURPv3QQi, password=.shdqqy2ruAzJK6EAy(T, always-use-connect=true

[Rule]

# 终生使用adguard：proxy+url+ mobile-api.adguard.com
URL-REGEX,^https:\/\/mobile-api\.adguard\.com\/api\/1\.0\/ios_validate_receipt$,FAKEVIP