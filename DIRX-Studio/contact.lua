local cjson = require "cjson.safe"
ngx.req.read_body()
local body = ngx.req.get_body_data()
local data = cjson.decode(body)

if not data or not data.name or not data.email or not data.message then
  ngx.status = 400
  ngx.say(cjson.encode({ error = "حقول مطلوبة ناقصة" }))
  return ngx.exit(400)
end

-- حفظ البيانات في ملف
local file = io.open("/var/www/dirx/messages.txt", "a+")
file:write(cjson.encode(data) .. "\n")
file:close()

ngx.say(cjson.encode({ ok = true, message = "تم الاستلام" }))
